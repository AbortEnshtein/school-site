'use client'

import '@/app/[slug]/cards.css'
import { useState } from 'react'
import Link from 'next/link'
 
export default function ClientComponent({children, level}: {children: React.ReactNode, level: JSON}) {
  return (
    <div id='main'>
      <div id='text-box'>{level.text}</div>
      <div id='card-box'>
        <Link className='card' href={'/'+`${level.id}`+'1'}>{level.card1}</Link>
        <Link className='card' href={'/'+`${level.id}`+'2'}>{level.card2}</Link>
        <Link className='card' href={'/'+`${level.id}`+'3'}>{level.card3}</Link>
      </div>
    </div>
  )
}