import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleBlog from '../../SingleBlog/SingleBlog';

const BlogSection = () => {
    const [blogsData, setBlogsData] = useState([]);
    useEffect(() => {
        axios.get('https://radiant-eyrie-71480.herokuapp.com/blogs?type=home')
            .then(res => {
                setBlogsData(res.data)
            })
    }, [])
    return (
        <section className="container section-divider">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="text-center ">
                        <h1>Our Journals for You</h1>
                        <p>We have more than 1k authors. They provide nice and well researched contents for your. Our stories that move you and move with you</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    blogsData.length === 0 ?
                        <section className="container section-gap">
                            <div className="container">
                                <div className="row">
                                    <img style={{ width: "300px" }} src="https://cdn.lowgif.com/full/31baf3ba3f2592ab-animated-gif-transparent-background-14-gif-images-download.gif" className="rounded mx-auto d-block" alt="..." />
                                </div>
                            </div>
                        </section>
                        :
                        blogsData?.map(blog => <SingleBlog key={blog._id} blog={blog} />)
                }
            </div>
        </section>
    );
};

export default BlogSection;