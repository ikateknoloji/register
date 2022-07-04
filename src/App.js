import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'


import 'react-toastify/dist/ReactToastify.css'
import './css/index.css';


import Header from "./components/Header";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
    <Router>
      <div className="container">
       <Header />
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
