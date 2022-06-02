const fs = require("fs");
const path = require("path");
module.exports = (name) => {
  const cwd = process.cwd();
  const tagetAir = path.join(cwd, name);
  if (fs.existsSync(tagetAir)) {
    fs.removeSync(tagetAir);
  } else {
    fs.mkdirSync(tagetAir);
  }
};
