const mongoose = require('mongoose');

const org_schema = new mongoose.Schema({
 name: String,
 type: String, 
});

const orgs = mongoose.model('org', org_schema);

module.export = orgs