import Button from "../../ui/Button";
import { Form } from "react-router-dom";
function CreateUser() {
  return (
    <div className="p-5">
        <h2 className="my-5 uppercase">Create Account</h2>
        <Form>
            <div className="flex flex-col mb-5 gap-2">
                <label>Username:</label>
                <input type="text" className="input"/>
            </div>           
            <div className="flex flex-col mb-5 gap-2">
                <label >Number:</label>
                <input type="tel" className="input"/>
            </div>
            <div className="flex flex-col mb-5 gap-2">
                <label >Address:</label>
                <input type="text" className="input"/>
            </div>
            <Button>Create user</Button>
        </Form>
    </div>
  )
}

export default CreateUser;