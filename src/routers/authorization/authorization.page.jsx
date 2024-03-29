import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signInUser } from '../../App/slices/auth.slice';

import { createUserWithEaP, signInWithEaP, onAuthStateChangedListener, createUsersDocumentsFromAuth } from '../../utils/firebase/firebase';

// ------------- Top level - Containers / Layouts -------------- //
import { CenterLayout } from "../../Global-style/layouts";

// ------------- Top level React Components ------------------- //

// ------------ Page's Sections ----------------- //
import SignInSection from "./sections/sign-in/sign-in.section";

// ------------ Page's React Components ----------------- //

const users = {
    one: '123123123@gmail.com, 123123123',
    two: 'qweqwe@gmail.com, qweqweqwe',
}

// ------------- Lego --------------- //
const AuthorizationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChangedListener((user) => {
            if (user) {
                createUsersDocumentsFromAuth(user);
                dispatch(signInUser({
                    loggedIn: true,
                    uid: user.uid,
                }));
                navigate('/profile');
            } else {
                console.log('no user in')
            }
        })
    }, [])

    return (
        <CenterLayout>
            <SignInSection />
            <button onClick={async () => await createUserWithEaP('qweqwe@gmail.com', 'qweqweqwe')}>registr</button>
            <button onClick={async () => await signInWithEaP('qweqwe@gmail.com', 'qweqweqwe')}>sign in</button>
        </CenterLayout>
    )
}

export default AuthorizationPage;