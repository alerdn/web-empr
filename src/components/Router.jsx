import { Route, Switch } from "react-router";

//Pages
import Login from '../views/Login';
import Home from '../views/Home';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}