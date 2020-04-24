const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    account_id: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        required: true
    },
    account_no: {
        type: Number,
        required: true
    },
    routing_no: {
        type: Number,
        required: true
    },
    balance: {
        type: Decimal128,
        required: true
    }
});

module.exports = Account = mongoose.model("accounts", AccountSchema);