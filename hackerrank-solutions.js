function equalizeArray(arr) {
  // first we define our object to count the numbers
  const object = {};
  // then we create a for loop over our array
  for (let i of arr) {
    // if the index of our array exists...
    if (object[i]) {
      // then increment (count the numbers)
      object[i]++;
    }
    // if not, we assign the index to 1
    else {
      object[i] = 1;
    }
  }
  // create an array of values
  const values = Object.values(object);
  // get the max value thats repeated
  const maximum = Math.max(...values);
  // finally, we substract that value from the original array length
  return arr.length - maximum;
}

function frequencyQueries(queries) {
  // first we define our variables and simply set them all to an array at first
  const frequencies = [];
  // amount each frequency occurs
  const frequencyTracker = [];
  // our eventual result
  const result = [];
  // then we are looping over queries and assigning values to them
  for (const query of queries) {
    const action = query[0];
    const value = query[1];
    let index;
    // if our action is 1 or 2
    if (action === 1 || action === 2) {
      // set our index equal to the value of our frequencies array
      index = frequencies[value];
      // if we can pass in index to our frequencyTracker, then we decrement it, if not, return null
      frequencyTracker[index] ? --frequencyTracker[index] : null;
    }
    // If the action is 1 we set or increase our counter at the given index.
    if (action === 1) {
      typeof frequencies[value] === "undefined"
        ? //   set our value to one
          (frequencies[value] = 1)
        : // increase amount if it reappears
          ++frequencies[value];
    }
    // If the action is 2 we decrease our counter at the given index.
    if (action === 2 && frequencies[value]) {
      --frequencies[value];
    }
    // once again, if our action is 1 or 2
    if (action === 1 || action === 2) {
      // set our index equal to the value of our frequencies array
      index = frequencies[value];
      // if we can pass in index to our frequencyTracker, then we increment it this time, if not, set it to one
      frequencyTracker[index]
        ? ++frequencyTracker[index]
        : (frequencyTracker[index] = 1);
    }
    // If the action is 3 we check whether the value in our frequencyTracker is "true" or "not 0" or "nor undefined".
    if (action === 3) {
      result.push(frequencyTracker[value] > 0 ? 1 : 0);
    }
  }
  return result;
}
