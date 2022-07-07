const { MongoClient } = require('mongodb');
const createListing =  require('./operations/createOne');
const createMultipleListings =  require('./operations/createMany');
const createTimeSeriesCollection = require('./operations/createTimeSeriesCollection');
const findOneDoc = require('./operations/timeSeries/findOne');
const findManyDocs = require('./operations/timeSeries/findMany');
const createIndexForCollection = require('./operations/timeSeries/createIndex');
const updateManyDocs = require('./operations/timeSeries/updateMany');
const deleteManyDocs = require('./operations/timeSeries/deleteMany');

const SingleDoc = require('./Data/SingleDoc');
const MultipleDocs = require('./Data/MultipleDocs');

const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

const startOperations = async () => {

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const collectionName = 'windsensors';

        // Manually create the time series collection
        // await  createTimeSeriesCollection(
        //     client, 
        //     collectionName, 
        //     'ts', // timeField
        //     "metadata", //metaField
        //     'seconds' // Granularity
        // );

        //Insert one document into the collection
        //await createListing(client,collectionName,SingleDoc);

        // Insert multiple documents into the collection
        //await createMultipleListings(client,collectionName,MultipleDocs );

        // Query one document in the collection
        //await findOneDoc(client,collectionName,18.263742590570686); //value

        //Query multiple documents in the collection 
        //await findManyDocs(client,collectionName,31096); //sensorId

        //Update documents in the collection

        // await updateManyDocs(
        //     client,
        //     collectionName
        //     );
        
        //Delete documents in the collection

    //    await deleteManyDocs(
    //     client,
    //     collectionName
    //     );
    

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }


}

startOperations();

