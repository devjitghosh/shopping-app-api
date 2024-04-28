import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "cart Item must have a username"],
  },
  productId: {
    type: Number,
    required: [true, "cart Item must have a product id"],
  },
  quantity: {
    type: Number,
    required: [true, "cart Item must have a quantity"],
  },
});

cartSchema.post("findOneAndUpdate", async function (doc) {
  if (doc) {
    const updatedDoc = await this.model.findOne({ _id: doc._id });
    console.log("Product updated:", updatedDoc);
    if (updatedDoc.quantity === 0) {
      console.log("DT");
      const res = await this.model.deleteOne({ productId: doc.productId });
      console.log("RES", res);
    }
  }
});

const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
