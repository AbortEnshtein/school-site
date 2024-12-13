'use client'

import '@/app/[slug]/cards.css'
import { useState } from 'react'
import Link from 'next/link'
 
export default function ClientComponent({children, level}: {children: React.ReactNode, level: JSON}) {
  return (
    <div id='main'>
      <img id='img' src="https://downloader.disk.yandex.ru/preview/541a5a5556a0f55762016b6a4e893e02f747aaedf5934e8ed05f29e1ab075c80/675c3dff/KUSvkCNNelqnRaC2jIS6O4bY1ZNCV0gBqwIzLzTdbQ6ffClKgQClDWi96cz6JWUGuNgFky_jTHiGswnQ3D7qwA%3D%3D?uid=0&filename=e4f9f65bb93811efb7102e6086dc6f13_1.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048" alt="" />
      <div id='text-box'>{level.text}</div>
      <div id='card-box'>
        <img src="" alt="" />
        <Link className='card' href={'/'+`${level.id}`+'1'}>{level.card1}</Link>
        <Link className='card' href={'/'+`${level.id}`+'2'}>{level.card2}</Link>
        <Link className='card' href={'/'+`${level.id}`+'3'}>{level.card3}</Link>
      </div>
    </div>
  )
}