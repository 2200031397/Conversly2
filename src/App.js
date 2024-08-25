import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Dashboard}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
