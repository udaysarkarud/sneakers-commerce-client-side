import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './../../hook/useAuth';

const AdminSecureRoute = ({ children, ...rest }) => {
    const { userProfile, userRole, isLoading } = useAuth()
    if (isLoading) {
        return <section className="container section-gap">
            <div className="container">
                <div className="row">
                    <img style={{ width: "300px" }} src="https://cdn.lowgif.com/full/31baf3ba3f2592ab-animated-gif-transparent-background-14-gif-images-download.gif" className="rounded mx-auto d-block" alt="..." />
                </div>
            </div>
        </section>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userProfile?.email && userRole?.admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admindashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminSecureRoute;