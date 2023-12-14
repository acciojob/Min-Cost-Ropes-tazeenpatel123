function mincost(arr) {
  let totalCost = 0;

  // Sort the array of rope lengths
  arr.sort((a, b) => a - b);//increasing order

  while (arr.length > 1) {
    // Sum the two smallest rope lengths
    let sum = arr[0] + arr[1];
    totalCost += sum;

    // Replace the two smallest ropes with their sum
    arr.splice(0, 2, sum);

    // Re-sort the array (not the most efficient, but simple for small arrays)
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports=mincost;
