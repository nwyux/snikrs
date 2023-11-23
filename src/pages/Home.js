import Homecard from "../components/Homecard"
import Homecarousel from "../components/Homecarousel"
import ProductItem from "../components/NewProductItem"
import Homedown from "../components/Homedown"

export default function Home() {
  return (
    <div className='bg-blanc h-full'>
        <Homecard />
        <Homecarousel />
        <ProductItem />
        <Homedown />
    </div>
  )
}
