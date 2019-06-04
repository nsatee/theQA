import React, { Component } from "react";
import { FaPaperPlane } from "react-icons/fa";

import Textarea from "react-textarea-autosize";

class FeedInput extends Component {
    render() {
        return (
            <form className="input-question">
                <Textarea placeholder="Let's ask some question..." />
                <button className="submit btn" type="submit">
                    <FaPaperPlane />
                </button>
            </form>
        );
    }
}

export default FeedInput;
