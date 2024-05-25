function ageSort(users) {
  // SORT USERS BY NAME FROM YOUNGEST TO OLDEST 
  // PLACE USERS AGES INTO NEW ARRAY
  //    ITERATE THROUGH ARRAY OF OBJECTS GET AGES
  //    SORT AGES USING SORT METHOD
  //    RETURN FIRST NAMES OF USERS IN ORDER
  

let notSorted = [];
for (let el of users) {
  notSorted.push(el)
}
let sorted = notSorted.sort(function(a, b) {
  return a.age - b.age;
})
for (let el of sorted) {
el = el.firstName // the elements of the array (e.g. objects are reassigned to the firstName)
}
return sorted
}

function oddEvenSort(arr) {
  // Your code here 
}

function validAnagrams(s, t) {
  // Your code here 
}

function reverseBaseSort(arr) {
  // Your code here 
}

function frequencySort(arr) {
  // Your code here 
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];


  // for (let user of users) {

  //   // First
  //   if (!sort.length) {
  //     sort[0] = user;
  //   }

  //   // Second 
  //   else if (sort.length <= 1) {
  //     if (user.age < sort[0].age) {
  //       sort.unshift(user);
  //     } else {
  //       sort.push(user);
  //     }
  //   }

  //   // [1 , 4 , 6, 7]   5

  //   // Sorting Algorithm
  //   else {
  //     for (let i = 0; i < sort.length; i++) {
  //       if (sort[i].age < user.age && sort[i + 1].age > user.age) {
  //         for (let j = sort.length; j > i; j--) {
  //           sort[j] = sort[j - 1];
  //         }
  //         sort[i + 1] = user;
  //       }
  //     }
  //   }
  // }
  // return sort.map( el => el.firstName);