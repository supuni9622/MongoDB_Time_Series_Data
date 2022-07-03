const createCollection = async(client, collectionName) => {
    const result = await client.db("sample_airbnb").createCollection(collectionName);
    console.log(`New collected created: ${collectionName}`);
}

module.exports = createCollection;