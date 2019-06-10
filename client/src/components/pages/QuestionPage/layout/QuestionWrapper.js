import React, { Component } from "react";
import QuestionComponent from "./QuestionComponent";
import AnwserWrapper from "./AwnswerWrapper";

class QuestionWrapper extends Component {
    render() {
        return (
            <div className="question-page">
                <QuestionComponent />
                <AnwserWrapper />
            </div>
        );
    }
}

export default QuestionWrapper;
