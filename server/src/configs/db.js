const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://tushar:bantu_9979@cluster0.loazjuu.mongodb.net/tushar?retryWrites=true&w=majority")
}
module.exports = connect


// mongodb://127.0.0.1:27017/student