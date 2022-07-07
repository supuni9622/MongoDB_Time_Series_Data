const findManyDocs = async(
    client, 
    collectionName, //'windsensors'
    sensorId //18.263742590570686
    ) =>{

    const DB = 'time_series_demo';
    const cursor = await client.db(DB).collection(collectionName).find({ 'metadata.sensorId': sensorId });
    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(results);
    } else {
        console.log(`No document found with the senderId '${senderId}'`);
    }
}

module.exports = findManyDocs;