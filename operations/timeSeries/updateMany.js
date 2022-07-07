const updateManyDocs = async(
    client,
    collectionName, //'windsensors'
    ) =>{

    const DB = 'time_series_demo';

    // 1. Update metadata.type from 'windspeed2' to 'windspeed3'
    // const result = await client.db(DB).collection(collectionName)
    //                     .updateMany(
    //                                 { 'metadata.type' : "windspeed2"}, 
    //                                 { $set: { 'metadata.type':  "windspeed3" } });


    // 2. Update metadata.type of the document which has value 18.263742590570686
    // const result = await client.db(DB).collection(collectionName)
    //                     .updateMany(
    //                                 { value : 18.263742590570686}, 
    //                                 { $set: { 'metadata.type':  "windspeed4" } });

    // 3. Update value of a document
    // const result = await client.db(DB).collection(collectionName)
    //                     .updateMany(
    //                                 { value : 32.53987084180961}, 
    //                                 { $set: { value:  33.0 } });                            
    console.log(result);
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

module.exports = updateManyDocs;



        /*
            Limitations
            1. The query may only match on metaField field values.
            2. The update command may only modify the metaField field value.
            3. The update command may not limit the number of documents to be updated. 
            4. The update command may not set upsert: true.
        */