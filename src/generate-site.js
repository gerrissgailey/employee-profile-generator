// const fs = require("fs");

// function writeFile(html) {
//     fs.writeFile("../dist/index.html", html, err => {
//         if (err) {
//             throw err;
//         }
//         console.log("saved")
//     })
// }

// const copyFile = () => {
//     fs.copyFile(".style.css", "../dist/style.css", err => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("CSS copied")
//     });
// }

// module.exports = writeFile, copyFile

// // const writeFile = (fileContent) => {
// //   return new Promise((resolve, reject) => {
// //     fs.writeFile("./dist/index.html", fileContent, (err) => {
// //       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
// //       if (err) {
// //         reject(err);
// //         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
// //         return;
// //       }

// //       // if everything went well, resolve the Promise and send the successful data to the `.then()` method
// //       resolve({
// //         ok: true,
// //         message: "File created!",
// //       });
// //     });
// //   });
// // };

// // const copyFile = () => {
// //   return new Promise((resolve, reject) => {
// //     fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
// //       if (err) {
// //         reject(err);
// //         return;
// //       }
// //       resolve({
// //         ok: true,
// //         message: "File copied",
// //       });
// //     });
// //   });
// // };

// // module.exports = { writeFile, copyFile };