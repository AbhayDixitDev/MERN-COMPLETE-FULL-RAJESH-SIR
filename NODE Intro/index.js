// Import required modules
const http = require("http");
const fs = require("fs");

// Create an HTTP server that listens on port 8000
// Respond with an HTML message indicating that the server identifies the developers as MERN developers

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("<h1>We are MERN Developers</h1>");
//     res.end();
// }).listen(8000, () => {
//     console.log("Server listening on port 8000");
// });

// Create another HTTP server that listens on port 3000
// Handle requests for video and file creation

// http.createServer((req, res) => {
//     // Serve video file if the request URL is '/video'
//     if (req.url === '/video') {
//         res.writeHead(200, { 'Content-Type': 'video/mp4' });
//         fs.createReadStream("./video.mp4").pipe(res);
//     }

    // Create a file if the request URL is '/create'
//     else if (req.url === '/create') {
//         fs.appendFile("abhay.txt", "hello, i am Abhay Dixit     ", (err) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end("Error creating file");
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end("Successfully created file");
//         });
//     }
// }).listen(3000, () => {
//     console.log("Server listening on port 3000");
// });

// Write data to a file named "abhay.txt"
// If the file does not exist, it will be created; if it does exist, it will be overwritten
// fs.writeFile("abhay.txt", "hello, i am Abhay Dixit ", (err) => {
//     if (err) throw err;
//     console.log("File created");
// });

// Function to open and read the contents of the file "abhay.txt"

    // fs.open("abhay.txt", "w", (err) => {
    //     if (err) throw err;
    //     console.log("file created");
    // });

// Function to append data to the file "abhay.txt"
    // fs.appendFile("abhay.txt", "data to append", (err) => {
    //     if (err) throw
    //     console.log("Data appended to file successfully");
    // });

    // // Attempt to delete the file "abhay.txt"
    // fs.unlink("abhay.txt", (err) => {
    //     // Check for errors during the deletion process
    //     if (err) throw err; // If an error occurs, throw it
    //     // Log a message indicating the file has been successfully deleted
    //     console.log("File deleted");
    // });


    // Attempt to rename the file "abhay_dixit.txt" to "abhay.txt"
    // The callback function handles any errors that may occur during the renaming process
    // If an error occurs, it will be thrown
    // If successful, a message will be logged to the console
    // fs.rename("abhay_dixit.txt", "abhay.txt", (err) => {
    //     if (err) throw err;
    //     console.log("File renamed");
    // });



