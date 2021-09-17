/*Bar chart Nombre de cas positifs au COVID-19*/
const labels = ["11/08", "12/08", "13/08", "14/08", "15/08", "16/08", "17/08"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Cas de COVID-19",
      data: [3416, 3841, 3531, 4231, 4516, 3341, 3559],
      backgroundColor: [
        "rgba(251,46,68,0.84)"
      ],
      borderColor: [
        "rgb(197,0,42)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
      ],
      borderWidth: 0.25,
    },
  ],
};
const config1 = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
var myChart1 = new Chart(document.getElementById("myChart1"), config1);

/*Line chart Total des cas positifs de COVID-19*/
const labels2 = ["06/06", "24/06", "12/07", "30/7", "17/08"];
const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Cas de COVID-19",
      data: [376, 2234, 14776, 86063, 156186],
      fill: false,
      borderColor: "rgb(236,0,50)",
      backgroundColor: "rgb(236,0,50)",
      tension: 0.1,
    },
  ],
};
const config2 = {
  type: "line",
  data: data2,
};

var myChart2 = new Chart(document.getElementById("myChart2"), config2);

/*Horizontal Bar Chart Nombre de cas positifs par région*/
const labels3 = ["Binh Tan", "Binh Chanh", "District 8",
  "Thu Duc", "Binh Thanh", "Distric 7", "Distric 10",
  "Hoc Mon", "Distric 12", "Distric 4", "Distric 1",
  "Distric 3", "Tan Binh", "Go Vap", "Distric 11",
  "Tan Phu", "Distric 6", "Nha Be", "Distric 5", "Cu Chi",
  "Phu Nhuan", "Can Gio"
];
const data3 = {
  labels: labels3,
  datasets: [
    {
      axis: "y",
      label: "Cas de COVID-19",
      data: [13492, 12842, 12214, 9458, 8688, 8200,
        7849, 7799, 7614, 7569, 6884, 5914, 5904,
        5675, 5623, 5422, 5403, 5381, 4321, 3949, 1829, 734],
      fill: false,
      backgroundColor: [
        "rgba(251,46,68,0.84)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
      ],
      borderWidth: 1,
    },
  ],
};
const config3 = {
  type: "bar",
  data: data3,
  options: {
    indexAxis: "y",
  },
};
var myChart3 = new Chart(document.getElementById("myChart3"), config3);

$(document).ready(function () {
  $('.counter-value').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3500,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
});
