const prompt = require("prompt-sync")();
const fs = require("fs");

const getInfo = () => {
  var name = prompt("Please enter your name: ");
  var age = prompt("Please enter your age: ");
  var birth_month = prompt("Please enter your birth month: ").toLowerCase();
  var cat_name = prompt("Please enter your cat's name: ")

  var months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  var data = {
    name: name,
    age: age,
    birth_month: birth_month,
    cat_name: cat_name
  };

  if (isNaN(age)) {
    console.log("Age must be a number!");
  } else if (age >= 105) {
    console.log("Please enter a valid age");
  } else if (!months.includes(birth_month)) {
    console.log("Please enter a valid month (january, february etc.)");
  } else {
    const json = JSON.stringify(data);
    

    fs.writeFile(`output.json`, json, (err) => {
      if (err) {
        console.error("Error writing file", err);
      } else {
        console.log("JSON file written!");
      }
    });
    console.table(json);
  }
  
};


getInfo()