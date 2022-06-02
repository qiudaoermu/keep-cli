var figlet = require("figlet");

const execFiglet = () => {
  figlet("YR CLI!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
};
module.exports = execFiglet;
