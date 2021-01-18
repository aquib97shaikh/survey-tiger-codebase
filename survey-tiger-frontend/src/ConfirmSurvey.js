import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {useHistory,useParams}  from "react-router-dom";
import { Button } from 'reactstrap';
function ConfirmSurvey(props) {
    const dispatch = useDispatch();
    const {surveyId} = useParams(); 
    const survey = useSelector(state=>state.surveys.filter(i=>i.surveyId === Number(surveyId)))[0];
    console.log(survey);
    return (
        <div className="confirm-survey">
            {survey && survey.questions.map(qts=>{
                return (
                  <div className="qts" key={qts.questionId}>
                    <h3>{qts.question}</h3>
                    {qts.type === "Multi" ? (
                      <div className="options">
                        {qts.options.map((opt, idx) => {
                          return (
                            <div key={opt + idx}>
                              <input type="checkbox" /> <label>{opt}</label>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      qts.options.map((opt,idx) => {
                        return (
                          <div key={opt+idx}>
                            <input type="radio" /> <label>{opt}</label>
                          </div>
                        );
                      })
                    )}
                  </div>
                );})}
                 <div className="qts-btn-container">
              <Button className="confirm-qts" >
                Update Question
              </Button>
           
            </div>
        </div>
    )
}

export default ConfirmSurvey;
