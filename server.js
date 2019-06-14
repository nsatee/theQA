const express = require("express");
const app = express();

var reqTimer = setTimeout(function wakeUp() {
    request("https://my-qa.herokuapp.com/", function() {
        console.log("WAKE UP DYNO");
    });
    return (reqTimer = setTimeout(wakeUp, 1200000));
}, 1200000);

if (process.env.NODE_ENV === "production") {
    // Express will serve up the production asset
    // like main.js or main.css!
    app.use(express.static("client/build"));
    // express will serve up the index.html file
    // if it doesn't reconize the route
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
