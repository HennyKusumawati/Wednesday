const newman = require('newman');  // Import Newman

// Running the Postman collection using Newman
newman.run({
    collection: require('C:\Users\Dhienny\AppData\Local\Postman\app-11.14.0\HrmsAPIreviewB19.postman_collection.json'),  // Path to your Postman collection file
    environment: require('C:\Users\Dhienny\AppData\Local\Postman\app-11.14.0\Batch19Environment.postman_environment.json'),  // Optional: Path to your environment file (if any)
    globals: require('C:\Users\Dhienny\AppData\Local\Postman\app-11.14.0\workspace.postman_globals.json'),
    reporters: 'cli'  // Report the results in the command line
}, function (err) {
    if (err) { throw err; }  // Handle any errors
    console.log('API Test Collection run complete!');  // Message when tests are done
});

