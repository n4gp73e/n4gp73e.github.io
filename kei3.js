


// ナンバーセット
function Nstart() {
  'use strict';
  var random1 = Math.floor(Math.random() * 100);
  var random2 = Math.floor(Math.random() * 100);
  document.getElementById("num-1").innerHTML = random1;
  document.getElementById("num-2").innerHTML = random2;
  var stringCheck1 = isNaN(random1);
  var stringCheck2 = isNaN(random2);
  console.log("Nstartの1個目",stringCheck1);
  console.log("Nstartの2個目",stringCheck2);

};
/*
乱数生成
ID指定する
 */


// 回答出力用
function Nanswer() {
  var num1 = document.getElementById("num-1");
  var num2 = document.getElementById("num-2");

  total = parseInt(num1) + parseInt(num2);
  console.log(total);
  document.getElementById("answer").innerHTML = total;
};
// 回答出力用、コンソール入力用


