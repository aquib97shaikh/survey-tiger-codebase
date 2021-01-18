import "./App.css";
import { Button } from "reactstrap";
import logo from "./logo.png";
import {useSelector} from "react-redux";
import CreateSurvey from "./CreateSurvey";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import TakeSurvey from "./TakeSurvey";
import {useDispatch} from "react-redux";
import { surveySlice } from "./store/surveySlice";
import ConfirmSurvey from "./ConfirmSurvey";
function RedirectWithCallFirst(props) {
  props.callfirst();
  
  return (
    <>
      <h1>Redirecting...</h1>
      {props.callRedirect}
    </>
  );
}
function App() {
  const dispatch = useDispatch();
   const latestSurveyId = useSelector(state => state.nextSurveyId)
   
  return (
    <div className="App">
      <Router>
        <div className="survey-option-container">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>

          <Switch>
          <Route path="/create/:surveyId">
             
              <CreateSurvey />
            </Route>
            <Route path="/create">
              <Redirect to={`/create/${latestSurveyId}`} />
              
            </Route>
            
            <Route path="/take">
              <TakeSurvey />
            </Route>
            <Route path="/confirm/:surveyId">
              <ConfirmSurvey />
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
