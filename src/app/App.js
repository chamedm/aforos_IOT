import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from '../identity/SignIn';
import Dashboard from './Dashboard';


function App() {

  return (
    <Router>
      <Route path='/' exact component={SignIn}/> 
      <Route path='/dashboard' component={Dashboard}/>
      
    </Router>
  );
}


export default App;
