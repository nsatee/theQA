import React, { Component } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import Textarea from "react-textarea-autosize";

class AnwserWrapper extends Component {
    render() {
        return (
            <div className="question-answer">
                <span className="question-answer_header">Answer</span>
                <div className="answer-input-container">
                    <div className="user-thumb">
                        <span>NS</span>
                    </div>
                    <form className="answer-input-container">
                        <Textarea
                            className="anwser-input"
                            placeholder="Answer the question..."
                        />
                    </form>
                    <button className="submit-answer btn">
                        <span>Send</span>
                        <MdSend />
                    </button>
                </div>
                <div className="question-answer_wrapper">
                    <div className="answer">
                        <div className="content-container">
                            <div className="user-thumb">
                                <span>NS</span>
                            </div>
                            <div className="answer-content">
                                <a href="/" className="username">
                                    Nattawod Satee
                                </a>
                                <span className="content">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime consectetur earum
                                    non debitis provident nisi. Ipsa velit esse
                                    sed error dolor odit, dicta, dignissimos
                                    voluptates ex, placeat quia est voluptatem?
                                </span>
                            </div>
                        </div>
                        <div className="answer-action">
                            <button className="like active">
                                <FaAngleUp />
                                <span className="total">5</span>
                            </button>
                            <button className="dislike">
                                <FaAngleDown />
                                <span className="total">2</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnwserWrapper;
