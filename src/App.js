import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {

  //<img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="" />가 작동을 하지 않는다면 이렇게 설정해서 사용할 수 있음 
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";




  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        {/* process.env.PUBLIC_URL 은 pulic 폴더로 바로 갈수 있는 경로 */}
        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} alt="" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
