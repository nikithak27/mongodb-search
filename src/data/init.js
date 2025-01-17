const mongoose = require( 'mongoose' );

require( '../models/Workshop' );

// const connectionStr = 'mongodb://user:password@...'
const connectionStr = 'mongodb://localhost:27017/dllWorkshopsDB';

mongoose.connect( connectionStr, { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.connection.on( 'open', () => {
    console.log( 'connected to the DB' );
});

mongoose.connection.on( 'error', err => {
    console.log( 'unable to connect to the DB', err.message );
});