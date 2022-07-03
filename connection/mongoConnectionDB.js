const { MongoClient } = require('mongodb');

const connectToTimeSeriesDB = async() => {
    
    const uri = 'mongodb://localhost:27017/time_series_demo?retryWrites=true&w=majority';
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Successfully connected to time_series_demo database")

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }

    return client;
}

module.exports = connectToTimeSeriesDB;

