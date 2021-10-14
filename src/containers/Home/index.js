import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPost';

import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';

const SideImage = props => {

    return (
        <div style={{ height: `${props.height}px` }}>
            <img src={props.src} alt="" />
        </div>
    );
}



const ImageGallary = props => {
    const [x, setPost] = useState(0);
    useEffect(() => {
        setTimeout(function () {
            const y = (x < 4) ? x + 1 : 0;
            setPost(y)
        }, 3000)
    }, [x])
    return (

        <div className="gallaryPost" style={props.gallaryStyle}>
            <section style={{ width: props.largeWidth }}>
                <div className="mainImageWrapper">
                    <img src={'../../blogPostImages/' + props.imagesArray[x]} alt="" />
                </div>

            </section>
            <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                {
                    props.imagesArray.map(image =>
                        <SideImage
                            height={props.sideImageHeight}
                            src={'../../blogPostImages/' + image}
                            alt="" />
                    )
                }
            </section>
        </div>
    )
}

const Home = props => {
    const gallaryHeight = 450;
    const gallaryStyle = {
        height: gallaryHeight + 'px',
        overflow: 'hidden'
    }
    const sideImageHeight = gallaryHeight / 3;
    const imgAr = blogData.data.map(post => post.blogImage)
    const [img, setImg] = useState();

    return (
        <div>
            <Card>
                <ImageGallary
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    gallaryStyle={gallaryStyle}
                    imagesArray={imgAr}
                />
            </Card>

            <Layout>
                <RecentPosts style={{ width: '70%' }} />
            </Layout>

        </div>
    );
}

export default Home;