
export async function fetchInsta() {
    const token = process.env.INSTAGRAM_TOKEN
const baseURL = "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token="
    try {
        const res = await fetch(`${baseURL}${token}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}