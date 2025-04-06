import Root from "./assets/Root.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentHome from "./assets/Home/ContentHome.jsx";
import SignUp from "./assets/Sign_Login/SignUp.jsx";
import LogIn from "./assets/Sign_Login/LogIn.jsx";
function App() {
  return (
    <BrowserRouter>
{/* <h1>34567yghj</h1> */}
   
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<ContentHome />}></Route>
          <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
          <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
