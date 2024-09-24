
import Login from '../Login/Login';

import './TodoEnter.scss';

const TodoEnter = () => {
    return (
        <div className='todo'>
            <div className="todo_enter">
                <ul className='todo_list'>
                    <li className='todo_item'>SIGN IN</li>
                    <li className='todo_item'>SIGN UP</li>
                </ul>
                <Login />
            </div>
        </div>
    )
}

export default TodoEnter;