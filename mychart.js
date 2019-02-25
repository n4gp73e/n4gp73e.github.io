// 2) CSVから２次元配列に変換
function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels = [], tmpData1 = [], tmpData2 = [], tmpData3 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
    tmpData2.push(data[row][2])
    tmpData3.push(data[row][3])
  };

  // 4)chart.jsで描画
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tmpLabels,
      datasets: [
        { label: "気温", data: tmpData1,type:'line',fill: false, backgroundColor: "red",
      pointRadius: 5,pointHoverRadius:8},
        { label: "湿度", data: tmpData2,type:'line',fill: false, backgroundColor: "blue",
        pointRadius: 5,pointHoverRadius:8},
        { label: "大気圧", data: tmpData3,border:"#000", backgroundColor: "#ff9"}
      ]
    },
        options: {
          scales: {
            yAxes: [
              {ticks:{beginAtZero: true, min:995,max:1020}}
            ]
          },
          title: {
            display:true, fontSize:18, text:'屋内：2018.12.26〜2019.2.23'
          }
        }
  });
}

function main() {
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  var filePath = 'get_sensor_data.csv';
  req.open("GET", filePath, true);
  req.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart(data);
  }
  req.send(null);
}

main();