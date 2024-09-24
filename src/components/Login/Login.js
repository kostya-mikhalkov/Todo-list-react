
import './Login.scss';

const Login = () => {
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
            <div className="slider">
                <div className="slider_elem"></div>
                <span className='slider_text'>YES</span>    
            </div>       
        </form>
    )
}

export default Login;