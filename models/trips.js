const mongoose = require("mongoose")

const tripsSchema = mongoose.Schema({ 
	departure: String,
    destination: String,
    date: Date,
    price: Number,
})

const Trip = mongoose.model("trips", tripsSchema) 

module.exports = Trip