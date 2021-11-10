import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginForm from './LoginForm';
import Logout from './Logout';
import FriendsList from './FriendsList';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  

    let isLoggedIn = false 
    localStorage.getItem('token') === undefined ? isLoggedIn=false:isLoggedIn=true
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');
  

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            
          </li>
          <li>
            {isLoggedIn&& 
              <div>
                <Link to="/protected">Protected Page</Link>
                <p>Welcome to the page: {username}</p>
              </div>
            }
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/logout" component={Logout} isLoggedIn={isLoggedIn} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={LoginForm} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;



/*Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).
* The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.
* When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route
* Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
* Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.
* In your FriendsList component, rendered with `<PrivateRoute />`, you will create a list of your friends that you get from the API.*/