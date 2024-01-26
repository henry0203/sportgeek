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
console.log(gon.step);
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: gon.step_date,
        datasets: [{
            label: 'steps',
            data: gon.step,
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            borderWidth: 1
        }, {
            label: 'distance',
            data: gon.distance,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'calories',
            data: gon.calorie,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    },
    options: {
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
                boxWidth: 10,
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        },
        title: {
            display: true,
            fontFamily: "'Source Sans Pro', sans-serif",
            text: 'Your activity in the last 7 days'
        },
        label: {
            font: {
                family: "Source sans Pro"
            }
        }
    }
});

var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: gon.step_date,
        datasets: [{
            label: 'steps',
            data: gon.step,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'distance',
            data: gon.distance,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'calories',
            data: gon.calorie,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
                boxWidth: 10,
                fontFamily: "'Source Sans Pro', sans-serif"
            }
        },
        title: {
            display: true,
            fontFamily: "'Source Sans Pro', sans-serif",
            text: 'Your activity in the last 7 days'
        }
    }
});
var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['steps', 'distance', 'calories'],
        datasets: [{
            label: 'steps',
            data: gon.doughnut[0],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
            fontFamily: "'Source Sans Pro', sans-serif",
            text: gon.step_date[0]
        }
    }
});
var myChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['steps', 'distance', 'calories'],
        datasets: [{
            label: 'steps',
            data: gon.doughnut[1],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
            fontFamily: "'Source Sans Pro', sans-serif",
            text: gon.step_date[1]
        }
    }
});
var myChart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['steps', 'distance', 'calories'],
        datasets: [{
            data: gon.doughnut[2],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
            fontFamily: "'Source Sans Pro', sans-serif",
            text: gon.step_date[2]
        }
    }
});
var myChart = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ['steps', 'distance', 'calories'],
        datasets: [{
            data: gon.doughnut[3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
            fontFamily: "'Source Sans Pro', sans-serif",
            text: gon.step_date[3]
        }
    }
});
var myChart = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: ['steps', 'distance', 'calories'],
        datasets: [{
            data: gon.doughnut[4],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
            fontFamily: "'Source Sans Pro', sans-serif",
            text: gon.step_date[4]
        }
    }
});
var myChart = new Chart(ctx7, {
    type: 'doughnut',
    data: {
        labels: ['steps', 'distance', 'calories'],
        datasets: [{
            data: gon.doughnut[5],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
            fontFamily: "'Source Sans Pro', sans-serif",
            text: gon.step_date[5]
        }
    }
});
var myChart = new Chart(ctx8, {
    type: 'doughnut',
    data: {
        labels: ['steps', 'distance', 'calories'],
        datasets: [{
            data: gon.doughnut[6],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
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
            fontFamily: "'Source Sans Pro', sans-serif",
            text: gon.step_date[6]
        }
    }
});

/***/ })

/******/ });
//# sourceMappingURL=chart1-0962c1663eb78001fc3c.js.map