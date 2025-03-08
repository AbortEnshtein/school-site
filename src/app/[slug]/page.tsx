import { notFound } from 'next/navigation'
import ClientComponent from './client'
import Link from 'next/link';


export default async function ServerComponent({params}: {params: Promise<{ slug: string }>}) {
    const slug = (await params).slug
    const { Pool } = require('pg')
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PAS,
        port: 5432,
    });
    const result = await pool.query(`SELECT * FROM levels WHERE id='${slug}'`)
    const level:{id:string,text:string,img:string[],card_count:number, card_text:string[],card_img:string[],card_path:string[]} = result.rows[0]
    let bod:React.JSX.Element[] = []
    if (level===undefined) {notFound()}
    for (let i=0; i<level.card_count;i++) {
        const styling = {
            backgroundImage: `url('${level.card_img[i]}')`
        }
        if (level.card_path==null){
            bod.push(<Link className='card' style={styling} href={'/'+`${level.id}`+`${i+1}`}><p id='t'>{level.card_text[i]}</p><p id='text'/></Link>)
        } else {
            bod.push(<Link className='card' style={styling} href={'/'+ `${level.card_path[i]}`}><p id='t'>{level.card_text[i]}</p><p id='text'/></Link>)
        }
        
    }
    return (<ClientComponent cards={bod} children={undefined} level={level} />)
}