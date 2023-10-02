const nl = require("nova-log.js");
const log = new nl.Client({
    logPath: "../../logs",
    color: true,
});

module.exports = log