import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FaAngleUp, FaAngleDown, FaRegComments } from "react-icons/fa";
import { fetchQuestion } from "../../../actions";
import QuestionPage from "../QuestionPage";


class FeedQuestion extends Component {
    state = {
        showPopup: false
    }

    closePopup = () => {
        this.setState({showPopup: false});
    }

    scrolable = () => {
        document.querySelector("#root").classList.add("pop");
    }

    render() {
        return (
            <Fragment>
                {this.state.showPopup ? <QuestionPage close={this.closePopup}/> : null}
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
                        <button
                            className="answer"
                            onClick={() => {
                                this.setState({showPopup: true});
                                this.scrolable();
                            }}
                        >
                            <FaRegComments />
                            <span className="total">10</span>
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    null,
    { fetchQuestion }
)(FeedQuestion);
