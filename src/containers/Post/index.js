import React from 'react';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import './style.css'
const post = (props) => {
    return (
        <section className="container">
            <Layout>
                <BlogPost {...props} />
            </Layout>

        </section>
    );
}

export default post;
