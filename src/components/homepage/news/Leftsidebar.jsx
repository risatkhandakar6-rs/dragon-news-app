import Link from 'next/link'
import React from 'react'

export default function Leftsidebar({categorys,activeId}) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-5">category</h1>
        <ul className="text-center ">
          {categorys.news_category.map((category) => 
            <li key={category.category_id} className={`${activeId === category.category_id && "bg-amber-100"}`}>
              
              <Link href={`/category/${category.category_id}`} className='block'>{category.category_name}</Link> </li>)}
      </ul>
    </div>
  )
}
