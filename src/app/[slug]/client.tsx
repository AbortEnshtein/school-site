'use client'

import '@/app/[slug]/cards.css'
import React, { useState } from 'react'
import Link from 'next/link'
 
export default function ClientComponent({children, level, cards}: {children: React.ReactNode, level: {id:string,text:string,img:string[],card_count:number, card_text:string[],card_img:string[],card_path:string[]}, cards: React.JSX.Element[]}) {
  return (
    <div id='g'>
      <img className='im' id='img' src={level.img[0]} alt="" />
      <img className='im' id='img2' src={level.img[1]} alt="" />
      <img className='im' id='img3' src={level.img[2]} alt="" />
      <div id='main'>
        <div className='back-box'>
          <img className='back' src="https://2.downloader.disk.yandex.ru/preview/560f4bac09dd8ba0f5928068f69af2894ac37eff3edc68fbc3ca00788183bf8c/inf/mkp4XlqTjjs3HkjJDFzmFc3_icVoAhjRTy85Vc9xKSdg5z93QC6UybefkAMyewXX4bKYwTXIzJAUwd52p30STw%3D%3D?uid=863728945&filename=free-sticker-location-10630133.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=863728945&tknv=v2&size=1898x912" alt="" />
          <Link className='back' href={'/'+`${level.id}`+'/map'}>{' '}</Link>
        </div>
        <div id='text-box'><p id='t-b'/><p id='t2'>{level.text}</p></div>
        <div id='card-box'>
          {cards}
        </div>
     </div>
    </div>
  )
}