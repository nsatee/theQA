import React, { Component } from "react";

import Main from "../layout/Main";
import FeedQuestion from "./Feed/FeedQuestion";
import FeedInput from "./Feed/FeedInput";

class Feed extends Component {
    render() {
        return (
            <Main>
                <div className="feed">
                    <div className="feed-wrapper">
                        <FeedInput />
                        <div className="question-list">
                            <span className="header-panel">Feed</span>
                            <FeedQuestion />
                            <FeedQuestion />
                            <FeedQuestion />
                            <FeedQuestion />
                            <FeedQuestion />
                            <FeedQuestion />
                            <FeedQuestion />
                            <FeedQuestion />
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}

export default Feed;
