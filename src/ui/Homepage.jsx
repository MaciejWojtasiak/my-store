import { Link } from "react-router-dom"

function Homepage() {  
  return (
    <div className="text-center p-4">
      <h1 className="mx-2 my-2">FakeAPI store React app</h1>
      <p>This is an app where you can browse, select and order items fetched from the <a href="https://fakestoreapi.com" target="_blank" className="text-blue-600 visited:text-purple-600">https://fakestoreapi.com</a> API</p>
      <p>The app is build using: React.js, Redux and Tailwind.css </p>
      <Link to={'/store'} className="bg-neutral-500 py-3 px-4 tracking-wide rounded-lg uppercase mt-5 inline-block text-stone-200 text-sm hover:bg-neutral-600 transition-all duration-300">Go to the shop</Link>
    </div>
  )
}



export default Homepage