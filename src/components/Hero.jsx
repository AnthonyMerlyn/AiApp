
import Navbar from './Navbar';
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <Navbar />
    <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
    </h1>
    <h2 className='desc'>
    Paste any link, and Summarice instantly generates concise summaries, making information digestible and saving you time. Get to the heart of any content effortlessly. Try Summarice today!
    </h2>
    </header>
  )
}

export default Hero