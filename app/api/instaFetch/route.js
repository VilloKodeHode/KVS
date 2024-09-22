export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    console.log(`Received token: ${token}`);
    console.log(`Expected token: ${process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN}`);
    console.log(searchParams)

    if (mode && token === process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
        return new Response(challenge, { status: 200 });
    } else {
        return new Response('Forbidden', { status: 403 });
    }
}

export async function POST(req) {
    const body = await req.json();
    console.log('Webhook received:', body);
    
    // Here you can process the incoming webhook data as needed.

    return new Response('EVENT_RECEIVED', { status: 200 });
}
// process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN
// https://e1e5-2a01-799-1028-7100-21bc-7b38-ff50-b8c7.ngrok-free.app/api/instaFetch?hub.mode=subscribe&hub.verify_token=VegardVilloInstaFetch&hub.challenge=test
