var ctx = document.getElementById("myChart2").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'steps',
            data: gon.calorie_bubble,
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
            ,
            borderColor: 'rgba(255,99,132,1)'
            ,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              ticks: {
                  beginAtZero:true
              }
            }]
        }
    }
});
