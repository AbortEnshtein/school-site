import Link from "next/link";
import './main.css'
export default function Home() {
  return (
    <div id='list'>
      <div id='zag'>Игра по Смуте</div>
      <div id='link-box'>
        <Link className='butlink' href={'/1'}>Глава 1</Link>
        <Link className='butlink' href={'/2'}>Глава 2</Link>
        <Link className='butlink' href={'/3'}>Глава 3</Link>
      </div>
    </div>
  )
}
