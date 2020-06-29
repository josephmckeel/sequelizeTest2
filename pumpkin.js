const db = require("./dbConfig");
const Sequelize = require("sequelize");
const { STRING, NUMBER, BOOLEAN, ENUM } = require("sequelize");

//YOUR CODE GOES HERE
const Pumpkin = db.define("Pumpkin", {
  name: {
    type: STRING,
  },
  size: {
    type: ENUM(["small", "medium", "large"]),
  },
  evil: {
    type: BOOLEAN,
    defaultValue: false,
  },
  carved: {
    type: BOOLEAN,
  },
  candle: {
    type: BOOLEAN,
  },
});
//--------------------
module.exports = Pumpkin;
