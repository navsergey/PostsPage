import React, {useEffect, useState} from 'react';
import classes from './CommentsPage.module.css';
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";

function CommentsPage() {

    const params = useParams();
    const [comments, setComments] = useState([]);
    const [fetchComments, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);

    })

    useEffect(() => {
        void fetchComments();
    }, [])

    return (
        <>
            {isPostLoading
                ? <Loader/>
                : postError
                    ? <ErrorBlock error={postError} onRetry={fetchComments}/>
                    : <div className={classes.commentsPage}>
                        <div className={classes.commentsHeader}>
                            <h1 className={classes.title}>Комментарии</h1>
                            <div className={classes.commentsCount}>
                                Всего комментариев: {comments.length}
                            </div>
                        </div>

                        <div className={classes.commentsList}>
                            {comments.map(comment => (
                                <div key={comment.id} className={classes.commentItem}>
                                    <div className={classes.commentHeader}>
                                        <div className={classes.commentId}>#{comment.id}</div>
                                        <div className={classes.commentAuthor}>
                                            <div className={classes.commentName}>{comment.name}</div>
                                            <div className={classes.commentEmail}>{comment.email}</div>
                                        </div>
                                    </div>
                                    <div className={classes.commentBody}>
                                        {comment.body}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>}
        </>
    );
}

export default CommentsPage;