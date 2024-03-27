import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import CartInfo from "../cart/CartInfo";
import { useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import { clearCart } from "../cart/cartSlice";
import store from '../../store';


function CreateOrder() {
  const username = useSelector(state=>state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const cart = useSelector(state=> state.cart.cart);


  if(!cart.length) return <EmptyCart/>

  
  return (
    <div className="px-2 py-2 grid-cols-2">
      <h2 className="mb-2">Ready to order?</h2>
      <Form method="POST">
        <div className="flex flex-col mb-5 gap-2">
          <label>Name</label>
          <input type="text" name="customer" required className="input" />
        </div>
        <div className="flex flex-col mb-5 gap-2">
          <label>Address</label>
          <input type="text" name="address" required className="input"/>
        </div>
        <div className="flex flex-col mb-5 gap-2">
          <label>Phone number</label>
          <input type="tel" name="phone" required className="input"/>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <Button>{isSubmitting ? 'Placing order...' : 'Order'}</Button>
      </Form>
      <CartInfo />
    </div>
  )
}

export async function action({request}){
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  const order = {
    ...data, 
    cart:JSON.parse(data.cart)
  }

  store.dispatch(clearCart());
 
  return redirect('/order/success');
}

export default CreateOrder