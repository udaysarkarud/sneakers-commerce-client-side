import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/LogAndReg/Login'
import Registration from './components/LogAndReg/Registration'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/home'>
              <Home />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/registration'>
              <Registration />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
