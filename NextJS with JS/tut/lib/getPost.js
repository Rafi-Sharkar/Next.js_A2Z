export default async function getPost(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10/${id}`)

    return result.json()

}