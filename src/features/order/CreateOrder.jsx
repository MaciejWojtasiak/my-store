import { useState } from "react";
import { Form } from "react-router-dom";
import Button from "../../ui/Button";

function CreateOrder() {
  const [cart, setCart] = useState(null);
  
  return (
    <div>
      <h2>Ready to order?</h2>

      <Form method="POST">
        <div>
          <label>Name</label>
          <input type="text" name="customer" required className="input" />
        </div>
        <div>
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