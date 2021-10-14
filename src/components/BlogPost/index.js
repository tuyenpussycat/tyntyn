import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import "./style.css";
import postPost from '../../data/blog.json'
const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle: "",
        slug: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: "",

    });
    const [postId, setPostId] = useState({

    });
    useEffect(() => {
        const postId = props.match.params.postId;
        const post = postPost.data.find(post => post.id == postId);
        setPost(post);
    }, [post, props.match.params.postId]);

    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">post {post.postedOn} by {post.author}</span>
                </div>

                <div className="postImageContainer">
                    <img src={'../../blogPostImages/' + post.blogImage} alt="anhdeptraivl" />

                </div>

                <div className="postContent">
                    <h3>{post.slug}</h3>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    );
}

export default BlogPost;
