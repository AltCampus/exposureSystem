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





const updatePoints = (users, type) => {
    // define a callback that doesnt change our data
    // so even if you remove the default error case below, the function wouldnt crash
    // when you add a new type
    let callback = user => user;
  
    // in each known case, we overwrite above callback with a function specific for this case
    switch (type) {
      case "individual":
        callback = user => ({
          ...user,
          // if the user has submitted, add 0.5 points, else subtract 1
          // always from the previous points
          points: user.points + user.hasSubmitted ? 0.5 : -1
        });
        break;
      case "pair":
        callback = user => ({
          ...user,
          // if the user has submitted, add 1 point, else subtract 1
          // always from the previous points
          points: user.points + user.hasSubmitted ? 1 : -1
        });
        break;
      case "group":
        // if one of the group members submitted, point change will differ
        // findIndex returns the index/position of a dataset within an array
        // if it _doesnt_ find anything, it will return -1
        // so index > -1 is only true if it found a dataset
        const atLeastOneUserSubmitted =
          users.findIndex(user => user.hasSubmitted === true) > -1;
  
        if (atLeastOneUserSubmitted) {
          callback = user => ({
            ...user,
            // if the user has submitted, add 0 point, else subtract 1
            // always from the previous points
            points: user.points + user.hasSubmitted ? 0 : -1
          });
          break;
        }
  
        // always subtract 2 from the previous points since nobody submitted
        callback = user => ({ ...user, points: user.points - 2 });
        break;
      default:
        throw new Error("missing case");
    }
  
    // callback will be executed for every element within users
    return users.map(callback);
  };
  
  class User {
    constructor(name, points=0, hasSubmitted = false) {
      this.name = name;
      this.points = points;
      this.hasSubmitted = hasSubmitted;
    }
  }
  
  const users = [
    new User("Rick", 0, true),
    new User("Jane", 0, false),
    new User("Jamie", 0, true)
  ];
  
  console.log("individual", updatePoints([users[0]], "individual"));
  console.log("pair", updatePoints([users[0], users[1]], "pair"));
  console.log("group", updatePoints(users, "group"));
  