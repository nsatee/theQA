import React, { Component } from "react";

class EachTopQuestion extends Component {
    render() {
        return (
            <a href="/" className="question">
                <div className="total">
                    <span className="like">20</span>
                    <span className="dislike">20</span>
                </div>
                <div className="user-thumb">
                    <span>NS</span>
                </div>
                <span className="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </span>
            </a>
        );
    }
}

export default EachTopQuestion;
