var express = require('express')
var bodyParser = require('body-parser')
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(express.static('assets'))
app.use(middleware.addHeaders);
app.use(bodyParser.json())

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getName);
app.get('/occupations/', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies:type', mainCtrl.getHobbiesOfType);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);
app.get('/skillz', mainCtrl.getSkillz);
app.get('/secrets/:username/:pin', mainCtrl.getSecrets)

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/family', mainCtrl.addFamilyMember);
app.post('/restaurants', mainCtrl.addRestaurant);




var PORT = 3000;
app.listen(PORT, function(){
  console.log("listening to", PORT)
})
