const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
    // Express will serve up the production asset
    // like main.js or main.css!
    app.use(express.static('client/build'));
    // express will serve up the index.html file
    // if it doesn't reconize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);