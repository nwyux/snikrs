import { Link } from 'react-router-dom'
import sneakers from '../img/Home/sneakers.png'

export default function Homecard() {
  return (
    <div className='bg-bleufonce h-full flex justify-center py-12 px-12 font-archivo'>
        <div className='bg-jaune rounded w-4/5 h-4/5 py-6 sm:py-12 px-2 sm:px-6 md:px-12 lg:px-24 sm:flex-row sm:flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center text-left'>
            <h1 className='text-2xl sm:py-4 text-center sm:text-left sm:text-3xl lg:text-6xl text-bleufonce'>SNIKRS</h1>
            <h2 className='text-lg text-center sm:text-left sm:text-xl lg:text-3xl text-bleufonce'>NUMBER ONE <br/> ON THE <br/> SNEAKERS</h2>
            <div className='flex-col sm:flex-row flex py-2 justify-center sm:justify-normal items-center gap-4'>
                <Link to='/sneakers' className='bg-rose text-bleufonce py-2 px-4 rounded-lg text-xs'>DISCOVER</Link>
                <Link to='/about' className='bg-jaune border-2 border-rose text-bleufonce py-2 px-4 rounded-lg text-xs transition-all duration-150 hover:bg-rose'>ABOUT US</Link>
            </div>
            </div>

            <div className='flex flex-col items-center max-w-4xl'>
                <img src={sneakers} alt="Sneakers Clipart" className=''/>
            </div>
        </div>
    </div>
  )
}