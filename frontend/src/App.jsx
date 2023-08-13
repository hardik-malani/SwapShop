import Contact from "./Pages/Contact"
import Demand from "./Pages/Demand"
import Donate from "./Pages/Donate"
import Feed from "./Pages/Feed"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './Actions/User.js';
import Slug from "./Pages/Slug"
import About from "./Pages/About"

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/feed/:id" element={<Slug />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/demand" element={<Demand />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/> } />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}