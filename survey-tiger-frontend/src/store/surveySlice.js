
import {createSlice } from "@reduxjs/toolkit";

export const surveySlice = createSlice({
  name: "Survey",
  initialState: {
    surveys: [{ surveyId: 1, questions: [], isPublished: false }],
    nextSurveyId: 1,
  },
  reducers: {
    addQuestion: (state, action) => {
      const { surveyId, type, question, options } = action.payload;
      const Survey = state.surveys.find((s) => s.surveyId === Number(surveyId));
      console.log(Survey);
      const questionObj = {
        type,
        question,
        options,
        questionId: Survey.questions.length + 1,
      };
      Survey.questions.push(questionObj);
    },
    markPublished: (state, action) => {
      const { surveyId } = action.payload;
      let survey = state.surveys.find((s) => s.surveyId === Number(surveyId));
      survey.isPublished = true;
      state.nextSurveyId = state.surveys.length;
      state.surveys.push({
        surveyId: state.nextSurveyId,
        questions: [],
        isPublished: false,
      });
    },
  },
});