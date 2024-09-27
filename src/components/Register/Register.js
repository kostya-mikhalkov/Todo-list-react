import { useState, useEffect, useContext } from 'react';

import { MyContext } from '../Context/MyContext';
import { registrationUser } from '../services/authService';

import './Register.scss';

const Register = () => {
       const [login, setLogin] = useState('');
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [confirmPassword, setConfirmPassword] = useState('');
       const [error, setError] = useState('');
       const [errorEquals, setErrorEquals] = useState('');

       const {state, setState} = useContext(MyContext);
       
       const handleRegister = (e) => {
              e.preventDefault();

              if (!error) {
                     registrationUser(login, password)
                     setLogin('');
                     setEmail('');
                     setPassword('');
                     setConfirmPassword('');
              }
       }

       const checkedEmail = (str) => {
              const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
              regExp.test(str) !== true ? setError('email') : setError('');
       }

       const checkedPassword = (str) => {
              str.length < 6 ? setError('password') : setError('');
       }

       const checkedConfirmPassword = (str) => {
              str.length < 6 ? setError('passwordConfirm') : setError('');
       }

       const checkedEqualPassword = (password, confirmPassword) => {
              if (password !== confirmPassword) {
                  setErrorEquals('passwordMismatch');
              } else {
                  setErrorEquals('');
              }
          }

    return (
        <form className='register'
              onSubmit={handleRegister}>
            <label htmlFor="fullname"
                   className='label_styling'>
                    FULL NAME
            </label>
            <input type="text"
                   name='fullname' 
                   className={`input_styling ${error === 'login' ? 'input_error' : null}`}
                   required
                   value={login}
                   onChange={e => setLogin(e.target.value)}
                   onBlur={() => login.length < 8 ? setError('login') : setError('')}/>
            {error === 'login' ? <div className='error'>The name must not be less than 8 characters.</div> : null}
            <label htmlFor="email"
                   className='label_styling'>
                    EMAIL
            </label>
            <input type="email"
                   name='email'
                   required
                   value={email} 
                   className={`input_styling ${error === 'email' ? 'input_error' : null}`}
                   onChange={e => setEmail(e.target.value)}
                   onBlur={() => checkedEmail(email)}/>
              {error === 'email' ? <div className='error'>Checked your email.</div> : null}    
            <label htmlFor="password"
                   className='label_styling'>
                    PASSWORD
            </label>
            <input type="password"
                   name='password' 
                   className={`input_styling ${error === 'password' ? 'input_error' : null}`}
                   required
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   onBlur={() => checkedPassword(password)}/>
              {error === 'password' ? <div className='error'>Password length in minimum 6 symbols.</div> : null}
            <label htmlFor="confirm-password"
                   className='label_styling'>
                    CONFIRM PASSWORD
            </label>
            <input type="password"
                   name='confirm-password' 
                   className={`input_styling ${error === 'passwordConfirm' ? 'input_error' : null}`}
                   required
                   value={confirmPassword}
                   onChange={e => setConfirmPassword(e.target.value)}
                   onBlur={() => {
                     checkedConfirmPassword(confirmPassword);
                     checkedEqualPassword(password, confirmPassword); // Проверка совпадения паролей
                 }}/>
              {error === 'passwordConfirm' ? <div className='error'>Password length in minimum 6 symbols.</div> : null}
              {errorEquals === 'passwordMismatch' ? (
    <div className="error">Passwords do not match.</div>
) : null}
            <button type='submit'
                    className='login_btn'>
                SIGN UP
            </button>
        </form>
    )
}

export default Register;