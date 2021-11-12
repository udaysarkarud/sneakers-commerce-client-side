import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import UserRoleManager from './UserRoleManager/UserRoleManager';
import useAuth from './../../hook/useAuth';
import AdminSecureRoute from '../SecureRoute/AdminSecureRoute';

const AdminDashBoard = () => {
    let { path, url } = useRouteMatch();
    const { userRole } = useAuth()
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
                        {
                            userRole?.admin && <li>
                                <Link to={`${url}/manageusersrole`}>Manage Users Role</Link>
                            </li>
                        }

                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <h3>Admin Dash Board</h3>
                        </Route>
                        <AdminSecureRoute path={`${path}/manageusersrole`}>
                            <UserRoleManager />
                        </AdminSecureRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;