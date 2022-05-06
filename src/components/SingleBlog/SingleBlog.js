import React from 'react';

const SingleBlog = (props) => {
    const { _id, blogTitle, blogTag, authorName, publishDate, blogImg, blogDescription } = props.blog
    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top img-fluid" src={blogImg} alt="..." />
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{blogTag}</div>
                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{blogTitle}</h5></a>
                    <p className="card-text mb-0">{blogDescription?.slice(0, 100)}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle me-3 img-fluid" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                            <div className="small">
                                <div className="fw-bold">{authorName}</div>
                                <div className="text-muted">{publishDate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;