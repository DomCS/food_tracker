// Load Charts and the bar package.
google.charts.load("current", { packages: ["bar"] });
// Draw the bar charts when charts is loaded.
google.charts.setOnLoadCallback(drawChart);

var foodsLib = [];
var enteredFoodsLib = [];
var displayChart = false;
var avgCal, avgFat, avgCarbs, avgPro, totCal, totFat, totCar, totPro;

var Food = function (name, servingSize, calories, fat, carbs, protein) {
  this.name = name;
  this.servingSize = servingSize;
  this.calories = calories;
  this.fat = fat;
  this.carbs = carbs;
  this.protein = protein;
  this.eatenToday = false;
  this.highFat = false;
  this.highCarb = false;
  this.highPro = false;
};

var Food = function (
  name,
  servingSize,
  calories,
  fat,
  carbs,
  protein,
  highFat,
  highCarb,
  highPro,
) {
  this.name = name;
  this.servingSize = servingSize;
  this.calories = calories;
  this.fat = fat;
  this.carbs = carbs;
  this.protein = protein;
  this.eatenToday = false;
  this.highFat = highFat;
  this.highCarb = highCarb;
  this.highPro = highPro;
};

Food.prototype.eat = function () {
  foodsLib.unshift(this);
  this.eatenToday = true;
};
//for each food item that has been eaten this function will return
//the average amount of fat in (grams) among them
Food.prototype.avgFats = function () {
  avgFat = 0;
  for (i = 0; i < foodsLib.length; i++) {
    var currentFood = foodsLib[i];
    avgFat += currentFood.fat;
  }
};
//for each food item that has been eaten this function will return
//the average amount of carbs in (grams) among them
Food.prototype.avgCarbs = function () {
  avgCar = 0;
  for (i = 0; i < foodsLib.length; i++) {
    var currentFood = foodsLib[i];
    avgCar += currentFood.carbs;
  }
};
//for each food item that has been eaten this function will return
//the average amount of protein in (grams) among them
Food.prototype.avgProtein = function () {
  avgPro = 0;
  for (i = 0; i < foodsLib.length; i++) {
    var currentFood = foodsLib[i];
    avgPro += currentFood.protein / foodsLib.length;
    console.log("average protein is a whiooooping" + avgPro.toFixed(2) + "g's");
  }
};

var salmon = new Food(
  "Sockey Salmon",
  "6 oz",
  300,
  15,
  0,
  36,
  true,
  false,
  true,
);
var lentils = new Food(
  "Green Lentils",
  "198g",
  230,
  0.8,
  39.9,
  17.9,
  false,
  true,
  false,
);
var rice = new Food(
  "white rice",
  "186g",
  242,
  0.4,
  53.2,
  4.4,
  false,
  true,
  false,
);
var mcChicken = new Food(
  "mcChicken",
  "147g",
  430,
  23,
  41,
  14,
  true,
  true,
  false,
);
var hamburger = new Food(
  "ground beef 93%",
  "112g",
  170,
  8,
  0,
  23,
  true,
  false,
  true,
);
var baconGrease = new Food(
  "bacon grease",
  "1tsp",
  38.1,
  4.2,
  0,
  0,
  true,
  false,
  false,
);
var sweetPotato = new Food(
  "sweet potato",
  "328g",
  249,
  0.5,
  58.1,
  4.5,
  false,
  true,
  false,
);
var quinoa = new Food(
  "red quinoa",
  "185g",
  222,
  3.6,
  39.4,
  8.1,
  false,
  true,
  false,
);

window.onload = function () {
  chartStatus();
  addServingSize();
};

function initFoods() {
  for (i = 0; i < foodsLib.length; i++) {
    foodsLib[i].eat();
  }
}

quinoa.eat();
rice.eat();
salmon.eat();
lentils.eat();
mcChicken.eat();
hamburger.eat();
baconGrease.eat();
sweetPotato.eat();

function getTotalCals() {
  totCal = 0;
  for (i = 0; i < enteredFoodsLib.length; i++) {
    //console.log(foodsLib[i].calories);
    totCal += enteredFoodsLib[i].calories;
  }
  return totCal;
  console.log(totCal);
}

function getTotalFat() {
  totFat = 0;
  for (i = 0; i < enteredFoodsLib.length; i++) {
    //console.log(foodsLib[i].fat);
    totFat += enteredFoodsLib[i].fat;
  }
  return totFat;
  console.log(totCal);
}

function getTotalCarbs() {
  totCar = 0;
  for (i = 0; i < enteredFoodsLib.length; i++) {
    //console.log(foodsLib[i].carbs);
    totCar += enteredFoodsLib[i].carbs;
  }
  return totCar;
  console.log(totCal);
}

