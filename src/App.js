import { useState } from "react";

import TodoEnter from "./components/TodoEnter/TodoEnter";
import { MyContext } from "./components/Context/MyContext";

function App() {
  const [state, setState] = useState('');
  return (
    <div>
      <MyContext.Provider value={{state, setState}}>
        <TodoEnter />
      </MyContext.Provider>
    </div>
  );
}

export default App;
