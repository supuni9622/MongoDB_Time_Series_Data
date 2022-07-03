const createTimeSeriesCollection = async(client, collectionName, timeField, metadata, granularity) => {
    const result = await client.db("sample_airbnb").createCollection(collectionName, { timeseries: { timeField: timeField, metaField: metadata, granularity: granularity} });

    console.log(`New time series ccollection created: ${collectionName}`);
}

module.exports = createTimeSeriesCollection;