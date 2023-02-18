import './App.css';
import Dashboard from './Dashboard';
import Manufacturer from './Components/Manufacturer';
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Intermediate from './Components/Intermediate';
import Customer from './Components/Customer';
function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/manufacturer' element={<Manufacturer/>}/>
        <Route exact path='/intermediate' element={<Intermediate/>}/>
        <Route exact path='/verify' element={<Customer/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
