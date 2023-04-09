import {create} from 'zustand';

type AuthStore = {
    loginWithSMS: (phone: string) => void;
    signupWithSMS: (phone: string) => void;
    isLoggedIn: boolean;
    logout: () => void;
};

export const useAuth = create<AuthStore>((set, get) => ({
    isLoggedIn: false,
    loginWithSMS: (phone: string) => {
        // call API with Twilio endpoint to send SMS code
        // if successful, set isAuthenticated to true
        set({isLoggedIn: true});
    },
    signupWithSMS: (phone: string) => {
        // call API with Twilio endpoint to send SMS code
        // if successful, set isAuthenticated to true
        set({isLoggedIn: true});
    },
    logout: () => {
        set({isLoggedIn: false});
    }
}));
