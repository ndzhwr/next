import Link from 'next/link'

const Blog = (props) => {
    let content = "";
    for (let i = 0; i < 100; i++) {
        content += props.blogContent[i]

    }
    content += "..."
    return (
        <Link href='/blogs/[id]' as={`/blogs/${props.blogId}`}>
            <div className="blog w-[300px] h-fit  hover:shadow-sm p-4 cursor-pointer" >
                <div className="mb-4 ">
                    <h1 className="text-title text-sm font-bold">@{props.username} </h1>
                </div>
                <h1 className="font-bold ">{props.blogTitle}</h1>
                <p className="text-[#C4C4C4] text-sm">{content}</p>
            </div>
        </Link>
    )

}


export default Blog;
