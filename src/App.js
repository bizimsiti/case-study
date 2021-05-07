import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Favorites from "./components/Favorites";
import DashBoard from "./components/DashBoard";
import Register from "./components/Register";
import { UserDataProvider } from "./context/UserDataContext";
import { MovieDataProvider } from "./context/MovieDataContext";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <UserDataProvider>
        <MovieDataProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/dashboard">
                <DashBoard />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Router>
        </MovieDataProvider>
      </UserDataProvider>
    </div>
  );
}

export default App;
