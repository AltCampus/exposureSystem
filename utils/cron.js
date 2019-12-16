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
  contents.forEach(content => contentList.push(content));
});

cron.schedule('* * * * *', function(req, res, next) {
  //   // find the type of email to be sent
  //   // 1. Individual mail i) send content
  //   // 2. pairMail -> i) makePairs ii) send content
  //   // 3. groupMail -> i) makeGroups ii) send content

  var mailType = determineDeliveryType();

  switch (mailType) {
    case INDIVIDUAL:
      findNewContentPerStudentAndSendMail();
    case PAIR:
      findNewContentPerPairAndSendMail();
    case GROUP:
      findNewContentPerStudentAndSendMail();
  }
});

const determineDeliveryType = () => {
  // TODO
  // var date = new Date();
  // determine day
  // if its monday return -> 'individual'
  // if its wednesday return -> 'pair'
  // if its saturday return -> 'group'
  // return INDIVIDUAL;
  return PAIR;
};

const sendMail = (user, delivery) => {
  const studentName = user.username;
  const studentEmail = user.email;
  const deliveryId = delivery.delivery.id;

  const link = `http://localhost:3000/submission/${deliveryId}`;
  // console.log(link, 'link');

  // const mail = Mailer.mail(studentEmail, studentName, link);
};

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

      function deliveryId(req, res) {
        const delivery = new Delivery({
          user: user.id,
          content: contentToSend.id,
        });

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
      const toSend = deliveryId(user, contentToSend);
      sendMail(user, toSend);
    });
  });
};

const findNewContentPerPairAndSendMail = () => {
  User.find({}).exec(function(err, users) {
    console.log('in find');
    // console.log(studentArray, 'studentArray done');
    const findPair = pairedArray(users);
    console.log(findPair, 'paired');
  });
};
