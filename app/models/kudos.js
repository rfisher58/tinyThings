const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var KudosSchema = new Schema({
    kudosContent:{
        title: String,
        body: String
    }
})

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;