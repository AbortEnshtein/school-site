import { notFound } from 'next/navigation'
import ClientComponent from './client'

export default async function ServerComponent({params}: {params: Promise<{ slug: string }>}) {
    const slug = (await params).slug
    const { Pool } = require('pg')
    const pool = new Pool({
        user: "owner",
        host: "localhost",
        database: "Clicker",
        password: "admin",
        port: 5432,
    });
    const result = await pool.query(`Select * From levels Where id=${slug}`)
    const level = result.rows[0]
    if (level===undefined) {notFound()}
    return (<ClientComponent children={undefined} level={level} />)
}