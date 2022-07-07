const createIndexForCollection = async(
    client, 
    collectionName, //'windsensors'
    ) =>{

    const DB = 'time_series_demo';
    const result = await client.db(DB).collection(collectionName).createIndex(
        { 
            "metadata.sensorId" :1, 
            ts : 1
        });

    if (result) {
        console.log(result);
    } 
}

module.exports = createIndexForCollection;