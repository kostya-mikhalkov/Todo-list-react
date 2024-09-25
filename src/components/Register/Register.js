
import './Register.scss';

const Register = () => {
    return (
        <form className='register'>
            <label htmlFor="fullname"
                   className='label_styling'>
                    FULL NAME
            </label>
            <input type="text"
                   name='fullname' 
                   className='input_styling'/>
            <label htmlFor="email"
                   className='label_styling'>
                    EMAIL
            </label>
            <input type="email"
                   name='email' 
                   className='input_styling'/>
            <label htmlFor="password"
                   className='label_styling'>
                    PASSWORD
            </label>
            <input type="password"
                   name='password' 
                   className='input_styling'/>
            <label htmlFor="confirm-password"
                   className='label_styling'>
                    CONFIRM PASSWORD
            </label>
            <input type="password"
                   name='confirm-password' 
                   className='input_styling'/>
            <button type='submit'
                    className='login_btn'>
                SIGN UP
            </button>
        </form>
    )
}

export default Register;