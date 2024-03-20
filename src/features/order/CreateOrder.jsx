import { useState } from "react";
import { Form } from "react-router-dom";
import Button from "../../ui/Button";

function CreateOrder() {
  const [cart, setCart] = useState(null);
  
  return (
    <div className="px-2 py-2">
      <h2 className="mb-2">Ready to order?</h2>
      <Form method="POST">
        <div className="flex flex-col mb-5 gap-2">
          <label>Name</label>
          <input type="text" name="customer" required className="input" />
        </div>
        <div className="flex flex-col mb-5 gap-2">
          <label>Phone number</label>
          <input type="tel" name="phone" required className="input"/>
        </div>
        <Button>Order now</Button>
      </Form>
    </div>
  )
}

export function action(){
  
}

export default CreateOrder