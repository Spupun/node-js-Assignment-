const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

const cors = require('cors');
app.use(cors());

const port = 3000;

app.get('/Mohan', (req, res) => { 
	res.sendFile(path.join(__dirname, './resume.html'));
 });


 app.post('/get_data', (req, res) => {

	var fn_value = req.body.first_name;
	var ln_value = req.body.last_name;
	console.log(fn_value, ln_value);
	
	//res.writeHead(200, { 'Content-Type': 'text/html' });
//res.write('<h1>Welcome!</h1><br /><ul>' + '</li> <li>First Name: '+ fn_value + '</li> <li>Last Name: '+ ln_value+ '</li></ul>');
	//res.end();
	
	res.json([{ fn: fn_value, ln: ln_value }])
});

app.listen(port, () => console.log('App is listening on port '+port+':'));

