import Resturant from "./component/basics/Resturant";
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      {<Resturant /> }
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}
export default App;
