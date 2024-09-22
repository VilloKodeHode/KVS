
export async function fetchInsta() {
    let token = process.env.INSTAGRAM_TOKEN
const baseURL = "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token="
 const refreshTokenURL = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
    try {

        const refreshRes = await fetch(refreshTokenURL)
        const refreshData = await refreshRes.json()

        if (refreshData.access_token) {
            token = refreshData.access_token
        }

        const res = await fetch(`${baseURL}${token}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Error fetching Instagram data or refreshing token:", error)
        return null;
    }
}