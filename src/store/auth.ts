import {create} from 'zustand';
import axios from 'axios';

type AuthStore = {
    loginWithSMS: (phone: string, code: string) => Promise<void>;
    signupWithSMS: (phone: string, code: string) => Promise<void>;
    isLoggedIn: boolean;
    logout: () => void;
};

export const useAuth = create<AuthStore>((set, get) => ({
    isLoggedIn: false,
    loginWithSMS: async (phone: string, code: string) => {
        try {
            // Call the api endpoint to verify the SMS code
            const response = await axios.post('/api/auth/login', {phone, code});
            // If successful, set isLoggedIn to true
            if (response.status === 200) {
                set({isLoggedIn: true});
            } else {
                console.error(response.data.error);
            }
        } catch (error) {
            console.error(error);
        }
    },
    signupWithSMS: async (phone: string, code: string) => {
        try {
            // Call the api endpoint to verify the SMS code
            const response = await axios.post('/api/auth/signup', {phone, code});
            // If successful, set isLoggedIn to true
            if (response.status === 200) {
                set({isLoggedIn: true});
            } else {
                console.error(response.data.error);
            }
        } catch (error) {
            console.error(error);
        }
    },
    logout: () => {
        set({isLoggedIn: false});
    }
}));
