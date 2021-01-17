import { Button } from "reactstrap";
import React, { useState } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
function MultiSelect(props) {
  const [options, setOptions] = useState(props.question ? props.question.options : [""]);
  const [question,setQuestion] = useState(props.question ? props.question.question : "");
  const addOption = (idx) => {
    if (options.length < 4) {
      const tempOptions = [...options];
      tempOptions.splice(idx + 1, 0, "");
      setOptions(tempOptions);
    }
  };
  const optionChange = (event) => {
    const id = Number(event.target.name);
    const tempOptions = [...options];
    tempOptions[id] = event.target.value;
    setOptions(tempOptions);
  };
  const deleteOption = (idx) => {
    if (options.length > 1) {
      const tempOptions = [...options];
      tempOptions.splice(idx, 1);
      setOptions(tempOptions);
    }
  };
  const addQuestion = (e)=>{
      if(question.trim() !=="" && options.filter(i=>i.trim().length ===0).length===0){
          props.addQuestion({
              question,options,type:"Multi",questionId:props.questionId
          })
      }
  }
  const updateQuestion = (e)=>{
      props.updateQuestion({
        question,options,type:"Multi",questionId:props.questionId
    })
  }
  return (
    <div className="multi-select">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
      </InputGroup>
      <div className="options">
        {options.map((i, idx) => {
          return (
            <div className="option-container">
              <InputGroup>
                <Input
                  name={idx}
                  value={i}
                  onChange={optionChange}
                  placeholder="type your answer here"
                />
                <InputGroupAddon
                  onClick={() => {
                    addOption(idx);
                  }}
                  addonType="append"
                  disabled={options.length === 4}
                >
                  <InputGroupText>+</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon
                  onClick={() => {
                    deleteOption(idx);
                  }}
                  addonType="append"
                >
                  <InputGroupText>-</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          );
        })}

        {options.length === 4 ? (
          props.question !== undefined ? (
            <div className="qts-btn-container">
              <Button className="add-qts" onClick={updateQuestion}>
                Update Question
              </Button>
           
            </div>
          ) : (
            <div className="qts-btn-container">
              <Button className="add-qts" onClick={addQuestion}>
                Add Question
              </Button>
              <Button className="add-qts">Publish</Button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}

export default MultiSelect;
