const test1 = ['a','b','c'];
const test2 = [1,2,3];
const test3 = [1,2,3,4];

function zipList(list1, list2){
  const result =[];
  if(list1.length ===list2.length){
  for (let i =0; i < list1.length;i++)
    {
      result.push(list1[i], list2[i]);
    }
    return result;
    }else {
    return console.log("Two lists are not the same length");
  }

}

console.log(zipList(test1, test2));
console.log(zipList(test1, test3));

function zipListTheSimpleWay(list1, list2){
  if(list1.length ===list2.length) {
    return _.flatten(_.zip(list1,list2));
  } else {
    return console.log("Two lists are not the same length");
  }
}
console.log(zipListTheSimpleWay(test1, test2));
console.log(zipListTheSimpleWay(test1, test3));