function getTotalPro() {
  totPro = 0;
  for (i = 0; i < enteredFoodsLib.length; i++) {
    //console.log(foodsLib[i].protein);
    totPro += enteredFoodsLib[i].protein;
  }
  return totPro;
  console.log(totCal);
}

let getTotal = () => {
  for (i = 0; i < enteredFoodsLib.length; i++) {
    //console.log(foodsLib[i].calories);
    totCal += enteredFoodsLib[i].calories;
  }
};

let getAverage = (food, prop) => {
  return;
};

//for each food item that has been eaten this function will return
//the average amount of calories among them
function avgCaloriesF() {
  avgCal = getTotalCals() / enteredFoodsLib.length;
  console.log("called within avgCalories function " + avgCal);
  return avgCal;
}

//for each food item that has been eaten this function will return
//the average amount of calories among them
function avgEatenFat() {
  avgFat = getTotalFat() / enteredFoodsLib.length;
  console.log("called within avgFatF function " + avgFat);
  return avgFat;
}

//for each food item that has been eaten this function will return
//the average amount of calories among them
function avgEatenCarbs() {
  avgCarbs = getTotalCarbs() / enteredFoodsLib.length;
  console.log("called within avgCarbsF function " + avgCarbs);
  return avgCarbs;
}

//for each food item that has been eaten this function will return
//the average amount of calories among them
function avgEatenPro() {
  avgPro = getTotalPro() / enteredFoodsLib.length;
  console.log("called within avgProteinF function " + avgPro);
  return avgPro;
}

//function accepts and saves into a variable the user's <select> <option>
function getFoodEntered() {
  // reference to 'foodList' select list
  // used throughout the examples below
  var sel = document.getElementById("foodSelect");
  //save value from the html select into a variable
  var foodSearchKey = sel.value;
  return foodSearchKey;
}
//function searches db's known foods for a match to users <select> <option>
function matchFood() {
  for (i = 0; i < foodsLib.length; i++) {
    if (foodsLib[i].name == getFoodEntered()) {
      //console.log("testing " + foodsLib[i].name);
      //enteredFoodsLib.unshift(foodsLib[i]);
      //console.log(foodsLib[i].value + " testing as well");
      return foodsLib[i];
    }
  }
}

//this function adds the <select> <option>
//that was returned from matchfood() to the user's eaten foods
function eatReadFood() {
  enteredFoodsLib.unshift(matchFood());
  console.log(enteredFoodsLib);
}

