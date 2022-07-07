const createMultipleListings = async (
    client, 
    collectionName,
    newListings,
    )=>{

    const DB = 'time_series_demo';
    const result = await client.db(DB).collection(collectionName).insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);       
}

module.exports = createMultipleListings;