const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
    product: { type: String, required: true },
    code_product: { type: String, unique: true, required: true },
    price_product: { type: Number, required: true },
    zip_code: { type: Number, required: true },
    house_number: { type: Number, required: true },
    code_tracking: { type: String, default: null },
    status: { type: String, default: 'PENDENTE' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deliveryDate: { type: Date, default: null }
});

DeliverySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Delivery', DeliverySchema);
