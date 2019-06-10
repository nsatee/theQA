import React, { Component, Fragment } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

class QuestionComponent extends Component {
    render() {
        return (
            <Fragment>
                <div className="user-meta">
                    <a href="/" className="user-thumb">
                        <span>NS</span>
                    </a>
                    <a href="/" className="username">
                        <span className="name">Nattawod Satee</span>
                    </a>
                </div>
                <div className="question-content">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit?
                    </span>
                </div>
                <div className="reaction-total_container">
                    <div className="user-thumb">
                        <span>NS</span>
                    </div>
                    <div className="user-thumb">
                        <span>NS</span>
                    </div>
                    <div className="user-thumb">
                        <span>NS</span>
                    </div>
                    <div className="user-thumb">
                        <span>12+</span>
                    </div>
                    
                </div>
                <div className="question-action">
                    <button className="like active">
                        <FaAngleUp />
                        <span className="total">5</span>
                    </button>
                    <button className="dislike">
                        <FaAngleDown />
                        <span className="total">2</span>
                    </button>
                </div>
            </Fragment>
        );
    }
}

export default QuestionComponent;
