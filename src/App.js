import './App.css';
import React from "react";
import {  useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from './redux/store';
import Home from "./pages/Home";
import Users from "./pages/users";
import User from "./pages/user";
import About from "./pages/about";
import ChangeTheme from "./pages/ChaneTheme";
import Context from './Context';
import { Provider } from 'react-redux';



export default function App() {
  console.log(store.getState())

  const[isDark, toggleIsDark] = useState(false);
  const ctx = { 
    toggleTheme: () => {
      toggleIsDark(!isDark)
    },
    theme: isDark? "red" : "white",
    };
  return (
    <Context.Provider value={ctx}>
      <Router>
        <Provider store={store}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/form">form</Link>
            </li>
            <li>
              <Link to="/changeTheme">ChangeTheme</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user" exact>
            <User />
          </Route> 
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/changeTheme" exact>
            <ChangeTheme />
          </Route>
          <Route>
            <NoMatch />
          </Route> 
        </Switch>
      </div>
      </Provider>
    </Router>
    </Context.Provider> );
}



function NoMatch() {
  return (
    <div>
      <h3>
        No match for <code>this page</code>
      </h3>
    </div>
  );
}

