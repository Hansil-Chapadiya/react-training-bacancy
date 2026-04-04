// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css';
import StateComponent from './Components/Task1_useStateNameAge';
import Counter from './Components/Task2_useEffectLiveCounter';
import ChangeUserId from './Components/Task3_useEffectDependency';
import ThemeButton from './Components/Task4_themeButton';
import { ThemeContext } from './Context/ThemeContext';
import WindowWidth from './Components/Task5_classToFunction';
import Increment from './Components/Task6_useRef';
import Incdec from './Components/Task_6_useReducer';


// function App() {
//   const [count, setCount] = useState(0)
//   // let n = 0;

//   function normalUpdate() {
//     setCount(count + 1);
//     setCount(count + 1);
//   }

//   function functionalUpdate() {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   }

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         {/* <button onClick={() => {setCount((count) => count + 1)}}> */}
//         count is {count}
//         <button onClick={normalUpdate}>
//           Normal Update (+1 +1)
//           {/* {n++} won;t update */}
//         </button>
//         <button onClick={functionalUpdate}>
//           Functional Update (+1 +1)
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }






const App = () => {

  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const handleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <StateComponent />
      <hr />
      <Counter />
      <hr />
      <ChangeUserId />
      <hr />
      <ThemeContext.Provider value={{ theme, handleTheme }}>
        <ThemeButton />
      </ThemeContext.Provider>
      <hr />
      <WindowWidth />
      <hr />
      <Increment />
      <hr />
      <Incdec />

    </>
  )
}
export default App
// export { ThemeContext }