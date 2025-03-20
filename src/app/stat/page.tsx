'use server'
export default async function Home() {
    const { Pool } = require('pg')
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PAS,
        port: 5432,
    });
    const result = await pool.query(`Select * from en`)
    return(
        <div>
            <p>Посещений: {result.rows[0].enter}</p>
            <p>Выбранных карт: {result.rows[0].click}</p>
        </div>
    )
}