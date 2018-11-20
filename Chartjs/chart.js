var data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [{
      label: "Prédio 1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [30, 25, 28, 31, 26, 23]
    },
    {
      label: "Prédio 2",
      backgroundColor: "rgba(99,255,132,0.2)",
      borderColor: "rgba(99,255,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(99,255,132,0.4)",
      hoverBorderColor: "rgba(99,255,132,1)",
      data: [25, 30, 26, 29, 31, 20]
    }
  ]
};

var options = {
  title: {
    display: true,
    text: 'Gráfico das temperaturas no Primeiro semestre/2018',
    fontSize: 18
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        },
        ticks: {
          beginAtZero: true
        }
      }],
    xAxes: [{
        gridLines: {
          display: false
        }
      }]
  }
};
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 14;
Chart.Bar('chart', {
  options: options,
  data: data
});
