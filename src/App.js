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
import UserDashBoard from './components/UserDashBoard/UserDashBoard'
import AddNewProduct from './components/DashBoard/AddNewProduct/AddNewProduct';
import ExploreShoes from './components/ExploreShoes/ExploreShoes';
import SingleProductDetails from './components/SingleProductDetails/SingleProductDetails';
import AddNewReview from './components/DashBoard/AddNewReview/AddNewReview';
import AddNewBlog from './components/DashBoard/AddNewBlog/AddNewBlog';
import Footer from './components/Footer/Footer';

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

            <Route path='/addnewproduct'>
              <AddNewProduct />
            </Route>

            <Route path='/addnewblog'>
              <AddNewBlog />
            </Route>

            <Route path='/exploreshoes'>
              <ExploreShoes />
            </Route>

            <Route path='/blogs'>
              <Blogs />
            </Route>


            <Route path='/productdetails/:pId'>
              <SingleProductDetails />
            </Route>



            <Route path='/addnewreview'>
              <AddNewReview />
            </Route>

            <SecureRoute path='/blogs'>
              <Blogs />
            </SecureRoute>


            <SecureRoute path='/admindashboard'>
              <AdminDashBoard />
            </SecureRoute>


            <SecureRoute path='/userdashboard'>
              <UserDashBoard />
            </SecureRoute>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
