'use client'
import Image from 'next/image'
import '@/app/[slug]/cards.css'
 
export default function ClientComponent({children, level, cards}: {children: React.ReactNode, level: {id:string,text:string,img:string[],card_count:number, card_text:string[],card_img:string[],card_path:string[]}, cards: React.JSX.Element[]}) {
  return (
    <div id='g'>
      <Image id='img'
      loader={()=>{return level.img[0]}}
      src="me.png"
      alt="Picture of the author"
      fill={true}
      />
      <Image id='img2'
      loader={()=>{return level.img[1]}}
      src="me.png"
      alt="Picture of the author"
      fill={true}
      />
      <Image id='img3'
      loader={()=>{return level.img[2]}}
      src="me.png"
      alt="Picture of the author"
      fill={true}
      />
      <div id='main'>
        <div id='text-box'><p id='t-b'/><p id='t2'>{level.text}</p></div>
        <div id='card-box'>
          {cards}
        </div>
     </div>
    </div>
  )
}