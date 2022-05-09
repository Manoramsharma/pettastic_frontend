import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/ShopPage";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "./redux/actions/authAction";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signup"
            render={() => (auth.token ? <Redirect to="/" /> : <Signup />)}
          />
          <Route
            exact
            path="/login"
            render={() => (auth.token ? <Redirect to="/" /> : <Login />)}
          />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
