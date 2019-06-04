import React, { Component } from "react";
import Nav from "../Nav";
import TopQuestion from "../panels/TopQuestion";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <div className="wrapper">
                    <div className="side-content">
                        <div className="panel">
                            <div className="header-panel">Top question</div>
                            <TopQuestion />
                        </div>
                    </div>
                    <div className="main-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Main;
