//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './components/layout/Footer';
import NotFound from './components/NotFound';
import Login from './components/Login';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import SendEmail from './components/SendEmail';
import AddCat from './components/AddCat';
import AddProduct from './components/AddProduct';
import CatView from './components/CatView';
import ProductView from './components/ProductView';
import CatWise from './components/CatWise';
import SendOrder from './components/SendOrder';
import BuyOrder from './components/BuyOrder';
import MyOrder from './components/MyOrder';
import MyCart from './components/MyCart';
import PayBill from './components/PayBill';
import PayBillNext from './components/PayBillNext';
import Feedback from './components/Feedback';
import Forgotpass from './components/Forgotpass';
import Otp from './components/Otp';
import Resetpass from './components/Resetpass';
import FeedbackView from './components/FeedbackView';
import CustomerOrdersAll from './components/CustomerOrdersAll';
import ViewCustomer from './components/ViewCustomer';

function App() {
  return (
    <Router>
    <div className="App">
     
      <Navbar></Navbar>
      
      <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/about" component={About}></Route>
         <Route exact path="/signup" component={SignUp}></Route>
         <Route exact path="/login" component={Login}></Route>
         <Route exact path="/userhome" component={UserHome}></Route>
         <Route exact path="/adminhome" component={AdminHome}></Route>
         <Route exact path="/sendmail" component={SendEmail}></Route>
         <Route exact path="/addcat" component={AddCat}></Route>
         <Route exact path="/addproduct" component={AddProduct}></Route>
         <Route exact path="/catview" component={CatView}></Route>
         <Route exact path="/productview" component={ProductView}></Route>
         <Route exact path="/cat_wise/:cat" component={CatWise}></Route>
         <Route exact path="/sendorder/:id" component={SendOrder}></Route>
         <Route exact path="/buyorder/:id" component={BuyOrder}></Route>
         <Route exact path="/myorder" component={MyOrder}></Route>
         <Route exact path="/mycart" component={MyCart}></Route>
         <Route exact path="/paybill/:id/:price/" component={PayBill}></Route>
         <Route exact path="/paybill_next/:price/" component={PayBillNext}></Route>
         <Route exact path="/feedback/" component={Feedback}></Route>
         <Route exact path="/forgotpass/" component={Forgotpass}></Route>
         <Route exact path="/otp/" component={Otp}></Route>
         <Route exact path="/resetpass/" component={Resetpass}></Route>
         <Route exact path="/viewfeedback/" component={FeedbackView}></Route>
         <Route exact path="/vieworders/" component={CustomerOrdersAll}></Route>
         <Route exact path="/viewcustomer/:user_id" component={ViewCustomer}></Route>
         
         <Route component={NotFound}></Route>
     </Switch>
     <Footer></Footer>

   
        
    </div> 
    </Router>
  );
}

export default App;
