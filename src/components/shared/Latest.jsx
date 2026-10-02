import React from 'react'
import Marquee from "react-fast-marquee";
export default function LatestNews() {
  const marqueeNews = [
  {
    id: 1,
    latestNews: "Latest news headline goes here"
  },
  {
    id: 2,
    latestNews: "Another breaking news headline goes here"
  },
  {
    id: 3,
    latestNews: "New updates and important announcements"
  },
  {
    id: 4,
    latestNews: "Stay updated with the latest developments"
  },
  {
    id: 5 ,
    latestNews: "Top stories and breaking news today"
  }
];
  return (
    <div className='container bg-blue-50 py-5 mx-auto flex gap-5'>
      <button className='btn btn-info ml-5'>Latest</button>
      <Marquee pauseOnHover={true} speed={70}>
        {marqueeNews.map((n) => (
          <span key={n.id} className='px-10'>{n.latestNews}</span>
        ))}
      </Marquee>
    </div>
  )
}
