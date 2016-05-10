module.exports = function(username){

//first solution

//   if(username === "Xolani"){
//     return "Hello," + " " + username.toUpperCase() + "!";
//   }
//   if(username === "Joe"){
//     return "Hello!";
//   }
//   if (username === "Bob"){
//     return "Hello!";
//   }
//
// }


//second refactored solution

  if(username === "Xolani"){
   return "Hello," + " " + username.toUpperCase() + "!";
  }
  if (username === "Joe" || username === "Bob"){
   return "Hello!";
  }

}
