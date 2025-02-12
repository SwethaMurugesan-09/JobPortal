import mongoose from "mongoose";

const companysSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    password: { type: String, required: true }, 
})

const Companys = mongoose.model('Companys',companysSchema)

export default Companys