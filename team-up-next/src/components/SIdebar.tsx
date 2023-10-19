'use client';

import firebase from 'firebase/compat/app'
import { GoogleAuthProvider } from 'firebase/auth';

const Sidebar = () => {
    const loginWithGoogle = async () => {
        const userCred = await firebase.auth().signInWithPopup(new GoogleAuthProvider());
        console.log(userCred);
    }

    return (
        <button onClick={() => loginWithGoogle()}>hello</button>
    )
};

export default Sidebar;