import './App.css';
import Header from './component/Header';
import CreateDeveloper from './pages/CreateDeveloper';
import Developers from './pages/Developers';
import { Route, Routes } from 'react-router';
import UpdateDeveloper from './pages/UpdateDeveloper';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/create" element={<CreateDeveloper/>}/>
        <Route exact path="/" element={<Developers />}/> 
        <Route exact path="/developers/:id" element={<UpdateDeveloper />}/>
      </Routes>    
    </>
  );
}

export default App;
