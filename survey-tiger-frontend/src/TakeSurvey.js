import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";

function TakeSurvey() {
    
     const surveys = useSelector(state => (state.surveys.filter(s=>s.questions.length>0)));
  
    return (
      <div className="take-survey">
        TakeSurvey
        {surveys.map((i) => {
          return (
            <div className="ts-iem" key={i.surveyId}>
              Survey {i.surveyId}
            </div>
          );
        })}
      </div>
    );
}

export default TakeSurvey
