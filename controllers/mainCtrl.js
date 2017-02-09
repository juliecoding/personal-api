var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js')

module.exports = {
  getName: function(req, res, next){
    res.status(200).json(user.name)
  },
  getLocation: function(req, res, next) {
    res.status(200).json(user.location)
  },
  getOccupations: function(req, res, next){
    if (req.query) {
      if (req.query.order == "asc") {
        var ascOp = user.occupations.sort();
        res.status(200).json(ascOp);
      }
      else if (req.query.order == "desc") {
        var descOp = user.occupations.reverse();
        res.status(200).json(descOp);
      }
    }
    else {
      res.status(200).json(user.occupations);
    }
  },
  getOccupationsLatest: function(req, res, next){
    res.status(200).json(user.occupations[length-1])
  },
  getHobbies: function(req, res, next){
    res.status(200).json(user.hobbies)
  },
  getHobbiesOfType: function(req, res, next) {
    var result = user.hobbies.filter (
      function (value) {
        if (value.type === req.params.type) {
          return value;
        }
      })
    var filteredHobbyResult = {"hobbies": result};
    res.status(200).json(filteredHobbyResult);
  },
  getFamily: function(req, res, next) {
    res.status(200).json(user.family)
  },
  getFamilyByGender: function(req, res, next) {
    var result = user.family.filter (
      function(value) {
        if (value.gender === req.params.gender) {
          return value;
        }
      })
    var filteredFamilyResult = {"family": result};
    res.status(200).json(filteredFamilyResult)
  },
  getRestaurants: function(req, res, next) {
    res.status(200).json(user.restaurants)
  },
  getRestaurantsByName: function(req, res, next) {
    var result = user.family.filter (
      function(value) {
        if (value.name === req.params.name) {
          return value;
        }
      })
    var filteredRestaurants = {"restaurant(s)": result};
    res.status(200).json(filteredRestaurants)
  },

  getRestaurantsByName: function(req, res, next) {
    var result = user.family.filter (
      function(value) {
        if (value.name == req.params.name) {
          return value;
        }
      })
    var filteredRestaurants = {"restaurant(s)": result};
    res.status(200).json(filteredRestaurants)
  },

  getSkillz: function (req, res, next) {
    if (req.query) {
      var filteredSkillz = skillz.filter (
        function(value) {
          if (value.experience.toLowerCase() == req.query.experience.toLowerCase()) {
            return value
          }
        })
        res.status(200).json(filteredSkillz);
      }
    else {
      res.status(200).json(skillz);
    }
  },


//CHECK ON THURRRSSSDDDAAAAAYYYYY 
  getSecrets: function (req, res) {
    if (req.params.username === "billyJean" && req.params.id === "1234") {
      res.status(200).send(arrayOfSecrets);
    }
    else {
      res.send("You don't have the proper credentials to see these secrets");
    }
  },

/////////////////////////////

  changeName: function(req, res, next) {
    user.name = req.body;
    res.status(200).json(user.name);
  },

  changeLocation: function(req, res, next) {
    user.location = req.body;
    res.status(200).json(user.location);
  },

/////////////////////////////////

// app.post('/api/messages', function(req, res, next){
//   messages.push({ message: req.body.message, time: new Date() });
//   res.status(200).json({messages:messages});
// });

  addHobby: function(req, res, next) {
    user.hobbies.push(req.body);
    res.status(200).json(user.hobbies);
  },

  addFamilyMember: function(req, res, next) {
    user.family.push(req.body);
    res.status(200).json(user.family);
  },

  addRestaurant: function(req, res, next) {
    user.restaurants.push(req.body);
    res.status(200).json(user.restaurants);
  },


}



// app.get('/api/messages', function (req, res, next) {
//   res.status(200).json({ messages: messages })
// });
