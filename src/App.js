import React from 'react';
import reImg from './assets/re.png'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Docs from './pages/Docs';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './components/NotFound/NotFound';
import useToken from './hooks/useToken';

function App() {

  const { token, setToken } = useToken();

  return (
    <main>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <img src={reImg} alt="ReactElements by @AndreaEmme"></img>
          </a>
          <p className="" style={{ color: "#C64B20" }}>React custom components library by @AndreaEmme</p>
        </header>

        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {/* <Home/> */}
              <Redirect to={"/docs"} />
            </Route>
            <Route path="/docs">
              <Docs />
            </Route>
            {/* <Route path="/login">
              {token ? <Redirect to={"/dashboard"} /> : <Login setToken={setToken}/>}
            </Route>
            <Route path="/dashboard">
              {!token ? <Redirect to={"/login"} /> : <Dashboard/>}
            </Route> */}
            <Route path="*" exact>
            <NotFound theme="light" background="#fff" message="Non ho trovato niente nella pagina che hai richiesto!" buttonText="Indietro"></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2021 Andrea Marchetti
        </footer>
      </div>
    </main >

  );
}

export default App;
