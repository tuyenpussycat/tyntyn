import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import "./style.css"
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {

    const [posts, setPosts] = useState([])
    useEffect(() => {

        const posts = blogPost.data;
        setPosts(posts);


    }, [posts]);

    return (
        <div className="sidebarContainer" style={{
            width: props.width
        }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Me</span>
                    <div className="profileImageContainer">
                        <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/240390608_838161813549805_7814681848704867538_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5_G9qoaNcGcAX8XsyUN&tn=rbunyWGtFXU-Nlu_&_nc_ht=scontent.fhan2-2.fna&oh=e31752dac3a449ea6e0b7cc4ab852b77&oe=616A61E7" alt="TynTyn" />
                    </div>
                </div>
                <div className="cardbBody">
                    <p className="personBio">TynTyn- chuyên gia gánh team Coder </p>
                </div>
            </Card>
            <Card style={{ boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Socila Network</span>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                <div className="recentPosts">

                    {
                        posts.map(
                            post => {
                                return (
                                    <NavLink key={post.id} to={`/post/${post.id}`} >
                                        <div className="recentPost">
                                            <h3 >{post.blogTitle}</h3>
                                            <span>{post.postedOn}</span>
                                        </div>
                                    </NavLink>

                                )
                            }

                        )
                    }
                </div>
            </Card>
        </div>
    );
}

export default Sidebar;
