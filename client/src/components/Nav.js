import React, { Component } from "react";
import { TiGroup } from "react-icons/ti";

class Nav extends Component {
    render() {
        return (
            <div className="main-nav">
                <a href="/" className="logo">
                    <span className="logo-icon">
                        <TiGroup />
                    </span>
                    <span className="logo-name">theQA</span>
                </a>
                <ul className="main-nav_menu">
                    <li>
                        <div className="user-thumb">
                            <span>NS</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;
