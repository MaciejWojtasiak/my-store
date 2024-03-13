import { Link } from "react-router-dom"
function CartOverview() {
  return (
    <div>
        <p>
            <span>23 items</span>
            <span>$23.34</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview