import React from 'react';
interface Props {
    signInWithGoogle: SignInWithGoogle,
}
export const SignIn: React.FC<Props> = ({ signInWithGoogle }) => {
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    );
};