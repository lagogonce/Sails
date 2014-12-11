module.exports = {

  index: function (req, res) {
    UserPoint.find(function foundUsers(err, users) {
      return res.json(users);
    });
  },


  create: function (req, res, next) {
    var user_to_create = req.params.all();

    UserPoint.create(user_to_create, function(err, created_user) {
        if (err) return next(err);

        res.json(created_user);
    });
  }
};

