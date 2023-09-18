import {logo} from '../assets'
const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img 
                src={logo}
                alt="logo"
                className="w-28 object-contain"
            />

            <button
                type='button'
                onClick={() => window.open('https://github.com/AnthonyMerlyn/AiApp')}
                className='black_btn'
            >
                Github
            </button>
        </nav>
    </>
        
  )
}

export default Navbar