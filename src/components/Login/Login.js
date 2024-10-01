import {useState, useEffect} from 'react';
import useRegistrationUser from '../services/authService';

import spinner from '../../assets/spinner.gif';
import './Login.scss';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [slide, setSlide] = useState(false);
    const {loading, entry, loginUser} = useRegistrationUser();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage])

    const handleLogin = (e) => {
        e.preventDefault();
        if (entry === 'name') {
            setErrorMessage('User with this name not found.')
        }
        if (entry === 'password') {
            setErrorMessage('Invalid password.')
        }
        loginUser(login, password);
        setLogin('');
        setPassword('');        
    }

    return (
        <form className="login"
              onSubmit={handleLogin}>
                    {loading ? (
            <div className="spinner-container">
                <img src={spinner} alt="Loading..." />
            </div>
        ) : (
            <>
            <label htmlFor="login"
                   className='label_styling'>
                    LOGIN
            </label>
            <input type="text"
                   name='login' 
                   className='input_styling'
                   value={login}
                   onChange={e => setLogin(e.target.value)}/>
            {entry === 'name' ? <div className='error'>{errorMessage}</div> : null}
            <label htmlFor="password"
                   className='label_styling'>
                    PASSWORD
            </label>
            <input type="password"
                   name='password' 
                   className='input_styling'
                   value={password}
                   onChange={e => setPassword(e.target.value)}/>
            {entry === 'password' ? <div className='error'>{errorMessage}</div> : null}
            <div className={`slider ${slide ? 'slider_agree' : 'slider_disagree'}`}
                 onClick={() => setSlide(slide => !slide)}>
                <div className={`slider_elem ${slide ? 'slider_elem_agree' : 'slider_elem_disagree'}`}></div>
                <span className={`slider_text ${slide ? 'slider_text_agree' : 'slider_text_disagree'}`}>{slide ? 'YES' : 'NO'}</span>  
            </div>
            <div className='slider_title'
                 onClick={() => setSlide(slide => !slide)}>
                    Keep me signed in
            </div> 
            <button type='submit'
                    disabled={loading}
                    className='login_btn'>
                SIGN IN
            </button>
            <div className='login_line'></div> 
            </>
        )}       
        </form>
    )
}

export default Login;