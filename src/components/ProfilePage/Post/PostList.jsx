import React from 'react'
import MyPost from './MyPost'

export default function PostList({ posts, title, remove }) {
    if (!posts.length) {
        return (
            <h1> Posts not found !!!</h1>
        )
    }

    return (
        <div>
            <h1> {title} </h1>

            {posts.map((post, index) =>
                <MyPost remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}
