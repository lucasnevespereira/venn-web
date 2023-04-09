import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from '../../store/auth';
import styles from '../../styles/app.module.css';

export const Header = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const handleLogout = () => {
        auth.logout();
        navigate('/login');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Venn</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {auth.isLoggedIn && (
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
