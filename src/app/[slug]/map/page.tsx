export default async function ServerComponent({params}: {params: Promise<{ slug: string }>}) {
    const slug = (await params).slug
    return (<>map-{slug}</>)
}