const mongoose = require('mongoose');
const config = require('../../config.js')
const  log  = require('../plugins/log.js')
const chalk = require('chalk')
mongoose.connect(config.mongo_url).then(() => {
 console.log(chalk.bgYellow('[ MONGODB ]') + chalk.gray(' : ') + chalk.green('The Mongouse device is connectida successfulay.'))
});


