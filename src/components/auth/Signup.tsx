import React from 'react';
import {useAuth} from '../../store/auth';
import styles from '../../styles/app.module.css';

export const Signup = () => {
    const [phone, setPhone] = React.useState('');
    const auth = useAuth();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        auth.signupWithSMS(phone);
    };

    return (
        <div className={styles['signup-container']}>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="phone">Phone number:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button type="submit">Send code</button>
            </form>
        </div>
    );
};
