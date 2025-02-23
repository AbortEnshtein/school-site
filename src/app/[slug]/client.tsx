'use client'

import '@/app/[slug]/cards.css'
import { useState } from 'react'
import Link from 'next/link'
 
export default function ClientComponent({children, level}: {children: React.ReactNode, level: JSON}) {
  const enter = (e) => {
    const el = document.getElementById(e.target.id)
    const css = window.getComputedStyle(el)
    el.setAttribute('style', `height: ${parseInt(css.height)+20}px; width: ${parseInt(css.width)+10}px`)
  }
  const exet = (e) => {
    const el = document.getElementById(e.target.id)
    el.setAttribute('style', '')
  }
  return (
    <div id='main'>
      <img id='img' src={level.img[0]} alt="" />
      <img id='img2' src={level.img[1]} alt="" />
      <img id='img3' src={level.img[2]} alt="" />
      <Link id='s' className='s' href={'/'+`${level.id}`+'/map'} />
      <img id='i' className='s' src="https://2.downloader.disk.yandex.ru/preview/560f4bac09dd8ba0f5928068f69af2894ac37eff3edc68fbc3ca00788183bf8c/inf/mkp4XlqTjjs3HkjJDFzmFc3_icVoAhjRTy85Vc9xKSdg5z93QC6UybefkAMyewXX4bKYwTXIzJAUwd52p30STw%3D%3D?uid=863728945&filename=free-sticker-location-10630133.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=863728945&tknv=v2&size=1898x912" alt="" />
      <div id='text-box'>{level.text}</div>
      <div id='card-box'>
        <Link onMouseEnter={(e)=>{enter(e)}} onMouseLeave={(e)=>{exet(e)}} id='b1' className='card' href={'/'+`${level.id}`+'1'}>{level.card1}</Link>
        <Link onMouseEnter={(e)=>{enter(e)}} onMouseLeave={(e)=>{exet(e)}} id='b2'className='card' href={'/'+`${level.id}`+'2'}>{level.card2}</Link>
        <Link onMouseEnter={(e)=>{enter(e)}} onMouseLeave={(e)=>{exet(e)}} id='b3' className='card' href={'/'+`${level.id}`+'3'}>{level.card3}</Link>
      </div>
    </div>
  )
}