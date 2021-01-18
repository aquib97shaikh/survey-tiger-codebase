import { Button } from "reactstrap";
import React, { useState } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
function SingleSelect(props) {
  const [options, setOptions] = useState(props.question ? props.question.options : ["",""]);
  const [question,setQuestion] = useState(props.question ? props.question.question : "");
  
  const optionChange = (event) => {
    const id = Number(event.target.name);
    const tempOptions = [...options];
    tempOptions[id] = event.target.value;
    setOptions(tempOptions);
  };
  const deleteOption = (idx) => {
    
      const tempOptions = [...options];

      tempOptions[idx] = "";
      setOptions(tempOptions);
    
  };
  const addQuestion = (e)=>{
      if(question.trim() !=="" && options.filter(i=>i.trim().length ===0).length===0){
          props.addQuestion({
              question,options,type:"Single",questionId:props.questionId
          })
      }
  }
  const updateQuestion = (e)=>{
      props.updateQuestion({
        question,options,type:"Single",questionId:props.questionId
    })
  }
  const publish = (e)=>{
    if(question.trim() !=="" && options.filter(i=>i.trim().length ===0).length===0){
      props.addQuestion({
          question,options,type:"Single",questionId:props.questionId
      });
      props.publish();
  }
  }
  return (
    <div className="single-select">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
      </InputGroup>
      <div className="options">
        {options.map((i, idx) => {
          return (
            <div className="option-container" key={idx}>
              <InputGroup>
                <Input
                  name={idx}
                  value={i}
                  onChange={optionChange}
                  placeholder="type your answer here"
                />
                <InputGroupAddon
                  addonType="append"
                  disabled={options.length === 2}
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

        {options.length === 2 ? (
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
              <Button className="add-qts" onClick={publish}>Publish</Button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}



export default SingleSelect
