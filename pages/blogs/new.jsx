import { useRouter } from 'next/router'
import { useState } from 'react'
import Navbar from '../../components/UXperience/Navbar'

const Home = () => {
    const router = useRouter()
    const [data, setData] = useState({ title: '', content: '' })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const resp = await fetch('http://localhost:3333/blogs', {
            method: 'POST',
            data: JSON.stringify({
                username: localStorage.getItem('username'),
                blogTitle: data.title,
                blogContent: data.content
            })

        })
        if (!resp.ok) {
            console.log(res)
            alert('An error occured')
        } else {
            localStorage.removeItem('username')
            router.push('/blogs')
        }
    }
    return (
        <>
            <Navbar />
            <div className='px-[20vw] font-poppins grid grid-cols-2'>
                <div className="text px-10">

                    <h1 className='font-bold text-xl'>Create a new blog</h1>
                    <p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa dolorum mollitia repudiandae magnam quas veniam distinctio tempora, blanditiis praesentium aperiam, harum similique nostrum nisi doloremque sunt debitis minima quae.
                        Eaque similique reiciendis eos, ea quia accusamus iste rerum est quibusdam? Tempora enim ex soluta aperiam et sapiente rem nisi temporibus dignissimos veniam vitae, hic voluptates eum sint dolores praesentium.</p>
                </div>
                <form className='w-[400px]' onSubmit={handleSubmit}>
                    <div className="1">
                        <label htmlFor="postTitle">Blog title</label> <br />
                        <input
                            type="text"
                            className='px-4 py-2 w-full border border-gray-200  bg-gray-50 focus:bg-white outline-none duration-200'
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                        />
                    </div>
                    <div className="2">
                        <label htmlFor="postTitle">Content</label> <br />
                        <textarea
                            className='px-4 py-2 w-full border border-gray-200  h-[400px] outline-none bg-gray-50 focus:bg-white duration-200'
                            onChange={(e) => setData({ ...data, content: e.target.value })}
                        />
                    </div>
                    <button type='Submit' className="w-full py-3 bg-black text-white font-semibold">Submit</button>
                </form>
            </div>
        </>
    )
}


export default Home
