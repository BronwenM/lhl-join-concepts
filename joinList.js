/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
const joinList = (arr) => {
  let output = "";
  arr.forEach(e => {
    if (e !== arr[arr.length - 1]) output += `${e}, `;
    else output += `${e}`;
  });

  return output;

  //var output
  //loop over each item in the array
  //IF: no the last item: append to output w/ comma and space
  //ELSE: append to output

  //no input? return blank "" (default output)
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);