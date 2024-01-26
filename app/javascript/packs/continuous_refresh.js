
const stepsRaw = document.getElementById('steps_raw');
const distanceRaw = document.getElementById('distance_raw');
const caloriesRaw = document.getElementById('calories_raw');

const progressBars = document.querySelectorAll('.pggd');
const progressBarsCal = document.querySelectorAll('.caloriesburnedcal');
const progressBarsStep = document.querySelectorAll('.steps');
const progressBarsDist = document.querySelectorAll('.distancewalkedkm');

const percentageIndicGoal = document.getElementById('percentage-goal');
const percentageIndicGoalCal = document.querySelectorAll('.caloriesburnedcalp');
const percentageIndicGoalStep = document.querySelectorAll('.stepsp');
const percentageIndicGoalDist = document.querySelectorAll('.distancewalkedkmp');

const progressBarGlobal = document.querySelector('.bg-success');

const button = document.querySelector('.goal-continuous');

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

const authorization = 'Bearer' + ' ' + gon.token;

var myHeaders = new Headers();

myHeaders.append("Authorization", authorization);

var myInit = { method: 'GET',
               headers: myHeaders};


function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

var refreshedData = {};


const refreshDataCalories = () => {
  return fetch(`https://api.fitbit.com/1/user/-/activities/calories/date/${gon.today}/1d.json`, myInit)
    .then(response => response.json())
    .then((data) => {
      return data;
    })
};

const refreshDataSteps = () => {
    return fetch(`https://api.fitbit.com/1/user/-/activities/steps/date/${gon.today}/1d.json`, myInit)
    .then(response => response.json())
    .then((data) => {
      return data;
    })
};

const refreshDataDistance = () => {
  return fetch(`https://api.fitbit.com/1/user/-/activities/distance/date/${gon.today}/1d.json`, myInit)
    .then(response => response.json())
    .then((data) => {
      return data;
    })
};

function percentageGlobalGoal() {
  var x = 0;
  var y = 0;
  progressBars.forEach((e) => {
    y += 1;
    a = Number.parseInt(e.style['width'].split('%').join(), 10);
    if (a <= 100) {
      x += a;
    } else {
      x += 100;
    }
  });
  const yo = (x/y).toString() + '%';
  progressBarGlobal.style['width'] = yo;
  percentageIndicGoal.innerText = (Number.parseInt((x/y), 10)).toString() + '%';
}

function continuousDownload() {
  console.log('YO');
  refreshDataCalories().then((data) => {
    const calories = data['activities-calories'][0]['value'];
    caloriesRaw.innerText = calories.toString() + ' cal';
    caloriesInt = Number.parseInt(calories, 10);


    progressBarsCal.forEach((progressBar, index) => {
      const goalValueCal = Number.parseInt(progressBar.attributes['target_value'].value, 10);
      const crossProductCal = (caloriesInt * 100) / goalValueCal;
      const advancementCal = crossProductCal.toString() + "%";
      progressBar.style['width'] = advancementCal;
      percentageIndicGoalCal[index].innerText = (Number.parseInt(crossProductCal, 10)).toString() + "%";
      percentageGlobalGoal()
      if (crossProductCal >= 100) {
        progressBar.classList.remove("progress-bar-striped");
        progressBar.classList.remove("progress-bar-animated");
      }
    })
  });

  refreshDataSteps().then((data) => {
    const steps = data['activities-steps'][0]['value'];
    stepsRaw.innerText = steps.toString();
    stepsInt = Number.parseInt(steps, 10);


    progressBarsStep.forEach((progressBar, index) => {
      const goalValueStep = Number.parseInt(progressBar.attributes['target_value'].value, 10);
      const crossProductStep = (stepsInt * 100) / goalValueStep;
      const advancementStep = crossProductStep.toString() + "%";
      progressBar.style['width'] = advancementStep;
      percentageIndicGoalStep[index].innerText = (Number.parseInt(crossProductStep, 10)).toString() + "%";
      percentageGlobalGoal()
      if (crossProductStep >= 100) {
        progressBar.classList.remove("progress-bar-striped");
        progressBar.classList.remove("progress-bar-animated");
      }
    })
  });

  refreshDataDistance().then((data) => {
    distanceRaw.innerText = (Math.round(Number.parseFloat(data['activities-distance'][0]['value']) * 10) / 10).toString() + ' km';
    const distance = data['activities-distance'][0]['value'];
    distanceFloat = Math.round(Number.parseFloat(data['activities-distance'][0]['value']) * 10) / 10;
    distanceRaw.innerText = distanceFloat.toString() + ' km';

    progressBarsDist.forEach((progressBar, index) => {
      const goalValueDist = Number.parseInt(progressBar.attributes['target_value'].value, 10);
      const crossProductDist = (distanceFloat * 100) / goalValueDist;
      const advancementDist = crossProductDist.toString() + "%";
      progressBar.style['width'] = advancementDist;
      percentageIndicGoalDist[index].innerText = (Number.parseInt(crossProductDist, 10)).toString() + "%";
      percentageGlobalGoal()
      if (crossProductDist >= 100) {
        progressBar.classList.remove("progress-bar-striped");
        progressBar.classList.remove("progress-bar-animated");
      }
    })
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

button.addEventListener('click', (event) => {
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
















