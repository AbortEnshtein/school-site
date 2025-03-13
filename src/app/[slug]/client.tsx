'use client'

import '@/app/[slug]/cards.css'
 
export default function ClientComponent({children, level, cards}: {children: React.ReactNode, level: {id:string,text:string,img:string[],card_count:number, card_text:string[],card_img:string[],card_path:string[]}, cards: React.JSX.Element[]}) {
  return (
    <div id='g'>
      <img className='im' id='img' src={level.img[0]} alt="" />
      <img className='im' id='img2' src={level.img[1]} alt="" />
      <img className='im' id='img3' src={level.img[2]} alt="" />
      <div id='main'>
        <div id='text-box'><p id='t-b'/><p id='t2'>{level.text}</p></div>
        <div id='card-box'>
          {cards}
        </div>
     </div>
    </div>
  )
}