// const express = require('express'); const app = express();
// const path = require('path');

// const bodyParser = require('body-parser'); app.use(bodyParser.urlencoded({ extended: true }));
// const port = 3000; app.get('/task3', (req, res) => {
// res.sendFile(path.join(  dirname, './3b.html'));
// });

// app.post('/login', (req, res) => {

// var CompanyID = (req.body.companyid); var Username = (req.body.userid);
// var Password = (req.body.pwd);

// var mod_spawn = require("child_process").spawn; // CREATING CHILD PROCESS FOR PYTHON var process = mod_spawn('python',["./3c.py",CompanyID, Username, Password] );

// process.stdout.on('data', function(data) { if(data.toString().indexOf("ERROR")>= 0){
// console.log("ERROR OCCURED" + data) res.write(data);
// res.end();

// }
// else{
// console.log("ResultFromPython :\n"+data); res.write(data);
// res.end();

// }
// })
// });

// app.listen(port, () => console.log('App is listening on port '+port+':'));

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/task3', (req, res) => {
  res.sendFile(path.join(__dirname, './3b.html'));
});

app.post('/login', (req, res) => {
  var CompanyID = req.body.companyid;
  var Username = req.body.userid;
  var Password = req.body.pwd;
  
  var mod_spawn = require("child_process").spawn; // CREATING CHILD PROCESS FOR PYTHON
  var process = mod_spawn('python', ["./3c.py", CompanyID, Username, Password]);

  process.stdout.on('data', function(data) {
    if (data.toString().indexOf("ERROR") >= 0) {
      console.log("ERROR OCCURRED: " + data);
      res.write(data);
      res.end();
    } else {
      console.log("Result from Python: \n" + data);
      res.write(data);
      res.end();
    }
  });
});

app.listen(port, () => console.log('App is listening on port ' + port));

