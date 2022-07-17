const deleteManyDocs = async(
    client,
    collectionName, //'windsensors',
    ) =>{

    const DB = 'time_series_demo';
    const result = await client.db(DB).collection(collectionName)
                        .deleteMany({ 'metadata.type' : "windspeed"});


    // const result = await client.db(DB).collection(collectionName)
    //                     .deleteMany({ value : 3.9089926192773534});
    if(result){
        console.log(result)
    }
   
}

module.exports = deleteManyDocs;


 /*
            Limitations
            1. The query may only match on metaField field values.
            2. The delete command may not limit the number of documents to be deleted. 
        */