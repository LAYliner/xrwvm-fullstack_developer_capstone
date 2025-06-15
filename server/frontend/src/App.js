import LoginPanel from "./components/Login/Login"
import Register from './components/Register/Register'; //Update routing di frontend/src/App.js
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;
