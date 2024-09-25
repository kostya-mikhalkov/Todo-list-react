import { useState } from 'react';

import Login from '../Login/Login';
import Register from '../Register/Register';

import './TodoEnter.scss';

const TodoEnter = () => {
    const [sign, setSign] = useState(false)
    return (
        <div className='todo'>
            <div className="todo_enter">
                <ul className='todo_list'>
                    <li className={sign === false ? 'todo_item_activ' : 'todo_item'}
                        onClick={() => setSign(sign => !sign)}>
                            SIGN IN
                    </li>
                    <li className={sign === true ? 'todo_item_activ' : 'todo_item'}
                        onClick={() => setSign(sign => !sign)}>
                        SIGN UP
                    </li>
                </ul>
                {sign === false ? <Login /> : <Register />}
            </div>
        </div>
    )
}

export default TodoEnter;