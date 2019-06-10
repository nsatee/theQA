import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Nav from "../Nav";
import TopQuestion from "../panels/TopQuestion";

class Main extends Component {
    render() {
        console.log(this.props);
        return (
            <Fragment>
                <div className="container">
                    <Nav />
                    <div className="wrapper">
                        <div className="side-content">
                            <div className="panel">
                                <div className="header-panel sm">Top question</div>
                                <TopQuestion />
                            </div>
                        </div>
                        <div className="main-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ question }) => {
    return question;
};

export default connect(mapStateToProps)(Main);
