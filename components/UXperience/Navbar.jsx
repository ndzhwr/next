import Link from 'next/Link'

const Navbar = () => {
    return (
        <div className="flex items-center px-[20vw] justify-between mb-6 py-4 border-b">
            <span className='font-bold first-letter:text-white first-letter:p-2 first-letter:bg-black'>NextVercelBlog</span>
            <div className="links flex gap-24">
                <Link href="/"><a className="text-black opacity-60 hover:opacity-100">Home</a></Link>
                <Link href="/blogs"><a className="text-black opacity-60 hover:opacity-100">Blogs</a></Link>
            </div>

        </div>
    )

}


export default Navbar