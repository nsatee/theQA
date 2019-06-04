
import React, { Component } from "react";
import {
    FaAngleUp,
    FaAngleDown,
    FaRegComments,
} from "react-icons/fa";

class FeedQuestion extends Component {
    render() {
        return (
            <div className="question">
                <div className="user-thumb">
                    <span>NS</span>
                </div>
                <div className="question-content">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit?
                    </span>
                </div>
                <div className="question-action">
                    <button className="like">
                        <FaAngleUp />
                        <span className="total">5</span>
                    </button>
                    <button className="dislike">
                        <FaAngleDown />
                        <span className="total">2</span>
                    </button>
                    <button className="answer">
                        <FaRegComments />
                        <span className="total">10</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default FeedQuestion;
