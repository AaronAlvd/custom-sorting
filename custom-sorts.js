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

let even = []
let odd = []

for ( let num of arr) {
if (num % 2 === 1) {
  odd.push(num);
} else {
  even.push(num);
}
}
let evenSorted = even.sort(function(a, b) {
  return a - b;
})
let oddSorted = odd.sort(function(a, b) {
  return a - b;
})

return [...oddSorted, ...evenSorted]


}

function validAnagrams(s, t) {
// An anagram is a word that can spell another word using same letters
let count = 0;
for (let char of s) {
  if (t.includes(char)) {
    count++;
  }
}
return count === t.length
}

function reverseBaseSort(arr) {
// Binary, decimal, hexadeciaml
// Convert numbers into the decimal base number
// Then sort them accordingly
// Convert back to normal

let base01 = [];
let base02 = [];
let base03 = [];

for (let num of arr) {
  if (num < 10 ) {
    base01.push(num);
  } else if (num < 100) {
    base02.push(num);
  } else {
    base03.push(num)
  }
}

let sorted03 = base03.sort(function(a, b) {
  return a - b;
})
let sorted02 = base02.sort(function(a, b) {
  return a - b;
})
let sorted01 = base01.sort(function(a, b) {
  return a - b;
})

return [...sorted03, ...sorted02, ...sorted01];

}

function frequencySort(arr) {
  const obj = {};

  for (let num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }


  let sorted01 = arr.sort(function(a, b) {
    if (obj[a] === obj[b]) {
    return b - a;
    } 
    
    else if (obj[a] > obj[b]) {
      return 1 // If one, then is positive (e.g. a should come after b)
    }

    else if (obj[b] > obj[a]) {
      return -1 // If -1, then is negative (e.g. b should come before a)
    }
  })

  // for (let num of sorted01) {
  //   for (let el in obj) {
  //     let val = obj[el];
  //     if (val === num) {
  //       for (let i = 0; i < num; i++) {
  //         sorted.push(Number(el));
  //       }
  //     }
  //   }
  // }
  // console.log(sorted01);

  return sorted01;
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