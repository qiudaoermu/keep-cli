var figlet = require("figlet");

const execFiglet = (name) => {
  figlet(name, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
};
module.exports = execFiglet;
