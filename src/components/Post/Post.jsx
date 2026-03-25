import React from 'react';
import classes from './Post.module.css';
import {useNavigate} from 'react-router-dom';

const Post = ({post, data, setData}) => {

    const navigate = useNavigate();

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    return (
        <div className={classes.postItem}>
            <div className={classes.postNumber}>{post.id}</div>
            <div className={classes.postContent}>
                <div className={classes.postTitle}>{post.title}</div>
                <div className={classes.postDescription}>{post.description}</div>
            </div>
            <button
                onClick={() => navigate(`/posts/${post.id}`)}
                className={`${classes.btnBase} ${classes.btnComments}`}>
                Comments
            </button>
            <button
                onClick={() => handleDelete(post.id)}
                className={`${classes.btnBase} ${classes.btnDelete}`}>
                X
            </button>
        </div>
    );
};

export default Post;