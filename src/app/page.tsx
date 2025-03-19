import Link from "next/link";
import './main.css'
export default function Home() {
  return (
    <div id='list'>
      <div id='zag'>Игра по Смуте</div>
      <div id='link-box'>
        <Link id='l1' className='butlink' href={'/1'}>Глава 1</Link>
        <Link id='l2' className='butlink' href={'/2'}>Глава 2</Link>
        <Link id='l3' className='butlink' href={'/3'}>Глава 3</Link>
      </div>
    </div>
  )
}
