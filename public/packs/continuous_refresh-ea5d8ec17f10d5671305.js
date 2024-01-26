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

var progressBarsCal = document.querySelectorAll('.caloriesburnedcal');
var progressBarsStep = document.querySelectorAll('.steps');
var progressBarsDist = document.querySelectorAll('.distancewalkedkm');

var button = document.querySelector('.goal-continuous');

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

var continuousClicked = true;

button.addEventListener('click', function (event) {
  if (continuousClicked === false) {
    continuousClicked = true;
  } else if (continuousClicked === true) {
    continuousClicked = false;
    console.log('Yo');

    // Promise.all(refreshDataCalories(), )
    // .then(dataArray => {
    //   setDataCalaorsi(dataArray[])
    // })

    refreshDataCalories().then(function (data) {
      var calories = data['activities-calories'][0]['value'];
      caloriesRaw.innerText = calories.toString() + ' cal';
      caloriesInt = Number.parseInt(calories, 10);

      // <% if cross_product2 < 100 %>

      progressBarsCal.forEach(function (progressBar) {
        var goalValueCal = Number.parseInt(progressBar.attributes['target_value'].value, 10);
        var crossProductCal = caloriesInt * 100 / goalValueCal;
        var advancementCal = crossProductCal.toString() + "%";
        progressBar.style['width'] = advancementCal;
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

      progressBarsStep.forEach(function (progressBar) {
        var goalValueStep = Number.parseInt(progressBar.attributes['target_value'].value, 10);
        var crossProductStep = stepsInt * 100 / goalValueStep;
        var advancementStep = crossProductStep.toString() + "%";
        progressBar.style['width'] = advancementStep;
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

      progressBarsDist.forEach(function (progressBar) {
        var goalValueDist = Number.parseInt(progressBar.attributes['target_value'].value, 10);
        var crossProductDist = distanceFloat * 100 / goalValueDist;
        var advancementDist = crossProductDist.toString() + "%";
        progressBar.style['width'] = advancementDist;

        if (crossProductDist >= 100) {
          progressBar.classList.remove("progress-bar-striped");
          progressBar.classList.remove("progress-bar-animated");
        }
      });
    });
  };
});

/***/ })

/******/ });
//# sourceMappingURL=continuous_refresh-ea5d8ec17f10d5671305.js.map