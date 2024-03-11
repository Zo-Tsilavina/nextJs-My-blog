import Link from "next/link";

export default function Blog({e}){
     return(
          <>
               <Link href={`blog/${e.id}`}>
                    <div key={e.id}>
                         <h2>{e.title}</h2>
                         <p>{e.content}</p>
                    </div>
               </Link>
          </>
     )
}