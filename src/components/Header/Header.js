import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
const Header = () => {
    const { userSignOut, user, isLoading, } = useAuth()
    const history = useHistory()
    const redirect_url = '/home'

    const singoutUser = () => {
        const userRouting = { history, redirect_url }
        userSignOut(userRouting)
    }
    return (
        <div>
            <h2>This is Header</h2>
            <Link to='/login'>Login</Link>
            <span> / </span>
            <Link to='/registration'>Registration</Link>

            <span>||</span>
            {
                user.email &&
                <>
                    <span>{user.displayName}</span>
                    <button onClick={singoutUser}>LogOut</button>
                </>
            }

        </div>
    );
};

export default Header;