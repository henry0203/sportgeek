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
/******/ 	return __webpack_require__(__webpack_require__.s = 191);
/******/ })
/************************************************************************/
/******/ ({

/***/ 191:
/*!****************************************!*\
  !*** ./app/javascript/packs/chart1.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var ctx = document.getElementById("myChart").getContext('2d');
var ctx1 = document.getElementById("myChart1").getContext('2d');
var ctx2 = document.getElementById("doughnut").getContext('2d');
var ctx3 = document.getElementById("doughnut1").getContext('2d');
var ctx4 = document.getElementById("doughnut2").getContext('2d');
var ctx5 = document.getElementById("doughnut3").getContext('2d');
var ctx6 = document.getElementById("doughnut4").getContext('2d');
var ctx7 = document.getElementById("doughnut5").getContext('2d');
var ctx8 = document.getElementById("doughnut6").getContext('2d');
var data = {
    labels: gon.step_date,
    datasets: [{
        label: 'steps',
        data: gon.step,
        backgroundColor: '#007bffb3',
        hoverBackgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1
    }, {
        label: 'distance',
        data: gon.distance,
        backgroundColor: '#28a745b3',
        overBackgroundColor: '#28a745',
        borderColor: '#28a745',
        borderWidth: 1
    }, {
        label: 'calories',
        data: gon.calorie,
        backgroundColor: '#dc3545b3',
        overBackgroundColor: '#dc3545',
        borderColor: '#dc3545',
        borderWidth: 1
    }]
};

var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true, // minimum value will be 0.
                suggestedMax: 10
            },
            gridLines: {
                display: false
            },
            pointLabels: {
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            },
            pointLabels: {
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        }]
    },
    legend: {
        labels: {
            // This more specific font property overrides the global property
            boxWidth: 11,
            fontFamily: "'Source Sans Pro', sans-serif"
        }
    },
    title: {
        display: true,
        fontSize: 18,
        fontColor: "black",
        fontFamily: "'Source Sans Pro', sans-serif",
        text: 'Your activity in the last 7 days',
        position: "left"
    },
    label: {
        font: {
            family: "Source sans Pro"
        }
    }
};

var data_line = {
    labels: gon.step_date,
    datasets: [{
        label: 'steps',
        data: gon.step,
        backgroundColor: '#007bffb3',
        overBackgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        fill: false
    }, {
        label: 'distance',
        data: gon.distance,
        backgroundColor: '#28a745b3',
        overBackgroundColor: '#28a745',
        borderColor: '#28a745',
        borderWidth: 1,
        fill: false
    }, {
        label: 'calories',
        data: gon.calorie,
        backgroundColor: '#dc3545b3',
        overBackgroundColor: '#dc3545',
        borderColor: '#dc3545',
        borderWidth: 1,
        fill: false
    }]
};

var options_line = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true, // minimum value will be 0.
                suggestedMax: 10
            },
            gridLines: {
                display: false
            },
            pointLabels: {
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            },
            pointLabels: {
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        }]
    },
    legend: {
        labels: {
            // This more specific font property overrides the global property
            boxWidth: 11,
            fontFamily: "'Source Sans Pro', sans-serif"
        }
    },
    title: {
        display: true,
        fontSize: 18,
        fontColor: "black",
        fontFamily: "'Source Sans Pro', sans-serif",
        text: 'Your activity in the last 7 days',
        position: "left"
    }
};

var data_function = function data_function(doughnut_element) {
    return {
        labels: ['normal calories', 'activity calories'],
        datasets: [{
            label: ['normal calories', 'activity calories'],
            data: doughnut_element,
            backgroundColor: ['#007bffb3', '#28a745b3', '#dc3545b3'],
            hoverBackgroundColor: ['#007bff', '#28a745', '#dc3545'],
            borderColor: ['#007bff', '#28a745', '#dc3545'],
            borderWidth: 1,
            fill: false
        }]
    };
};

var options_function = function options_function(date_element) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                    // OR //
                    beginAtZero: true, // minimum value will be 0.
                    suggestedMax: 10
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                display: false,
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                fontFamily: "'Source Sans Pro', sans-serif",
                boxWidth: 20
            }
        },
        title: {
            display: true,
            fontSize: 16,
            fontFamily: "'Source Sans Pro', sans-serif",
            text: date_element
        }
    };
};

var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: data_line,
    options: options_line
});

var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: data_function(gon.doughnut[0]),
    options: options_function(gon.step_date[0])
});

var myChart = new Chart(ctx3, {
    type: 'doughnut',
    data: data_function(gon.doughnut[1]),
    options: options_function(gon.step_date[1])
});

var myChart = new Chart(ctx4, {
    type: 'doughnut',
    data: data_function(gon.doughnut[2]),
    options: options_function(gon.step_date[2])
});

var myChart = new Chart(ctx5, {
    type: 'doughnut',
    data: data_function(gon.doughnut[3]),
    options: options_function(gon.step_date[3])
});
var myChart = new Chart(ctx6, {
    type: 'doughnut',
    data: data_function(gon.doughnut[4]),
    options: options_function(gon.step_date[4])
});

var myChart = new Chart(ctx7, {
    type: 'doughnut',
    data: data_function(gon.doughnut[5]),
    options: options_function(gon.step_date[5])
});

var myChart = new Chart(ctx8, {
    type: 'doughnut',
    data: data_function(gon.doughnut[6]),
    options: options_function(gon.step_date[6])
});

/***/ })

/******/ });
//# sourceMappingURL=chart1-d802b5c4bd4f207a7eca.js.map