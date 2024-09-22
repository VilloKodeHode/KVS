"use client"

import { useEffect, useState } from 'react';

export default function InstagramFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const res = await fetch('/api/instaFetch', 
                    { method: 'GET' }
                );
                // Assuming the GET fetches the latest data
                console.log(res)
                const data = await res.json();
                console.log(data)
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch Instagram posts:', error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <div className="instagram-feed">
            {posts.length === 0 ? (
                <p>No content available.</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="instagram-post">
                        {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                            <img src={post.media_url} alt={post.caption || 'Instagram Post'} />
                        ) : post.media_type === 'VIDEO' ? (
                            <video controls>
                                <source src={post.media_url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : null}
                        <p>{post.caption}</p>
                        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                            View on Instagram
                        </a>
                    </div>
                ))
            )}
        </div>
    );
}