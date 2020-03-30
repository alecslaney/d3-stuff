d3.selectAll("button").on("click", function() {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  // Answer: It will console log the `button` element.
  console.log(this.id);
});

d3.selectAll("li").on("click", function() {
  // you can select the element just like any other selection
  var listItem = d3.select(this);
  console.log(listItem.style("color"));

  listItem.style("color", "blue");

  var listItemText = listItem.text();
  console.log(listItemText);
});

// to toggle the color from blue and back:
// d3.selectAll("li").on("click", function() {
//   var listItem = d3.select(this);
//   if (listItem.style("color") === "blue") {
//     listItem.style("color", "");
//   }
//   else {
//     listItem.style("color", "blue");
//   }
// })
