import { MongoClient } from 'mongodb';
const uri = "mongodb://localhost:27017"; // Assuming MongoDB is running on the default port

// Database Name
const dbName = "shopping-app";

// Collection Name
const collectionName = "items";

// Sample items to insert
const items = [
  { _id: 1, price: 657, name: "Dummy Tshirt1" },
  { _id: 2, price: 257, name: "Dummy Tshirt2" },
  { _id: 3, price: 457, name: "Dummy Tshirt3" },
  { _id: 4, price: 345, name: "Dummy Tshirt4" },
  { _id: 5, price: 543, name: "Dummy Tshirt5" },
  { _id: 6, price: 557, name: "Dummy Tshirt6" },
  { _id: 7, price: 697, name: "Dummy Tshirt7" },
  { _id: 8, price: 357, name: "Dummy Tshirt8" },
  { _id: 9, price: 546, name: "Dummy Tshirt9" },
  { _id: 10, price: 456, name: "Dummy Tshirt10" },
  { _id: 11, price: 234, name: "Dummy Tshirt11" },
  { _id: 12, price: 347, name: "Dummy Tshirt12" },
];

async function insertItems() {
  // Create a new MongoClient
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    // Get the collection
    const collection = db.collection(collectionName);

    // Insert the items into the collection
    const result = await collection.insertMany(items);
    // const result = await collection.deleteMany({});
    console.log(`${result.insertedCount} items inserted successfully.`);
  } catch (err) {
    console.error("Error inserting items:", err);
  } finally {
    // Close the connection
    client.close();
  }
}

// Call the insertItems function
insertItems();
