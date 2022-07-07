const { MongoClient } = require('mongodb');
const MongoConnector = require('./connection/mongoConnection');
const TimeSeriesDBConnector =  require('./connection/mongoConnectionDB');
const createListing =  require('./operations/createOne');
const createMultipleListings =  require('./operations/createMany');
const findOneListingByName = require('./operations/findOne');
const findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews = require('./operations/findMany');
const updateListingByName = require('./operations/updateOne');
const upsertListingByName = require('./operations/upsertOne');
const updateAllListingsToHavePropertyType= require('./operations/updateMany');
const deleteListingByName = require('./operations/deleteOne');
const deleteListingsScrapedBeforeDate = require('./operations/deleteMany');
const createCollection = require('./operations/createCollection');
const createTimeSeriesCollection = require('./operations/createTimeSeriesCollection')

//MongoConnector();
//TimeSeriesDBConnector();

const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

const startOperations = async () => {

    try {
        // Connect to the MongoDB cluster
        await client.connect();


        // Make the appropriate DB calls

      //  await createCollection(client, 'normal_collection');

      await  createTimeSeriesCollection(client, 'windsensors', 'ts', "metadata", 'seconds')
       
    //       await createListing(client,
    //     {
    //         name: "Lovel Loft",
    //         summary: "A charming loft in Paris",
    //         bedrooms: 5,
    //         bathrooms: 1
    //     }
    // );

    // await createMultipleListings(client, [
    //     {
    //         name: "Infinite Views",
    //         summary: "Modern home with infinite views from the infinity pool",
    //         property_type: "House",
    //         bedrooms: 5,
    //         bathrooms: 4.5,
    //         beds: 5
    //     },
    //     {
    //         name: "Private room in London",
    //         property_type: "Apartment",
    //         bedrooms: 1,
    //         bathroom: 1
    //     },
    //     {
    //         name: "Beautiful Beach House",
    //         summary: "Enjoy relaxed beach living in this house with a private beach",
    //         bedrooms: 4,
    //         bathrooms: 2.5,
    //         beds: 7,
    //         last_review: new Date()
    //     }
    // ]);

    // await findOneListingByName(client, "Infinite Views");

    // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    //     minimumNumberOfBedrooms: 4,
    //     minimumNumberOfBathrooms: 2,
    //     maximumNumberOfResults: 5
    // });

    //await updateListingByName(client, "Infinite Views", { bedrooms: 6, beds: 8 });

    //await upsertListingByName(client, "Cozy Cottage", { name: "Cozy Cottage", bedrooms: 2, bathrooms: 1 });

   // await updateAllListingsToHavePropertyType(client);

   //await deleteListingByName(client, "Cozy Cottage");

   //await deleteListingsScrapedBeforeDate(client, new Date("2019-02-15"));

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }


}

startOperations();

