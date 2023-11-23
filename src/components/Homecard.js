import { Link } from 'react-router-dom'
import sneakers from '../img/Home/sneakers.png'
import bghome from '../img/Home/bghome.png'

export default function Homecard() {
  return (
    <div className='bg-blanc h-full flex justify-center sm:py-12 sm:px-12 font-archivo'>
        <div className='bgCard border-4 border-noir sm:rounded-lg sm:w-4/5 h-4/5 py-6 sm:py-12 px-2 sm:px-6 md:px-12 lg:px-24 sm:flex-row flex flex-col-reverse justify-center items-center'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-5xl py-4 text-center sm:text-left md:text-3xl lg:text-4xl xl:text-6xl text-blanc'>SNIKRS</h1>
            <h2 className='text-xl text-center py-2 sm:text-left sm:text-md md:text-lg lg:text-2xl text-blanc'>NUMBER ONE <br/> ON THE <br/> SNEAKERS</h2>
            <div className='flex-row flex py-2 justify-center sm:justify-normal items-center gap-4'>
                <Link to='/sneakers' className='bg-noir text-blanc py-2 px-4 rounded-lg text-xs hover:bg-zinc-800'>DISCOVER</Link>
                <Link to='/about' className=' border-2 border-noir text-noir py-2 px-4 rounded-lg text-xs transition-all duration-150 hover:bg-noir hover:text-blanc'>ABOUT</Link>
            </div>
            </div>

            <div className='flex items-center max-w-4xl'>
                <img src={sneakers} alt="Sneakers Clipart" className=''/>
            </div>
        </div>
    </div>
  )
}
