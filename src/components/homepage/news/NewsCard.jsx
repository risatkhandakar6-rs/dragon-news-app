
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiShare2 } from 'react-icons/ci'
import { FaEye, FaRegIdBadge, FaStar,  } from 'react-icons/fa'

export default function NewsCard({news}) {
  return (
    <div className="card bg-base-100 w-full shadow-sm mx-auto">
    
   <div className='py-5 bg-base-300 px-5 flex justify-between items-center'>
          <div className='flex gap-3'>
            <div>
            <Image className='rounded-full' src={news.author?.img} width={50} height={50} alt={news.title}></Image>
            
            
          </div>
          <div>
            <h4>{news.author?.name}</h4>
            <p className='text-xs'>{news.author?.published_date}</p>
          </div>
          
        </div>
        <div className='flex gap-2'>
          <FaRegIdBadge></FaRegIdBadge>
          <CiShare2></CiShare2>
        </div>
      </div>
  <div className="card-body">
    
       
     
      <h1 className='text-2xl font-bold py-5 '>{news.title}</h1>
      <Image className='mx-auto' src={news.image_url} alt={news.title} height={500} width={630}></Image>
        <p className='line-clamp-3'>{news.details}</p>
        <div className='flex justify-between'>
           <div className='flex gap-4'>
          <div>
          <h1 className='flex gap-1 items-center'>
            <FaStar className='text-yellow-200'></FaStar>
            {news.rating?.number}
          </h1>
          </div>
          <div>
          <h1 className='flex gap-1 items-center'>
            <FaEye></FaEye>
            {news.total_view}
          </h1>
        </div>
          </div>
          <div>
            <button className='btn'>
              <Link href={`/news/${news._id}`}>  View Details</Link>
            
            </button>
          </div>
       </div>
    
  </div>
</div>
  )
}
