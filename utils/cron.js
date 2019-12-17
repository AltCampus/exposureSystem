const cron = require('node-cron');
const Student = require('../models/studentSchema');
const Content = require('../models/contentSchema');
const Delivery = require('../models/deliverySchema');
const Mailer = require('./nodeMailer');
const { pairedArray, groupArray } = require('./pairing');
const INDIVIDUAL = 'individual';
const PAIR = 'pair';
const GROUP = 'group';
const contentList = [];

Content.find({}).exec(function(err, contents) {
  contents.forEach(content => contentList.push(content));
});

cron.schedule('* * * * *', function(req, res, next) {
  var mailType = determineDeliveryType();

  switch (mailType) {
    case INDIVIDUAL:
      findNewContentPerStudentAndSendMail();
    case PAIR:
      findNewContentPerPairAndSendMail();
    case GROUP:
      findNewContentPerGroupAndSendMail();
  }
});

const determineDeliveryType = () => {
  var date = new Date();
  var day = date.getDay();
  console.log(day, 'day');

  // if (day == 1) {
  //   // console.log('INDIVIDUAL');
  //   return INDIVIDUAL;
  // }
  // if (day == 3) {
  //   return PAIR;
  // }
  // if (day === 6) {
  //   return GROUP;
  // }
  return GROUP;
};

const generateLinkAndSendMail = (student, delivery) => {
  const studentName = student.username;
  const studentEmail = student.email;
  const deliveryId = delivery.delivery.id;

  const link = `http://localhost:3000/submission/${deliveryId}`;
  console.log(link, 'link');

  // const mail = Mailer.mail(studentEmail, studentName, link);
};

const deliveryId = (student, contentToSend) => {
  const delivery = new Delivery({
    student: student.id,
    content: contentToSend.id,
  });
  console.log(delivery, 'delivery');

  delivery
    .save()
    .then(data => {
      return { data };
    })
    .catch(err => {
      console.log(err);
    });
  return { delivery };
};

const findNewContentPerStudentAndSendMail = () => {
  Student.find({}).exec(function(err, students) {
    students.forEach((student, i) => {
      // find the content that has not been sent to this user. contentId
      const sentContent = student.sentContent;
      const contentNotSentList = contentList.reduce((acc, cv) => {
        sentContent.includes(cv._id) ? acc : acc.push(cv);
        return acc;
      }, []);
      const contentToSend =
        contentNotSentList[
          Math.floor(Math.random() * contentNotSentList.length)
        ];
      const toSend = deliveryId(student, contentToSend);
      generateLinkAndSendMail(student, toSend);
    });
  });
};

// const checkSentContentToUsers = pairedUserArray => {
//   return pairedUserArray.map((usersArray, i) => {
//     return usersArray.reduce((acc, userObj) => {
//       userObj.sentContent.forEach(val => {
//         if (!acc.includes(val)) {
//           acc.push(val);
//         }
//       });
//       // console.log(acc, 'acc');
//       return acc;
//     }, []);
//   });
// };

const findNewContentPerPairAndSendMail = () => {
  Student.find({}).exec(function(err, students) {
    var allPairs = pairedArray(students);
    allPairs.map(pairArray => {
      // const contentNotSentList = contentList.reduce((acc, cv) => {
      //   sentContent.includes(cv._id) ? acc : acc.push(cv);
      //   return acc;
      // }, []);
      const contentToSend =
        contentList[Math.floor(Math.random() * contentList.length)];

      pairArray.forEach((student, i) => {
        const toSend = deliveryId(student, contentToSend);
        generateLinkAndSendMail(student, toSend);
      });
    });
  });
};

const findNewContentPerGroupAndSendMail = () => {
  Student.find({}).exec(function(err, students) {
    const allGroups = groupArray(students);
    allGroups.map(groupArray => {
      // console.log(groupArray, 'groupArray');
      // const contentNotSentList = contentList.reduce((acc, cv) => {
      //   sentContent.includes(cv._id) ? acc : acc.push(cv);
      //   return acc;
      // }, []);
      const contentToSend =
        contentList[Math.floor(Math.random() * contentList.length)];

      groupArray.forEach((student, i) => {
        const toSend = deliveryId(student, contentToSend);
        generateLinkAndSendMail(student, toSend);
      });
    });
  });
};
