import React, { Children, useMemo, useState } from 'react'
import MyButton from '../../UI/button/MyButton'
import MyModal from '../../UI/modal/MyModal'
import PostFilter from './PostFilter'
import PostForm from './PostForm'
import PostList from './PostList'

const Post = (props) => {

    const [posts, setPosts] = useState([
        { id: 1, title: "aaa", description: "aaa" },
        { id: 2, title: "sss", description: "sss" },
        { id: 3, title: "bbb", description: "ccc" },
        { id: 4, title: "ccc", description: "aaa" }
    ])

    const [filter, setFilter] = useState({ sort: "", query: "" })
    const [modal, setModal] = useState(false)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        console.log("lol")
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <PostFilter filter={filter} setFilter={setFilter} />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts about js"} />

            <MyButton className='open-btn' onClick={() => setModal(true)} style={{marginTop: 50}}> Open module windows </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr />
        </div>
    )
}

export default Post 