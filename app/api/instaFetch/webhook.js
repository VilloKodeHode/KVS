export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Step 5: Instagram will verify the webhook by sending a GET request with a "hub.challenge" parameter
        const hubChallenge = req.query['hub.challenge'];
        const hubMode = req.query['hub.mode'];
        const hubVerifyToken = req.query['hub.verify_token'];

        if (hubMode === 'subscribe' && hubVerifyToken === process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN) {
            // Respond with the hub.challenge to verify the webhook
            res.status(200).send(hubChallenge);
        } else {
            res.status(403).send('Forbidden');
        }
    } else if (req.method === 'POST') {
        // Step 6: Handle incoming Instagram updates (e.g., new posts)
        const update = req.body;

        console.log('Instagram update received:', update);

        // You can process the update here (e.g., refetch Instagram data)
        res.status(200).send('Webhook received successfully');
    } else {
        res.status(405).send('Method Not Allowed');
    }
}