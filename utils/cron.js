// // const cron = require('node-cron');
// // const User = require('../models/userSchema');
// // const Content = require('../models/contentSchema');
// // const Delivery = require('../models/deliverySchema');
// // const INDIVIDUAL = 'individual';
// // const PAIR = 'pair';
// // const GROUP = 'group';
// // const contentList = [];

// Content.find({}).exec(function(err, contents) {
//   contents.forEach(content => contentList.push(content));
// });

// cron.schedule('* * * * *', function(req, res, next) {
//   // find the type of email to be sent
//   // 1. Individual mail i) send content
//   // 2. pairMail -> i) makePairs ii) send content
//   // 3. groupMail -> i) makeGroups ii) send content

// //   var mailType = determineDeliveryType();

// //   switch (mailType) {
// //     case INDIVIDUAL:
// //       findNewContentPerStudentAndSendMail();
// //     case PAIR:
// //       findNewContentPerStudentAndSendMail();
// //     case GROUP:
// //       findNewContentPerStudentAndSendMail();
// //   }
// // });

// // const determineDeliveryType = () => {
// //   // TODO
// //   // var date = new Date();
// //   // determine day
// //   // if its monday return -> 'individual'
// //   // if its wednesday return -> 'pair'
// //   // if its saturday return -> 'group'
// //   return INDIVIDUAL;
// // };

// const sendMail = (user, content, delivery) => {
//   const username = user.username;
//   const deliveryId = delivery.delivery.id;
//   // console.log(deliveryId, 'username');
//   const link = `http://localhost:3000/submission/${deliveryId}`;
//   // console.log(link, 'link');
//   return { username, link };
// };

// //Monday - Individual
// const findNewContentPerStudentAndSendMail = INDIVIDUAL => {
//   User.find({}).exec(function(err, users) {
//     users.forEach((user, i) => {
//       // find the content that has not been sent to this user. contentId
//       const sentContent = user.sentContent;
//       const contentNotSentList = contentList.reduce((acc, cv) => {
//         sentContent.includes(cv._id) ? acc : acc.push(cv);
//         return acc;
//       }, []);
//       const contentToSend =
//         contentNotSentList[
//           Math.floor(Math.random() * contentNotSentList.length)
//         ];

// //       function deliveryId(req, res) {
// //         const delivery = new Delivery({
// //           user: user.id,
// //           content: contentToSend.id,
// //         });

//         delivery
//           .save()
//           .then(data => {
//             return { data };
//           })
//           .catch(err => {
//             console.log(err);
//           });
//         return { delivery };
//       }
//       const toSend = deliveryId(user, contentToSend);
//       sendMail(user, contentToSend, toSend);
//     });
//   });
// };
