'use client';

import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useRouter } from 'next/navigation';

import styles from './Login.module.css';
import Api from '../../helpers/api';

function LoginPage() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(false);

   const [_user, setUser] = useContext(UserContext);

   const router = useRouter();

   const handleInput = (e: any) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      if (name === 'username') setUsername(value);
      if (name === 'password') setPassword(value);
   };

   const handleSubmit = async () => {
      try {
         const requestToken = await Api.fetchRequestToken();
         console.log(requestToken);

         const sessionId = await Api.authenticate(
            requestToken,
            username,
            password
         );
         console.log(sessionId);
         setUser({ sessionId: sessionId.session_id, username });

         router.back();
      } catch (e) {
         setError(true);
         console.log(e);
      }
   };
   return (
      <>
         <div className={styles.wrapper}>
            <h1 className={styles.heading}>Login</h1>
            {error && (
               <div className={styles.error}>
                  There was an Error ...{' '}
               </div>
            )}
            <div className={styles.form}>
               <input
                  placeholder="Username"
                  className={styles.input}
                  value={username}
                  type="text"
                  name="username"
                  onChange={handleInput}
               />

               <input
                  placeholder="Password"
                  className={styles.input}
                  value={password}
                  type="password"
                  name="password"
                  onChange={handleInput}
               />

               <button
                  className={styles.button}
                  onClick={handleSubmit}>
                  Go
               </button>
            </div>
         </div>
      </>
   );
}

export default LoginPage;
