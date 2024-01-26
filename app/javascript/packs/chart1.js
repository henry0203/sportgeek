var ctx = document.getElementById("myChart").getContext('2d');
var ctx1 = document.getElementById("myChart1").getContext('2d');
// var ctx2 = document.getElementById("doughnut").getContext('2d');
// var ctx3 = document.getElementById("doughnut1").getContext('2d');
// var ctx4 = document.getElementById("doughnut2").getContext('2d');
// var ctx5 = document.getElementById("doughnut3").getContext('2d');
// var ctx6 = document.getElementById("doughnut4").getContext('2d');
// var ctx7 = document.getElementById("doughnut5").getContext('2d');
// var ctx8 = document.getElementById("doughnut6").getContext('2d');
const data = {
        labels: gon.step_date,
        datasets: [{
            label: 'Steps',
            data: gon.step,
            backgroundColor: 'rgba(255, 0, 0, 0.36)',
            borderColor: 'rgba(255, 0, 0, 0.8)',
            hoverBackgroundColor: '#003592',
            borderWidth: 1
        },
        {
            label: 'Distance walked [km]',
            data: gon.distance,
            backgroundColor: 'rgba(0, 255, 0, 0.36)',
            borderColor: 'rgba(0, 255, 0, 0.8)',
            hoverBackgroundColor: '#003592',
            borderWidth: 1
        },
        {
            label: 'Calories burned [cal]',
            data: gon.calorie,
            backgroundColor: 'rgba(0, 0, 255, 0.36)',
            borderColor: 'rgba(0, 0, 255, 0.8)',
            hoverBackgroundColor: '#003592',
            borderWidth: 1
        }],
    }

const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    // OR //
                    beginAtZero: true,   // minimum value will be 0.
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
            }],
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                boxWidth: 15,
                fontFamily: "'Source Sans Pro', sans-serif",
            }
        },
        label: {
        font: {
            family: "Source sans Pro"
        }
    }
    }

const data_line = {
        labels: ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"],
        datasets: [{
            label: 'Weight [kg]',
            data: [70, 71, 70, 70, 71, 71, 72],
            backgroundColor: 'rgba(255, 0, 0, 0.36)',
            borderColor: 'rgba(255, 0, 0, 0.8)',
            hoverBackgroundColor: false,
            borderWidth: 1,
            fill: false
        },
        {
            label: 'B.P.M [per min]',
            data: [60, 65, 60, 60, 65, 65, 70],
            backgroundColor: 'rgba(0, 255, 0, 0.36)',
            borderColor: 'rgba(0, 255, 0, 0.8)',
            hoverBackgroundColor: false,
            borderWidth: 1,
            fill: false
        }]
    }

const options_line = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                display: true,

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
            }],
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
            //text: 'Your activity in the last 7 days',
            position: "left"
        }
    }

const data_function = (doughnut_element) => { return {
        labels: [
                'normal calories',
                'activity calories',
            ],
        datasets: [{
            label: ['Calories burned','Calories burned during an active period'],
            data: doughnut_element,
            backgroundColor: ['#007bffb3', '#28a745b3', '#dc3545b3'],
            hoverBackgroundColor: ['#007bff', '#28a745', '#dc3545'],
            borderColor: ['#007bff', '#28a745', '#dc3545'],
            borderWidth: 1,
            fill: false
        }]
        }; };

const options_function = (date_element) => { return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    // OR //
                    beginAtZero: true,   // minimum value will be 0.
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
            }],
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
    type: 'horizontalBar',
    data: data,
    options: options
});

var myChart1 = new Chart(ctx1, {
 type: 'line',
 data: data_line,
 options: options_line
});
//
// var myChart = new Chart(ctx2, {
    // type: 'doughnut',
    // data: data_function(gon.doughnut[0]),
    // options: options_function(gon.step_date[0])
// });
//
// var myChart = new Chart(ctx3, {
    // type: 'doughnut',
    // data: data_function(gon.doughnut[1]),
    // options: options_function(gon.step_date[1])
// });
//
// var myChart = new Chart(ctx4, {
    // type: 'doughnut',
    // data: data_function(gon.doughnut[2]),
    // options: options_function(gon.step_date[2])
// });
//
// var myChart = new Chart(ctx5, {
    // type: 'doughnut',
    // data: data_function(gon.doughnut[3]),
    // options: options_function(gon.step_date[3])
// });
// var myChart = new Chart(ctx6, {
    // type: 'doughnut',
    // data: data_function(gon.doughnut[4]),
    // options: options_function(gon.step_date[4])
// });
//
// var myChart = new Chart(ctx7, {
    // type: 'doughnut',
    // data: data_function(gon.doughnut[5]),
    // options: options_function(gon.step_date[5])
// });
//
// var myChart = new Chart(ctx8, {
    // type: 'doughnut',
    // data: data_function(gon.doughnut[6]),
    // options: options_function(gon.step_date[6])
// });
