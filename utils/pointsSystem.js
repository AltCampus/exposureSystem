
// const updatePoints = (users, type) => {
//     // define a callback that doesnt change our data
//     // so even if you remove the default error case below, the function wouldnt crash
//     // when you add a new type
//     let callback = user => user;

//     // in each known case, we overwrite above callback with a function specific for this case
//     switch (type) {
//       case "individual":
//         callback = user => ({
//           ...user,
//           // if the user has submitted, add 0.5 points, else subtract 1
//           // always from the previous points
//           points: user.points + user.hasSubmitted ? 0.5 : -1
//         });
//         break;
//       case "pair":
//         callback = user => ({
//           ...user,
//           // if the user has submitted, add 1 point, else subtract 1
//           // always from the previous points
//           points: user.points + user.hasSubmitted ? 1 : -1
//         });
//         break;
//       case "group":
//         // if one of the group members submitted, point change will differ
//         // findIndex returns the index/position of a dataset within an array
//         // if it _doesnt_ find anything, it will return -1
//         // so index > -1 is only true if it found a dataset
//         const atLeastOneUserSubmitted =
//           users.findIndex(user => user.hasSubmitted === true) > -1;

//         if (atLeastOneUserSubmitted) {
//           callback = user => ({
//             ...user,
//             // if the user has submitted, add 0 point, else subtract 1
//             // always from the previous points
//             points: user.points + user.hasSubmitted ? 0 : -1
//           });
//           break;
//         }

//         // always subtract 2 from the previous points since nobody submitted
//         callback = user => ({ ...user, points: user.points - 2 });
//         break;
//       default:
//         throw new Error("missing case");
//     }

//     // callback will be executed for every element within users
//     return users.map(callback);
//   };

//   class User {
//     constructor(name, points=0, hasSubmitted = false) {
//       this.name = name;
//       this.points = points;
//       this.hasSubmitted = hasSubmitted;
//     }
//   }

//   const users = [
//     new User("Rick", 0, true),
//     new User("Jane", 0, false),
//     new User("Jamie", 0, true)
//   ];

//   console.log("individual", updatePoints([users[0]], "individual"));
//   console.log("pair", updatePoints([users[0], users[1]], "pair"));
//   console.log("group", updatePoints(users, "group"));


// const increasePoints = (user, type) => {
//   switch(type) {
//       case 'individual':
//           return { ...user, points: user.points + 0.5 };
//       case 'pair':
//           return { ...user, points: user.points + 1 };
//       case 'group':
//           return { ...user, points: user.points + 2 };
//       default:
//           return null;
//   }
// }

// const decreasePoints = (user, type) => {
//   switch(type) {
//       case 'individual':
//           return { ...user, points: user.points - 1 };
//       case 'pair':
//           return { ...user, points: user.points - 1 };
//       case 'group':
//           return { ...user, points: user.points - 2 };
//       default:
//           return null;
//   }
// }



const updatePoints = (users, type) => {
  switch (type) {
    case "individual":
      // submits: 0.5; if not: -1 for the user.

      return users.map(user => {
        return { ...user, points: user.points + user.hasSubmitted ? 0.5 : -1 };
      });
    case "pair":
      //  submits: 1; if not: -1 to the user who has not submitted.
      return users.map(user => {
        return { ...user, points: user.points + user.hasSubmitted ? 1 : -1 };
      });
    case "group":
      const atLeastOneUserSubmitted =
        users.findIndex(user => user.hasSubmitted === true) > -1;

      if (atLeastOneUserSubmitted) {
        // if one user doesn't submit, -1 for that user and the whole group gets 0.
        return users.map(user => {
          return { ...user, points: user.points + user.hasSubmitted ? 0 : -1 };
        });
      }

      //  if no one submits, -2 for everybody,
      return users.map(user => {
        return { ...user, points: user.points - 2 };
      });

    default:
      throw new Error("missing case");
  }
};

class User {
  constructor(name, points = 0, hasSubmitted = false) {
    this.name = name;
    this.points = points;
    this.hasSubmitted = hasSubmitted;
  }
}

// const users = [
//   new User("Rick", 0, true),
//   new User("Jane", 0, false),
//   new User("Jamie", 0, true)
// ];

const pair = [
  new User("Jane", 0, false),
  new User("Jamie", 0, true)
]

const group = [
  new User("Rick", 0, true),
  new User("Jane", 0, false),
  new User("Jamie", 0, true)
]

const individual = [
  new User("Rick", 0, true)
]

console.log("individual", updatePoints(individual, "individual"));
console.log("pair", updatePoints(pair, "pair"));
console.log("group", updatePoints(group, "group"));

export { updatePoints }




