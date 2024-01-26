var ctx = document.getElementById("doughnutChart").getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [{
          data: [gon.minutes_sedentary, gon.minutes_lightly_active, gon.minutes_fairly_active, gon.minutes_very_active, gon.rest_of_the_day],
          backgroundColor: [
            'rgba(56, 56, 56, 0.8)',
            'rgba(0, 0, 255, 0.5)',
            'rgba(255, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)',
            'rgba(16, 16, 16, 0.04)'
            ],
          borderColor: [
            'rgba(16, 16, 16, 1)',
            'rgba(0, 0, 255, 0.0)',
            'rgba(255, 255, 0, 0.9)',
            'rgba(255, 0, 0, 0.9)',
            'rgba(16, 16, 16, 0.25)'
            ],
          hoverBackgroundColor: '#003592',
          borderWidth: 1

      }],
      labels: ['minutes sedentary', 'minutes lightly active', 'minutes fairly active', 'minutes very active', 'rest of the day']
    },
    options:  {
        legend: {
            position: 'left',
            labels: {
              boxWidth: 15,
              fontFamily: "'Source Sans Pro', sans-serif"
            }
          }
      }
});
