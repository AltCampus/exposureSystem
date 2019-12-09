const cron = require('node-cron');
const User = require('../models/userSchema');
const Content = require('../models/contentSchema');
// const Delivery = require('../controllers/deliveryController');
const Delivery = require('../models/deliverySchema');
const INDIVIDUAL = 'individual';
const PAIR = 'pair';
const GROUP = 'group';
const contentList = [];

Content.find({}).exec(function(err, contents) {
  contents.forEach(content => contentList.push(content));
});
cron.schedule('* * * * *', function(req, res, next) {
  // find the type of email to be sent
  // 1. Individual mail i) send content
  // 2. pairMail -> i) makePairs ii) send content
  // 3. groupMail -> i) makeGroups ii) send content

  var mailType = determineDeliveryType();

  switch (mailType) {
    case INDIVIDUAL:
      findNewContentPerStudentAndSendMail();
    case PAIR:
      findNewContentPerStudentAndSendMail();
    case GROUP:
      findNewContentPerStudentAndSendMail();
  }
});

const determineDeliveryType = () => {
  // var date = new Date();
  // determine day
  // if its monday return -> 'individual'
  // if its wednesday return -> 'pair'
  // if its saturday return -> 'group'
  return INDIVIDUAL;
};

const findNewContentPerStudentAndSendMail = () => {
  User.find({}).exec(function(err, users) {
    users.forEach((user, i) => {
      //   console.log(user, 'cron');
      //   console.log(contentList);
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

      // create a new delivery.

      //   const delivery = Delivery.newDelivery({
      //     user: user._id,
      //     content: contentToSend._id,
      //   });

      function deliveryId(req, res) {
        const delivery = new Delivery({
          user: user.id,
          content: contentToSend.id,
        });

        delivery
          .save()
          .then(data => {
            const id = data.id;
            // console.log(id, 'inside cron');
            // return { id };
            return { data };
          })
          .catch(err => {
            console.log(err);
          });

        console.log(delivery);
      }
      deliveryId(user, contentToSend);
      // console.log(data, 'inside cron');
      // sendMail(user._id, content._id, delivery._id)
    });
  });
};

const sendMail = (userId, contentId, deliveryId) => {
  // actually send the mail.
};
