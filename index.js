const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 4040;

const encoder = bodyParser.urlencoded({ extended: false });

const staticPath = path.join(__dirname);
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(`${staticPath}/login.html`);
});


// Use the encoder middleware in the post route
app.post('/login', encoder, (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    res.send("<h1>Logged In Succesfully</h1>")
});

app.get('*',(req,res)=>{
    res.status(404).sendFile(`${staticPath}/error.html`)
})

app.listen(port, () => {
    console.log(`Server created at port ${port}`);
});
