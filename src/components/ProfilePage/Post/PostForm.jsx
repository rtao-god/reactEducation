import React, { useState } from 'react'
import MyButton from '../../UI/button/MyButton'
import MyInput from '../../UI/input/MyInput'

export default function PostForm({ create, title, remove }) {

    const [post, setPost] = useState({ title: '', description: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({ title: '', description: '' })
    }

    return (
        <div>
            <form>
                <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value, description: e.target.value })} type="text" placeholder="name post" />
                <MyInput value={post.description} onChange={e => setPost({ ...post, title: e.target.value, description: e.target.value })} type="text" placeholder="description post" />

                <MyButton onClick={addNewPost}> Create post </MyButton>
            </form>
        </div>
    )
}
