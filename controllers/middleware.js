//DO I NEED THAT REQUIREMENT THING IN HERE?!?!

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
//CHECK FROM HERE DOWN ON THURSDAY!!!!
  //   next();
  // }
  //
  // verifyUser: function(req, res) {
  //   if (req.params.username === "billyJean" && req.params.id === "1234") {
  //     next(req);
  //   }
  //   else {
  //     console.error("You are not the correct user");
  //   }
  }
}
