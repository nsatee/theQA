import React, { Component } from "react";
import Popup from "../layout/Popup";
import Answer from "./QuestionPage/layout/QuestionWrapper";

class QuestionPage extends Component {
    render() {
        return (
            <Popup close={this.props.close}>
                <Answer />
            </Popup>
        );
    }
}

export default QuestionPage;
