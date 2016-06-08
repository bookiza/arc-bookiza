const fs = require('fs');

module.exports = {
    read(location) {
        fs.readFile(location, function read(err, data) {
            if (err) {
                console.log(chalk.bold.red("Unregistered client"));
                console.log(chalk.bold.cyan("Try $ bookiza register --help"));
            }
            return JSON.parse(data.toString());
        });

        // return JSON.parse(fs.readFileSync(location).toString());
    },

    write(location, arc) {
        fs.writeFileSync(location, JSON.stringify(arc, null, 2));
        return;
    }
};
