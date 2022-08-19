// import * as dotenv from 'dotenv'
// dotenv.config()
import Navbar from '../../components/UXperience/Navbar';

export default ({ blog }) => {


    return (
        <>
            <Navbar />
            {<div className="back px-[20vw]">
                <button onClick={() => history.back()} >  Back</button>
                <div className="blog px-4 py-2 mt-2">

                    <span className='text-sm font-bold'>@{blog.username}</span>
                    <h1 className='text-xl font-bold my-2'> {blog.blogTitle}</h1>
                    <p className='text-sm'> {blog.blogContent}</p>
                    <p className='text-sm mt-12 indent-20'> {blog.blogContent}</p>
                </div>
            </div>}
        </>
    )
}



export async function getServerSideProps({ params, req, res }) {
    const resp = await fetch(`http://localhost:3333/blogs/${params.id}`)
    if (resp.ok == false) {
        res.writeHead(401, {
            Location: '/blogs'
        })
        res.end()
    }

    const blog = await resp.json()
    return {
        props: {
            blog : blog
        }
    }
}