import React from 'react'
import MyButton from '../../UI/button/MyButton'

const MyPost = (props) => {
    return (
        <div id="post">

            <p id="idPost"> {props.number} </p>

            <p id='postTitle'> {props.post.title} </p>

            <p> {props.post.description} </p>

            <MyButton onClick={() => props.remove(props.post)}> Delete </MyButton>

        </div >
    )
}

export default MyPost