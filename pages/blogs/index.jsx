// import { getStaticProps } from ".."
import Blog from "../../components/Blogs/Blog"
import Navbar from "../../components/UXperience/Navbar"

export default ({ data }) => {
    const Lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci esse amet soluta quidem fugiat culpa labore maiores sunt, cumque vero eius laboriosam veniam minus? Quasi illum delectus tempore, dolore eveniet ratione laboriosam voluptas, accusantium voluptatem fugit enim debitis recusandae quia perspiciatis fuga quibusdam cumque a hic, earum ab facere! Vero quam quas, nam nostrum blanditiis harum ipsa ea unde iusto, fugiat dolor soluta. Ipsa, perferendis voluptatibus? Vel repellendus reiciendis quisquam iste aliquam illum enim iure laboriosam dicta ratione, voluptates officiis dignissimos consequatur molestiae aliquid numquam exercitationem excepturi deserunt explicabo. Minus, laboriosam dolorum excepturi, amet vero magni recusandae natus similique, aperiam voluptas omnis odio? Cum illo magni assumenda praesentium, quae quibusdam quasi error quia fuga inventore earum distinctio animi temporibus omnis soluta optio accusantium ex sit accusamus, nostrum velit. Reiciendis iusto maxime libero sed, voluptas iure dolor illo ducimus excepturi aliquid harum animi reprehenderit vitae odit ipsa facere. Velit in, amet atque explicabo corporis blanditiis sequi dolores. Excepturi quos optio impedit soluta quo, dolorem quaerat esse obcaecati ratione atque aut tempora vero assumenda ipsam nihil facilis porro sed saepe? Vitae fugit provident, molestias ab illum perferendis maiores excepturi laborum aliquam illo optio voluptas quibusdam et unde blanditiis impedit itaque iusto doloremque? Labore corporis, provident perspiciatis facilis doloribus veritatis rerum nostrum consectetur officiis obcaecati dolorum voluptate nihil nam quas! Similique magni, quas autem impedit fugit, optio deserunt, placeat rem eius mollitia sapiente cum nostrum dignissimos adipisci alias! Tenetur labore officiis ad consequatur, asperiores porro totam tempore dolor, ullam ducimus sunt corrupti repellendus, molestiae voluptatibus nobis veritatis? Harum iste eveniet corporis in tenetur libero cumque laboriosam sit officia impedit? Nihil tempore at ipsam veniam dicta tenetur ipsa temporibus mollitia quia quos omnis harum earum aliquid, explicabo accusantium tempora iste qui natus maxime quaerat aut laudantium numquam! Temporibus, atque. Laudantium iste dolores repellendus"



    return (
        <>
            <Navbar />
            <div className="blogs px-[20vw]">

                <h1 className="font-bold text-xl my-6 ">Cool blogs for you</h1>
                <hr />
                <div className="flex flex-wrap">
                    {data.map(datum => (
                        <Blog blogId={datum.id} username={datum.username} blogTitle={datum.blogTitle} blogContent={datum.blogContent} />
                    ))
                    }

                </div>
            </div>
        </>
    )
}


export async function getServerSideProps(context) {


    const res = await fetch('http://localhost:3333/blogs')
    const  data   = await res.json() 

    return {
        props: { data }
    }
}