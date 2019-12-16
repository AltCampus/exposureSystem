const cron = require('node-cron');
const User = require('../models/studentSchema');
const Content = require('../models/contentSchema');
const Delivery = require('../models/deliverySchema');
const Mailer = require('./nodeMailer');
const { pairedArray, groupArray } = require('./pairing');
const INDIVIDUAL = 'individual';
const PAIR = 'pair';
const GROUP = 'group';
const contentList = [];

Content.find({}).exec(function(err, contents) {
  contents.forEach(content => contentList.push(content._id));
});

// cron.schedule('* * * * *', function(req, res, next) {
//   //   // find the type of email to be sent
//   //   // 1. Individual mail i) send content
//   //   // 2. pairMail -> i) makePairs ii) send content
//   //   // 3. groupMail -> i) makeGroups ii) send content

//   var mailType = determineDeliveryType();

//   switch (mailType) {
//     case INDIVIDUAL:
//       findNewContentPerStudentAndSendMail();
//     case PAIR:
//       findNewContentPerPairAndSendMail();
//     case GROUP:
//       findNewContentPerGroupAndSendMail();
//   }
// });

const determineDeliveryType = () => {
  // TODO
  var date = new Date();
  var day = date.getDay();
  console.log(day, 'day');
  // determine day

  if (day == 1) {
    console.log('INDIVIDUAL');
    // return INDIVIDUAL;
  }
  if (day == 3) {
    return PAIR;
  }
  if (day === 6) {
    return GROUP;
  }
  // if its monday return -> 'individual'
  // if its wednesday return -> 'pair'
  // if its saturday return -> 'group'
  // return INDIVIDUAL;
  // return PAIR;
};

const generateLinkAndSendMail = (user, delivery) => {
  const studentName = user.username;
  const studentEmail = user.email;
  const deliveryId = delivery.delivery.id;

  const link = `http://localhost:3000/submission/${deliveryId}`;
  console.log(link, 'link');

  // const mail = Mailer.mail(studentEmail, studentName, link);
};

function deliveryId(user, contentToSend) {
  const delivery = new Delivery({
    user: user.id,
    content: contentToSend.id,
  });
  console.log('delivery done');
  delivery
    .save()
    .then(data => {
      return { data };
    })
    .catch(err => {
      console.log(err);
    });
  return { delivery };
}

const findNewContentPerStudentAndSendMail = () => {
  User.find({}).exec(function(err, users) {
    users.forEach((user, i) => {
      // find the content that has not been sent to this user. contentId
      const sentContent = user.sentContent;
      const contentNotSentList = contentList.reduce((acc, cv) => {
        sentContent.includes(cv._id) ? acc : acc.push(cv);
        return acc;
      }, []);
      const contentToSend =
        contentNotSentList[
          Math.floor(Math.random() * contentNotSentList.length)
        ];

      //get new Delivery
      var toSend = deliveryId(user, contentToSend);
      //use delivery and user info to generate link and send mail
      generateLinkAndSendMail(user, toSend);
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
  User.find({}).exec(function(err, users) {
    var findPair = pairedArray(users);

    xyz(findPair);
  });
  function xyz(arrays) {
    arrays.map(array => {
      array.map(student => {
        var contentToSend = [Math.floor(Math.random() * contentList.length)];
        var toSend = deliveryId(student, contentToSend);
        generateLinkAndSendMail(student, toSend);
      });
    });
  }
};

const findNewContentPerGroupAndSendMail = () => {
  User.find({}).exec(function(err, users) {
    const findGroup = groupArray(users);
    xyz(findPair);
  });
  function xyz(arrays) {
    arrays.map(array => {
      array.map(student => {
        var contentToSend = [Math.floor(Math.random() * contentList.length)];
        var toSend = deliveryId(student, contentToSend);
        generateLinkAndSendMail(student, toSend);
      });
    });
  }
};
