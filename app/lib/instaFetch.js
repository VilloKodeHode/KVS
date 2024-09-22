
export async function fetchInsta() {
    let token = process.env.INSTAGRAM_TOKEN
const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${token}`
    try {

        const res = await fetch(url, {cache: 'no-store'})
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Error fetching Instagram data or refreshing token:", error)
        return null;
    }
}