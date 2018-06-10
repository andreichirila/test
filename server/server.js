const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

app.listen(8000, () => {
    console.log("Server started");
});

app.route("/").get((req, res)=>{
    res.send(201,
        {
            folders: [
                {'name': 'folder1'},
                {'name': 'folder2'}
            ]
        }
    );
});