const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
   title: {
      type: String,
      required: [true, "Set product title"],
   },

   category: {
      type: Array,
      required: [true, "Set product category"],
   },

   description: {
      type: String,
      required: [true, "Set the description"],
   },

   price: {
      type: Number,
      required: [true, "Set product price"],
   },

   image: {
      type: String,
      default: "",
   },

   contentsDelivery: {
      type: Array,
      default: [],
   },

   favorites: {
      type: [Schema.Types.ObjectId],
      ref: "user",
      default: [],
   },

   owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
   },
});

module.exports = model("product", recipeSchema);
