//Importação do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importação estilo CSS padrão
import './App.css';

//Importação de páginas
import Login from './pages/Login';
import Home from './pages/Home';

//Importação de componentes
import NavBar from './components/NavBar';

//Importação do gerenciador de rotas
import{BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
