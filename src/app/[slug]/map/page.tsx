export default async function ServerComponent({id}: {id: Promise<{ slug: string }>}) {
    const slug = (await id).slug
    return (<>map-{slug}</>)
}