const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB conectado com sucesso");
    }
    catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err);
    }
}

module.exports = connectDB;