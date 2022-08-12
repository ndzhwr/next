import Link from 'next/link'
import Navbar from '../components/UXperience/Navbar'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    localStorage.setItem('username', Date.now().toString())
  }, [])
  return (
    <>
      <Navbar />
      <div className='px-[20vw] font-poppins '>

        <h1 className='text-4xl font-bold  mt-64 text-center  '>Blog App</h1>
        <p className="text-center text-black">
          Have fun by reading other's blogs


        </p>
        <div className="flex mx-auto gap-2 w-fit mt-24">
          <button className='py-2 px-4 border bg-black text-white'>Publish a blog</button>
          <Link href="/blogs"><button className='py-2 px-4 border'>Explore blogs</button></Link>
        </div>
      </div>
    </>
  )
}

export function getStaticProps(context) {
  console.log(context, "Hello")
  return {
    props: {},
  }
}

export default Home
