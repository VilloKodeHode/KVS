"use client"

import { useEffect, useState } from 'react';

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const res = await fetch('/api/instafetch'); // Call your API endpoint
                if (!res.ok) {
                    throw new Error('Failed to fetch Instagram posts');
                }
                const data = await res.json();
                setPosts(data.data); // Assuming data is in the format you expect
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {/* {posts.map((post) => (
                <div key={post.id}>
                    <img src={post.media_url} alt={post.caption} />
                    <p>{post.caption}</p>
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Instagram</a>
                </div>
            ))} */}
         
                <div key={posts[0].id}>
                    <img src={posts[0].media_url} alt={posts[0].caption} />
                    <p>{posts[0].caption}</p>
                    <a href={posts[0].permalink} target="_blank" rel="noopener noreferrer">View on Instagram</a>
                </div>
        
        </div>
    );
};

export default InstagramFeed;