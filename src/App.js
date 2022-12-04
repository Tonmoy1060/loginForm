import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import Register1 from './pages/Login/Register/Register1';
import Register2 from './pages/Login/Register/Register2';
import Register3 from './pages/Login/Register/Register3';
import TableData from './TableData';

function App() {
  return (
    <div className='max-w-7xl mx-auto m-5'>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='register1' element={<Register1></Register1>}></Route>
        <Route path='register2' element={<Register2></Register2>}></Route>
        <Route path='register3' element={<Register3></Register3>}></Route>
        <Route path='tableData' element={<TableData></TableData>}></Route>
      </Routes>
    </div>
  );
}

export default App;
