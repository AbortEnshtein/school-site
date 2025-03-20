'use server'
import Link from "next/link";
import './main.css'
export default async function H() {
  const { Pool } = require('pg')
  const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PAS,
      port: 5432,
  });
  const result = await pool.query(`Select * from en`)
  await pool.query(`UPDATE en SET enter = ${result.rows[0].enter+1}`)
  return (
    <div id='list'>
      <div id='zag'>Игра по Смуте</div>
      <div id='link-box'>
        <Link id='l1' className='butlink' href={'/1'}>Глава 1</Link>
        <Link id='l2' className='butlink' href={'/2'}>Глава 2</Link>
        <Link id='l3' className='butlink' href={'/3'}>Глава 3</Link>
        <Link id='l4' className='butlink' href={'/4'}>Тест</Link>
      </div>
    </div>
  )
}
