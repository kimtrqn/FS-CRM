const jwt = require("../node_modules/jsonwebtoken");
const keys = require('../config/keys');
const User = require('../models').User;
const Customer = require('../models').Customer;
const Expense = require('../models').Expense;
const Vendor = require('../models').Vendor;
const bcrypt = require("../node_modules/bcryptjs");
const validateRegisterInput = require('../validation/register');


const signup = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "a user is already registered with that email" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        companyName: req.body.companyName,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          const payload = {
            id: newUser.id,
            email: newUser.email,
            companyName: newUser.companyName,
            
          };
          newUser
            .save()
            .then((user) => {
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            })
          // .catch((error) => {
          //   const er = {msg: []};
          //   const allErr = error.errors
          //   for(i = 0; i < allErr.length; i++) {
          //     er["msg"].push(allErr[i].message)
          //     console.log(allErr[i].message)
          //   }
          //     res.status(400).json(er)
          // });
          .catch(error => res.status(400).json(error))
        });
      });
    }
  }
);
};

const login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          message: "Authentication failed. User not found.",
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          var token = jwt.sign(
            JSON.parse(JSON.stringify(user)),
            keys.secretOrKey,
            { expiresIn: 86400 * 30 }
          );
          jwt.verify(token, keys.secretOrKey, function (err, data) {
            console.log(err, data);
          });
          res.json({ success: true, token: "Bearer " + token });
        } else {
          res
            .status(401)
            .send({
              success: false,
              msg: "Authentication failed. Wrong password.",
            });
        }
      });
    })
    // .catch((error) => res.status(400).json(error));
    .catch((error) => console.log(error));

}

const completeDataBase = (req, res) => {
  User.findOne({
    where: { id: req.body.id },
    include: [
      {
        model: Customer,
        as: 'customer',
      },
      {
        model: Expense,
        as: 'expense',
      },
      {
        model: Vendor,
        as: 'vendor'
      },
    ],
  }).then((info) => res.status(201).json(info))
  .catch(error => res.status(400).json(error))
}

module.exports = {
    signup,
    login,
    completeDataBase
};


