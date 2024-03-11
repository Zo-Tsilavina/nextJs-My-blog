import { useState } from "react";
import Blog from "../components/Blog";

export default function Home() {
  let [blogs, setBlog] = useState([
    {id: 1, title:"title1", content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officila modi voluptas eos temporibus doloremque voluptate cupiditate quidem maiores veniam asperiores deleniti, vel voluptatum cumque unde nulla amet. Consectetur, quod. "},
    {id: 2, title: "title2", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, numquam consequatur. Vitae eveniet vero praesentium. Enim amet, veniam ipsam facere deserunt ipsa molestias, reprehenderit quo ab quam natus, cum maxime. "},
    {id: 3, title: "title3", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error eaque nobis libero explicabo dolore iure reprehenderit illo laborum commodi nostrum consequatur nihil, eligendi, quis sed facere? Asperiores, quos quae. "}
  
  ])
  return (
    <>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} e={blog} />
        ))}
      </div>
    </>
  );
}
