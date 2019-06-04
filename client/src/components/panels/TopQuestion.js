import React, { Component } from "react";
import EachTopQuestion from "./TopQuestion/EachTopQuestion";

class TopQuestion extends Component {
    render() {
        return (
            <div className="top-question">
                <EachTopQuestion />
                <EachTopQuestion />
                <EachTopQuestion />
                <EachTopQuestion />
                <EachTopQuestion />
            </div>
        );
    }
}

export default TopQuestion;
