import "./App.css";
import { Button } from "reactstrap";
import logo from "./logo.png";
import CreateSurvey from "./CreateSurvey";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TakeSurvey from "./TakeSurvey";
function App() {
  return (
    <div className="App">
      <Router>
      <div className="survey-option-container">
        <Link to="/">
        <img src={logo} className="logo" alt="logo" />
        </Link>

        <Switch>
          <Route path="/create">
            <CreateSurvey />
          </Route>
          <Route path="/take">
            <TakeSurvey />
          </Route>

          <Route exact path="/">
            <Link to="/create">
              <Button size="lg" className="survey-btn">
                Create Survey
              </Button>
            </Link>
            <Link to="/take">
              <Button size="lg" className="survey-btn">
                Take Survey
              </Button>
            </Link>
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
