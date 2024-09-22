async function fetchInstagramMedia() {
    const token = process.env.INSTAGRAM_TOKEN;
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${token}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}



export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');
    console.log(`Received token: ${token}`);
    console.log(`Expected token: ${process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN}`);

    if (mode && token === process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
        return new Response(challenge, { status: 200 });
    } else {
        return new Response('Forbidden', { status: 403 });
    }
}

export async function POST(req) {
    try {
        // Log webhook event
        const body = await req.json();
        console.log('Webhook received:', body);

        // Fetch the latest Instagram content
        const instagramData = await fetchInstagramMedia();

        // Store the data or update your state, cache, or database with new content
        console.log('Fetched Instagram Data:', instagramData);

        return new Response('EVENT_RECEIVED', { status: 200 });
    } catch (error) {
        console.error('Error fetching Instagram data:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
// process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN
// https://e1e5-2a01-799-1028-7100-21bc-7b38-ff50-b8c7.ngrok-free.app/api/instaFetch?hub.mode=subscribe&hub.verify_token=VegardVilloInstaFetch&hub.challenge=test
// https://www.kvstrefelling.no/api/instaFetch?hub.mode=subscribe&hub.verify_token=VegardVilloInstaFetch&hub.challenge=test
