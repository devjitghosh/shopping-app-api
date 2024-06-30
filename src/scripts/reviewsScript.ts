import mongoose from "mongoose";
import ProductReview from "../models/ProductReviewModel"; // Adjust the path as per your project structure

// Assuming you have already connected to your MongoDB instance using mongoose.connect()
mongoose.connect("mongodb://localhost:27017/shopping-app");
const sampleReviews = [
  {
    _id: 1,
    reviews: [
      {
        userId: "user_123",
        userName: "User 123",
        starRating: 4,
        comment: "Great product, highly recommended!",
      },
      {
        userId: "user_456",
        userName: "User 456",
        starRating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    _id: 2,
    reviews: [
      {
        userId: "user_789",
        userName: "User 789",
        starRating: 3,
        comment: "Good value for money.",
      },
    ],
  },
  {
    _id: 3,
    reviews: [
      {
        userId: "user_234",
        userName: "User 234",
        starRating: 5,
        comment: "Perfect fit and comfortable.",
      },
      {
        userId: "user_567",
        userName: "User 567",
        starRating: 4,
        comment: "Nice design, durable material.",
      },
    ],
  },
  {
    _id: 4,
    reviews: [
      {
        userId: "user_890",
        userName: "User 890",
        starRating: 2,
        comment: "Disappointed with the size.",
      },
    ],
  },
  {
    _id: 5,
    reviews: [
      {
        userId: "user_345",
        userName: "User 345",
        starRating: 4,
        comment: "Exactly as described, good buy.",
      },
    ],
  },
  {
    _id: 6,
    reviews: [
      {
        userId: "user_678",
        userName: "User 678",
        starRating: 5,
        comment: "Best purchase ever!",
      },
    ],
  },
  {
    _id: 7,
    reviews: [
      {
        userId: "user_901",
        userName: "User 901",
        starRating: 3,
        comment: "Decent product, could be better.",
      },
    ],
  },
  {
    _id: 8,
    reviews: [
      {
        userId: "user_456",
        userName: "User 456",
        starRating: 5,
        comment: "Love it, exceeded expectations.",
      },
    ],
  },
  {
    _id: 9,
    reviews: [
      {
        userId: "user_234",
        userName: "User 234",
        starRating: 4,
        comment: "Good quality, fast shipping.",
      },
    ],
  },
  {
    _id: 10,
    reviews: [
      {
        userId: "user_567",
        userName: "User 567",
        starRating: 3,
        comment: "Not bad, but not great either.",
      },
    ],
  },
  {
    _id: 11,
    reviews: [
      {
        userId: "user_789",
        userName: "User 789",
        starRating: 4,
        comment: "Satisfied with the purchase.",
      },
    ],
  },
  {
    _id: 12,
    reviews: [
      {
        userId: "user_123",
        userName: "User 123",
        starRating: 5,
        comment: "Absolutely fantastic product!",
      },
    ],
  },
];

async function insertSampleData() {
  try {
    // Clear existing data (optional, if needed)
    await ProductReview.deleteMany({});

    // Sample data to insert
    const sampleReviews = [];
    for (let i = 1; i <= 12; i++) {
      const reviews = [];
      const numReviews = Math.floor(Math.random() * 5) + 1; // Random number of reviews between 1 and 5

      for (let j = 0; j < numReviews; j++) {
        const userId = `user_${Math.floor(Math.random() * 1000)}`;
        const userName = `User ${userId}`;
        const starRating = Math.floor(Math.random() * 5) + 1; // Random star rating between 1 and 5
        const comment = `Sample comment ${j + 1} for product ${i}`;

        reviews.push({ userId, userName, starRating, comment });
      }

      sampleReviews.push({ _id: i, reviews });
    }

    // Insert sample data into the database
    await ProductReview.insertMany(sampleReviews);

    console.log("Sample data inserted successfully.");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    // Close the connection after inserting data (if not using a connection pool)
    mongoose.connection.close();
  }
}

// Call the function to insert sample data
insertSampleData();
