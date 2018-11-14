const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema Invoice
const InvoiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  invoice_number: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  balance_due: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  tax: {
    type: Number,
    required: true
  },
  shipping: {
    type: Number,
    required: true
  },
  amount_paid: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: false
  },
  terms: {
    type: String,
    required: false
  }
});

module.exports = Invoice = mongoose.model("invoice", InvoiceSchema);
