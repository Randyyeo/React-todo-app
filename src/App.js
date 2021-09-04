import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Signin from "./Signin";
import MyTodosHome from "./MyTodosHome";
import Home from "./Home";
import Calendar from "./Calendar";
import Add from "./Add";
import Today from "./Today";
import Layout from "./components/Layout";


function App() {
  
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Signin} />
          <Route path="/MyTodosHome" exact component={MyTodosHome} />
          <Route path="/MyTodosHome/Calendar" exact component={Calendar} />
          <Route path="/MyTodosHome/Add" exact component={Add} />
          <Route path="/MyTodosHome/Today" exact component={Today} />
        </Switch>
      </Router>
    </Layout>
  );
}
export default App;
