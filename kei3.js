var num1 = 0;
var num2 = 0;
// ナンバーセット
function numStart() {
  'use strict';
  var random1 = Math.floor(Math.random() * 100);
  var random2 = Math.floor(Math.random() * 100);
  document.getElementById("num1").innerHTML = random1;
  document.getElementById("num2").innerHTML = random2;

// 整数検知
  var stringCheck1 = isNaN(random1);
  var stringCheck2 = isNaN(random2);
  console.log("numStartの1個目",stringCheck1);
  console.log("numStartの2個目",stringCheck2);
// 整数検知　end


};
/*
乱数生成
ID指定する
 */


// 回答出力用

var total = function namAnswer() {
  var sum1 = document.getElementById("num1");
  var sum2 = document.getElementById("num2");

  total = parseInt(sum1) + parseInt(sujm2);
  console.log(total);
  document.getElementById("answer").innerHTML = total;
};
// 回答出力用、コンソール入力用