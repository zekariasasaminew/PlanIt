import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
//import { auth } from '../firebase';

const AuthDetails = () => {
    const[authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const listen = onAuthStateChanged.bind(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        const auth = getAuth();
        signOut(auth). then(() => {
            console.log('Sign out successful')
        }).catch(error => console.log(error))
    }

    return (
        <div>
            { authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails