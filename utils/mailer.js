// const axios = require("axios");

// function getApplicationContent(studentName, hashMail) {
//   var Mail = `${studentName}`;
//   return Mail;
// }
// exports.mail = function(toAddress, studentName, hashMail) {
//   console.log(
//     toAddress,
//     studentName,
//     hashMail,
//     process.env.accountId,
//     process.env.oAuthToken
//   );

//   try {
//     axios.post(
//       `https://mail.zoho.com/api/accounts/${process.env.accountId}/messages`,
//       {
//         toAddress: toAddress,
//         subject: "AltCampus Application",
//         content: `${getApplicationContent(studentName, hashMail)}`
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Zoho-authtoken ${process.env.oAuthToken}`
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// function linkGenerator(id) {
//   return `http://localhost:3000/delivery/${id}`;
// }

// export default linkGenerator;
