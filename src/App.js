import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProfileMap from './component/ProfileMap';
import SignUp from './component/SignUp'
import Login from "./component/Login";
import Dash from './component/Dash';
import AdminDash from './component/AdminDash';
import Profile from './component/Profile';
export default function App() {

  return (
   <div className='flex flex-col'>
    <Router>
        <Routes>
        <Route exact path='/' element={<Login />}></Route>
          <Route exact path="/map" element={<ProfileMap />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dash" element={<Dash />} />
          <Route exact path="/admin" element={<AdminDash />} />
          <Route exact path="/profile" element={<Profile />} />
        
     </Routes>
      </Router>

   </div>
  );
}


