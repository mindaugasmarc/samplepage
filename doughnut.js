// DEFINING VARIABLES

document.addEventListener('DOMContentLoaded', function(){

var ctx = document.getElementById('myChart').getContext('2d');
var skl = document.getElementById('skill').getContext('2d');
var dtb = document.getElementById('database').getContext('2d');
var bck = document.getElementById('backend').getContext('2d');


//DEFINING CHARTS

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    data: {
    	datasets: [{
    		label: "HTML/CSS",
    		backgroundColor: ['rgb(48, 186, 231)', 'rgb(223, 232, 237)'],
    		data: [90, 10],
    	}],
    	

    },

    options: {
    	cutoutPercentage: 80,
    }

});

var chartjs = new Chart(skl, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: "JavaScript",
            backgroundColor: ['rgb(215, 70, 128)', 'rgb(223, 232, 237)'],
            data: [85, 15],
        }],
        

    },

    options: {
        cutoutPercentage: 80,
    }
});

var chartsql = new Chart(dtb, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: "SQL",
            backgroundColor: ['rgb(21, 199, 168)', 'rgb(223, 232, 237)'],
            data: [60, 40],
        }],
        

    },

    options: {
        cutoutPercentage: 80,
    }
});

var chartphp = new Chart(bck, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: "PHP",
            backgroundColor: ['rgb(235, 125, 75)', 'rgb(223, 232, 237)'],
            data: [50, 50],
        }],
        

    },

    options: {
        cutoutPercentage: 80,
    }
});

});