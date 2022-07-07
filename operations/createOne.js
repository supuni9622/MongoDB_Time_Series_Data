const createListing = async(
    client, 
    collectionName,
    newListing
    ) => {

    const DB = 'time_series_demo';
    const result = await client.db(DB).collection(collectionName).insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

module.exports = createListing;