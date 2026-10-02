import Leftsidebar from '@/components/homepage/news/Leftsidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import Rightsidebar from '@/components/homepage/news/Rightsidebar';

import React from 'react'

 async function getCategorys() {
     const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
     const data = await res.json();
     return data.data;
  }
  async function getNewsCategorys(category_id) {
     const res= await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
     const data = await res.json();
     return data.data;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const category = await getCategorys();
  const current = category.news_category.find(c => c.category_id === id);
  return {
    title: `${current?.category_name }| Dragon News `
  }
  
}
export default async function NewsCategoryPage({ params }) {
  const {id} = await params;
  console.log(id, 'this is params red');
  const categorys = await getCategorys();
  const news = await getNewsCategorys(id);
  console.log(news,'this is news')
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 mt-10">
            <div className=" p-10 col-span-3 ">
              <Leftsidebar categorys={categorys} activeId={id}></Leftsidebar>
         
              </div>
              <div className=" p-10 col-span-6">
           <h1 className='text-lg font-bold mb-5'>alll</h1>
           {news.map((n) => {
             return <NewsCard key={n._id} news={n}></NewsCard>
           })}
               
             
               
       
             </div>
      <div className="col-span-3 pt-10 ">
      
               <Rightsidebar></Rightsidebar>
             </div>
          </div>
  )
}
