const { MongoClient } = require('mongodb');

const connectToMongoDb = async() => {
    
    const uri = 'mongodb://localhost:27017/';
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
const listDatabases = async(client) =>{
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = connectToMongoDb;

