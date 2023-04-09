import {useAuth} from '../../store/auth';
import React from "react";
import styles from '../../styles/app.module.css';

export const Login = () => {
    const [phone, setPhone] = React.useState('');
    const auth = useAuth();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        auth.loginWithSMS(phone);
    };

    return (
        <div className={styles['login-container']}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="phone">Phone number:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button type="submit">Send code</button>
            </form>
        </div>
    );
};
