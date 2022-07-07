const findOneDoc = async(
    client, 
    collectionName, //'windsensors'
    value //18.263742590570686
    ) =>{

    const DB = 'time_series_demo';
    const result = await client.db(DB).collection(collectionName).findOne({ value: Number(value) });

    if (result) {
        console.log(`Found a document in the collection with the value '${value}':`);
        console.log(result);
    } else {
        console.log(`No document found with the value '${value}'`);
    }
}

module.exports = findOneDoc;