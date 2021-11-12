import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from './MyOrders';
import MyProfile from './MyProfile';
const UserDashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>UserDahboard</h2>

            <div>
                <div>
                    <h2>Topics</h2>
                    <ul>
                        <li>
                            <Link to={`${url}`}>DashHome</Link>
                        </li>
                        <li>
                            <Link to={`${url}/myprofile`}>Myprofile</Link>
                        </li>
                        <li>
                            <Link to={`${url}/myorders`}>Myorders</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/myprofile`}>
                            <MyProfile />
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;