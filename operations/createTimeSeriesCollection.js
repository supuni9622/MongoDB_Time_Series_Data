const createTimeSeriesCollection = async(
    client, 
    collectionName, 
    timeField, 
    metadata, 
    granularity // How oftern the data insert 
) => {

    const DB = 'time_series_demo';
    const result = await client.db(DB).createCollection(
        collectionName, //'windsensors'
        { 
            timeseries: { 
                timeField: timeField, //'ts'
                metaField: metadata, // "metadata"
                granularity: granularity //'seconds'
            },
            expireAfterSeconds: 3153600 // After 1 year
        }
    );

    console.log(`New time series ccollection created: ${collectionName}`);
    console.log(result);
}

module.exports = createTimeSeriesCollection;