function chartStatus() {
  var option = document.getElementsByName("displayChart");
  var setChartDisplay;
  for (var i = 0, length = option.length; i < length; i++) {
    if (option[i].checked) {
      // do whatever you want with the checked radio
      //console.log(radios[i].value);
      setChartDisplay = option[i].value;
      console.log(setChartDisplay);
      if (setChartDisplay == 1) {
        displayChart = true;
      } else if (setChartDisplay == 0) {
        displayChart = false;
      }
      console.log(displayChart + "is disp[lay chart");
      return displayChart;
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
}

//pretty much the callingg function **********************
function foodAdd() {
  getFoodEntered();
  matchFood();
  eatReadFood();
  drawChart();
  avgFatFunc();
  avgCarbsFunc();
  avgProFunc();
  addTableRow();
  return matchFood();
}

//code to toggle the display of the chart on or off
function showChart() {
  if (chartStatus() == true) {
    document.querySelector(".theChart").style.display = "block";
    //console.log("this is calling chart status" + chartStatus());
  } else if (chartStatus() == false) {
    document.querySelector(".theChart").style.display = "none";
    //console.log("this is calling chart status" + chartStatus());
  }
  chartStatus();
}

function removeLastFood() {
  for (i = 0; i < enteredFoodsLib.length; i++) {
    enteredFoodsLib.splice(0, 1);
    //.log(enteredFoodsLib[i]);
    console.log(enteredFoodsLib);
    drawChart();
  }
}

function clearFoods() {
  enteredFoodsLib = [];
  drawChart();
}

function showSignInDiv() {
  document.getElementById("signInDiv").style.display = "block";
}

function signInButtonClicked() {
  document.getElementById("signInDiv").style.display = "none";
}

function drawChart() {
  // Define the first chart to be drawn.
  var data = google.visualization.arrayToDataTable([
    ["Macro Type", "Consumed", "Goal", { role: "annotation" }],
    ["Carbs (g)", getTotalCarbs(), 237.5, "Carbs"],
    ["Fat (g)", getTotalFat(), 70, "Fat"],
    ["Protein (g)", getTotalPro(), 155, "Protein"],
  ]);
  //options for first chart
  var options = {
    chart: {
      title: "Nutrients to Daily Goal",
      subtitle: "Carbohydrates, Fat and Protein Measured in grams",
    },
    bars: "horizontal",
  };

  //Define the 2nd chart to be drawn
  var data2 = google.visualization.arrayToDataTable([
    ["Calories", "Consumed", "Goal", { role: "annotation" }],
    ["Calories", getTotalCals(), 2200, "calories"],
  ]);
  //options for 2nd chart
  var options2 = {
    chart: {
      title: "Calories to Daily Goal",
      subtitle: "Calories",
    },
    bars: "horizontal",
  };

  // Instantiate and draw the chart.
  var chart = new google.charts.Bar(document.getElementById("chart_1"));
  chart.draw(data, options);
  var chart2 = new google.charts.Bar(document.getElementById("chart_2"));
  chart2.draw(data2, options2);
}

//cycles through the html <select>'s <option>
//for each option that db has a matching food item for
//the function appends html to reflect db's serving size for that food
function addServingSize() {
  //loops through each option in the #foodSelect <select>
  Array.from(document.querySelector("#foodSelect").options).forEach(function (
    option_element,
  ) {
    //tests for different attributes of each elements <option>
    let option_text = option_element.text;
    let option_value = option_element.value;
    let is_option_selected = option_element.selected;
    let option_food = option_element.value;

    //testing the <option> value for foods within our database
    switch (option_food) {
      case "Sockey Salmon":
        option_element.innerHTML += " (" + salmon.servingSize + ")";
        break;
      case "Green Lentils":
        option_element.innerHTML += " (" + lentils.servingSize + ")";
        break;
      case "white rice":
        option_element.innerHTML += " (" + rice.servingSize + ")";
        break;
      case "red quinoa":
        option_element.innerHTML += " (" + quinoa.servingSize + ")";
        break;
      case "mcChicken":
        option_element.innerHTML += " (" + mcChicken.servingSize + ")";
        break;
      case "ground beef 93%":
        option_element.innerHTML += " (" + hamburger.servingSize + ")";
        break;
      case "Sockey Salmon":
      case "bacon grease":
        option_element.innerHTML += " (" + baconGrease.servingSize + ")";
        break;
      case "sweet potato":
        option_element.innerHTML += " (" + sweetPotato.servingSize + ")";
        break;
    }

    //log to the console for confirmation and nice printout of
    //each values attributes
    console.log("Option Text : " + option_text);
    console.log("Option Value : " + option_value);
    console.log(
      "Option Selected : " + (is_option_selected === true ? "Yes" : "No"),
    );

    console.log("\n\r");
  });
}

//for each food item that has been eaten this function will return
//the average amount of protein in (grams) among them
//difference between other 'avg' functions above:this is the average nutrients
//of the entire array of chooosable foods
function avgFatFunc() {
  avgFat = 0;
  for (i = 0; i < foodsLib.length; i++) {
    var currentFood = foodsLib[i];
    avgFat += currentFood.fat / foodsLib.length;
    //document.getElementById("disFat").innerHTML = " avg fat:" + avgFat;
  }
  return avgFat;
}
//for each food item that has been eaten this function will return
//the average amount of protein in (grams) among them
//difference between other 'avg' functions above:this is the average nutrients
//of the entire array of chooosable foods
function avgCarbsFunc() {
  avgCarbs = 0;
  for (i = 0; i < foodsLib.length; i++) {
    var currentFood = foodsLib[i];
    avgCarbs += currentFood.carbs / foodsLib.length;
    // document.getElementById("disCarbs").innerHTML = " avg carbs:" + avgCarbs;
  }
  return avgCarbs;
}
//for each food item that has been eaten this function will return
//the average amount of protein in (grams) among
//difference between other 'avg' functions above:this is the average nutrients
//of the entire array of chooosable foods
function avgProFunc() {
  avgPro = 0;
  for (i = 0; i < foodsLib.length; i++) {
    var currentFood = foodsLib[i];
    avgPro += currentFood.protein / foodsLib.length;
    //document.getElementById("disPro").innerHTML = " avg protein:" + avgPro;
  }
  return avgPro;
}

/*
let addTableRow = () => {
  let tabBody = document.getElementsByTagName("tbody").item(0);
  row = document.createElement("tr");
  numOfRows = 0;
  nameCell = document.createElement("td");

  for (let i = 0; i < enteredFoodsLib.length; i++) {
    if (enteredFoodsLib[i] && i <= numOfRows) {
      numOfRows++;
      nameText = document.createTextNode(enteredFoodsLib[i].name);
      nameCell.appendChild(nameText);
      row.appendChild(nameCell);
      tabBody.appendChild(row);
      nameText = "";
    }
  }
};
*/
