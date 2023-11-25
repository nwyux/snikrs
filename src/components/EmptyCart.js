import { Link } from "react-router-dom"

export default function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h3 className="text-xl font-bold">Your cart is empty</h3>
        <p className="text-lg text-center">Looks like you haven't added any items to your cart yet.</p>
        <Link to="/sneakers" className="bg-noir text-blanc py-2 px-5 rounded-full text-lg mt-5 hover:bg-zinc-700">Start Browsing</Link>
    </div>
  )
}
