/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/*!****************************************************!*\
  !*** ./app/javascript/packs/continuous_refresh.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {


var stepsRaw = document.getElementById('steps_raw');
var distanceRaw = document.getElementById('distance_raw');
var caloriesRaw = document.getElementById('calories_raw');

var progressBars = document.querySelectorAll('.pggd');
var progressBarsCal = document.querySelectorAll('.caloriesburnedcal');
var progressBarsStep = document.querySelectorAll('.steps');
var progressBarsDist = document.querySelectorAll('.distancewalkedkm');

var percentageIndicGoal = document.getElementById('percentage-goal');
var percentageIndicGoalCal = document.querySelectorAll('.caloriesburnedcalp');
var percentageIndicGoalStep = document.querySelectorAll('.stepsp');
var percentageIndicGoalDist = document.querySelectorAll('.distancewalkedkmp');

var progressBarGlobal = document.querySelector('.bg-success');

var button = document.querySelector('.goal-continuous');

var intervalID;

// button.addEventListener('click', (event) => {
// console.log(progressBars);
// progressBars.forEach((progressBar) => {
// console.log(progressBar.style['width']);
// progressBar.style['width'] = '50%';
// console.log(progressBar);
// })
// })

// const url = "https://sportgeek.herokuapp.com/auth/fitbit_oauth2";
// const url = "http://localhost:3000/auth/fitbit_oauth2";

var authorization = 'Bearer' + ' ' + gon.token;

var myHeaders = new Headers();

myHeaders.append("Authorization", authorization);

var myInit = { method: 'GET',
  headers: myHeaders };

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

var refreshedData = {};

var refreshDataCalories = function refreshDataCalories() {
  return fetch('https://api.fitbit.com/1/user/-/activities/calories/date/' + gon.today + '/1d.json', myInit).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
};

var refreshDataSteps = function refreshDataSteps() {
  return fetch('https://api.fitbit.com/1/user/-/activities/steps/date/' + gon.today + '/1d.json', myInit).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
};

var refreshDataDistance = function refreshDataDistance() {
  return fetch('https://api.fitbit.com/1/user/-/activities/distance/date/' + gon.today + '/1d.json', myInit).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
};

function percentageGlobalGoal() {
  var x = 0;
  var y = 0;
  progressBars.forEach(function (e) {
    y += 1;
    a = Number.parseInt(e.style['width'].split('%').join(), 10);
    if (a <= 100) {
      x += a;
    } else {
      x += 100;
    }
  });
  var yo = (x / y).toString() + '%';
  progressBarGlobal.style['width'] = yo;
  percentageIndicGoal.innerText = Number.parseInt(x / y, 10).toString() + '%';
}

function continuousDownload() {
  console.log('YO');
  refreshDataCalories().then(function (data) {
    var calories = data['activities-calories'][0]['value'];
    caloriesRaw.innerText = calories.toString() + ' cal';
    caloriesInt = Number.parseInt(calories, 10);

    progressBarsCal.forEach(function (progressBar, index) {
      var goalValueCal = Number.parseInt(progressBar.attributes['target_value'].value, 10);
      var crossProductCal = caloriesInt * 100 / goalValueCal;
      var advancementCal = crossProductCal.toString() + "%";
      progressBar.style['width'] = advancementCal;
      percentageIndicGoalCal[index].innerText = Number.parseInt(crossProductCal, 10).toString() + "%";
      percentageGlobalGoal();
      if (crossProductCal >= 100) {
        progressBar.classList.remove("progress-bar-striped");
        progressBar.classList.remove("progress-bar-animated");
      }
    });
  });

  refreshDataSteps().then(function (data) {
    var steps = data['activities-steps'][0]['value'];
    stepsRaw.innerText = steps.toString();
    stepsInt = Number.parseInt(steps, 10);

    progressBarsStep.forEach(function (progressBar, index) {
      var goalValueStep = Number.parseInt(progressBar.attributes['target_value'].value, 10);
      var crossProductStep = stepsInt * 100 / goalValueStep;
      var advancementStep = crossProductStep.toString() + "%";
      progressBar.style['width'] = advancementStep;
      percentageIndicGoalStep[index].innerText = Number.parseInt(crossProductStep, 10).toString() + "%";
      percentageGlobalGoal();
      if (crossProductStep >= 100) {
        progressBar.classList.remove("progress-bar-striped");
        progressBar.classList.remove("progress-bar-animated");
      }
    });
  });

  refreshDataDistance().then(function (data) {
    distanceRaw.innerText = (Math.round(Number.parseFloat(data['activities-distance'][0]['value']) * 10) / 10).toString() + ' km';
    var distance = data['activities-distance'][0]['value'];
    distanceFloat = Math.round(Number.parseFloat(data['activities-distance'][0]['value']) * 10) / 10;
    distanceRaw.innerText = distanceFloat.toString() + ' km';

    progressBarsDist.forEach(function (progressBar, index) {
      var goalValueDist = Number.parseInt(progressBar.attributes['target_value'].value, 10);
      var crossProductDist = distanceFloat * 100 / goalValueDist;
      var advancementDist = crossProductDist.toString() + "%";
      progressBar.style['width'] = advancementDist;
      percentageIndicGoalDist[index].innerText = Number.parseInt(crossProductDist, 10).toString() + "%";
      percentageGlobalGoal();
      if (crossProductDist >= 100) {
        progressBar.classList.remove("progress-bar-striped");
        progressBar.classList.remove("progress-bar-animated");
      }
    });
  });
}

// <% @goals_day.each do |goal| %>
// <% data_point = @data_points_today.find_by(key: goal.target_key) %>
// <% d = data_point[:value].to_i %>
// <% g = goal.target_value.to_i %>
// <% g == 0 ? g = 1 : '' %>
// <% cross_product1 = (d * 100) / g %>
// <% if d >= g %>
// <% cross_product1 = 100 %>
// <% end %>
// <% sum += cross_product1 %>
// <% end %>
// <% moy = sum.to_i / (@goals_day.count.to_i) %>
// <% advancement1 = moy.to_s + "%" %>


var continuousClicked = true;

button.addEventListener('click', function (event) {
  if (continuousClicked === false) {
    window.clearInterval(intervalID);
    continuousClicked = true;
  } else if (continuousClicked === true) {
    continuousClicked = false;

    // Promise.all(refreshDataCalories(), )
    // .then(dataArray => {
    //   setDataCalaorsi(dataArray[])
    // })
    intervalID = window.setInterval(continuousDownload, 3000);
  };
});

function clear() {
  window.clearInterval(intervalID);
};
//
//
timeoutID = window.setTimeout(clear, 600000);
//

/***/ })

/******/ });
//# sourceMappingURL=continuous_refresh-2cb072928a804877f836.js.map