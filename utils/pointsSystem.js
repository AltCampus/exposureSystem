// const increasePoints = (user, type) => {
//   switch (type) {
//     case 'individual':
//       user.points += 0.5;
//       return { ...user };
//     case 'pair':
//       user.points += 1;
//       return { ...user };
//     case 'group':
//       user.points += 2;
//       return { ...user };
//     default:
//       return null;
//   }
// };
// const decreasePoints = (user, type) => {
//   switch (type) {
//     case 'individual':
//       user.points -= 0.5;
//       return { ...user };
//     case 'pair':
//       user.points -= 1;
//       return { ...user };
//     case 'group':
//       user.points -= 2;
//       return { ...user };
//     case 'optOut':
//       user.points -= 2;
//       return { ...user };
//     case 'defaulter':
//       user.points -= 1;
//       return { ...user };
//     case 'defaulterGroup':
//       user.pointrs = 0;
//       return { ...user };
//     default:
//       return null;
//   }
// };

// const handleCompletion = (user, userType, hasSubmitted) => {
//   return hasSubmitted
//     ? increasePoints(user, userType)
//     : decreasePoints(user, userType);
// };
// // const user1 = new User("rick",0,true)
// // const user2 = new User("jane",0,true)
// // const user3 = new User("tom",0,false)

// // Group case
// // const group = [user1, user2, user3];

// const updateIndividualPoints = user => {
//   return user.hasSubmitted
//     ? handleCompletion(user, 'individual', true)
//     : handleCompletion(user, 'individual', false);
// };

// const updateGroupPoints = userArr => {
//   const result = userArr.map(user => {
//     return user.hasSubmitted
//       ? handleCompletion(user, 'group', true)
//       : handleCompletion(user, 'group', false);
//   });
//   console.log(result);
// };
// updateGroupPoints(group);
// // Pair Case
// const pair = [user1, user2];
// const updatePairPoints = userArr => {
//   const pairResult = userArr.map(user => {
//     return user.hasSubmitted
//       ? handleCompletion(user, 'pair', true)
//       : handleCompletion(user, 'pair', false);
//   });
//   console.log(pairResult);
// };
// updatePairPoints(pair);
// // Defaulter Case
// const group = [user1, user2, user3];
// const updateGroupOptout = userArr => {
//   const groupOptoutResult = userArr.map(user => {
//     return { ...(user.points -= 1) };
//   });
//   console.log(groupOptoutResult);
// };
// updateGroupOptout(group);

// module.exports = { updateIndividualPoints };
