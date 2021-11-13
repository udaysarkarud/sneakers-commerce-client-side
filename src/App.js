import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/LogAndReg/Login'
import Registration from './components/LogAndReg/Registration'
import Blogs from './components/Blogs/Blogs'
import SecureRoute from './components/SecureRoute/SecureRoute'
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard'
import ExploreShoes from './components/ExploreShoes/ExploreShoes';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';


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

            <Route path='/exploreshoes'>
              <ExploreShoes />
            </Route>

            <Route path='/blogs'>
              <Blogs />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/registration'>
              <Registration />
            </Route>

            {/*  <SecureRoute path='/productdetails/:pId'>
              <SingleProductDetails />
            </SecureRoute> */}

            <SecureRoute path='/admindashboard'>
              <AdminDashBoard />
            </SecureRoute>


            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
