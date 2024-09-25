import {useState} from 'react';

import './Login.scss';

const Login = () => {
    const [slide, setSlide] = useState(false);

    return (
        <form className="login">
            <label htmlFor="login"
                   className='label_styling'>
                    LOGIN
            </label>
            <input type="text"
                   name='login' 
                   className='input_styling'/>
            <label htmlFor="password"
                   className='label_styling'>
                    PASSWORD
            </label>
            <input type="password"
                   name='password' 
                   className='input_styling'/>
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
                    className='login_btn'>
                SIGN IN
            </button>
            <div className='login_line'></div>        
        </form>
    )
}

export default Login;