import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path='/' component={Signup} />
          </Switch>
        </Router>
  );
}

export default App;
