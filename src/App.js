import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import CreateAd from "./pages/CreateAd";
import ConfirmAd from "./pages/ConfirmAd";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/confirmAd">
            <ConfirmAd />
          </Route>
          <Route path="/createAd">
            <CreateAd />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
