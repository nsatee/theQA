import React, { Component } from "react";
import { MdClose } from "react-icons/md";

class Popup extends Component {
    scrolable = () => {
        document.querySelector("#root").classList.remove("pop");
    };
    render() {
        return (
            <div className="popup">
                <div
                    className="popup-fade-background"
                    onClick={() => {
                        this.scrolable();
                        this.props.close();
                    }}
                />
                <div className="popup-wrapper">
                    <div className="popup-action">
                        <button
                            className="btn"
                            onClick={() => {
                                this.props.close();
                                this.scrolable();
                            }}
                        >
                            <MdClose />
                        </button>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Popup;
