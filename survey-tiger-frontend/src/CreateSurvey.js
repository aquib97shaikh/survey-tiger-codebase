import React, { useState } from 'react'
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import "./CreateSurvey.css";
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';
function CreateSurvey() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownText, setDropDownText] = useState("Select Question Type");
  const [questionType, setQuestionType] = useState([
    "Multi-Select Question",
    "Single-Select Question",
  ]);
  const [questions, setQuestion] = useState([]);
  const addQuestion = (qts)=>{
      setQuestion([...questions,qts]);
      setDropDownText("Select Question Type");
  }
  const updateQuestion =(qts)=>{
      setQuestion(questions.map(q=>q.questionId===qts.questionId ? qts : q))
  }
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="create-survey">
      {/* {questions.map((question) => {
        return question.type === "Multi" ? (
          <MultiSelect questionId={question.questionId} question={question} updateQuestion={updateQuestion} />
        ) : (
          <SingleSelect questionId={questions.question} question={question} updateQuestion={updateQuestion} />
        );
      })} */}
      <ButtonDropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle caret size="lg">
          {dropDownText}
        </DropdownToggle>
        <DropdownMenu>
          {questionType.map((i) => (
            <DropdownItem
              className="cs-dropdownitem btn-lg"
              onClick={() => {
                setDropDownText(i);
              }}
              key={i}
            >
              {i}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
      {dropDownText === questionType[0] ? (
        <MultiSelect questionId={questions.length} addQuestion={addQuestion} />
      ) : null}
      {dropDownText === questionType[1] ? (
        <SingleSelect questionId={questions.length} addQuestion={addQuestion}/>
      ) : null}
    </div>
  );
}

export default CreateSurvey
