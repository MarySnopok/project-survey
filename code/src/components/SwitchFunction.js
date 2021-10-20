import React, { useState } from "react";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { QuestionFour } from "./questions/QuestionFour";
import { QuestionFive } from "./questions/QuestionFive";
import { QuestionSix } from "./questions/QuestionSix";
import { QuestionSeven } from "./questions/QuestionSeven";
import { QuestionEight } from "./QuestionEight";
import { QuestionNine } from "./questions/QuestionNine";
import { AnySuggestion } from "./questions/AnySuggestion";
import { QuestionTen } from "./questions/QuestionTen";

export const SwitchFunction = ({ currentStep, rootState, setValueInRootState }) => {
  if (currentStep === "questionOne") {
    return <QuestionOne />;
  }
  if (currentStep === "questionTwo") {
    return <QuestionTwo />;
  }
  if (currentStep === "questionThree") {
    return <QuestionThree />;
  }
  if (currentStep === "questionFour") {
    return <QuestionFour />;
  }
  if (currentStep === "questionFive") {
    return <QuestionFive />;
  }
  if (currentStep === "questionSix") {
    return <QuestionSix />;
  }
  if (currentStep === "questionSeven") {
    return <QuestionSeven />;
  }
  if (currentStep === "questionEight") {
    return (
      <QuestionEight
        features={rootState.features}
        featuresOthers={rootState.featuresOthers}
        onFeaturesChange={(values) => setValueInRootState("features", values)}
        onFeaturesOthersChange={(input) => setValueInRootState("featuresOthers", input)}
      />
    );
  }
  if (currentStep === "questionNine") {
    return <QuestionNine rating={rootState.rating} onRatingChange={(value) => setValueInRootState("rating", value)} />;
  }
  if (currentStep === "anySuggestion") {
    return <AnySuggestion />;
  }
  if (currentStep === "questionTen") {
    return (
      <QuestionTen
        name={rootState.name}
        email={rootState.email}
        percent={rootState.rating >= 6 ? 20 : 25}
        onNameChange={(name) => {
          setValueInRootState("name", name);
          setValueInRootState("nameInvalid", false);
        }}
        onEmailChange={(email) => {
          setValueInRootState("email", email);
          setValueInRootState("emailInvalid", false);
        }}
        nameInvalid={rootState.nameInvalid}
        emailInvalid={rootState.emailInvalid}
      />
    );
  }
};
