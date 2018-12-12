// ナンバーセット
function Nstart() {
  'use strict';
  var random1 = Math.floor(Math.random() * 100);
  var random2 = Math.floor(Math.random() * 100);
  document.getElementById("num-1").innerHTML = random1;
  document.getElementById("num-2").innerHTML = random2;
};
// 乱数生成
// ID指定する

// 回答出力用
function Nanser() {
  var anser = parseInt('num-1')+parseInt('num-2');
  console.log(anser.innerHTML);
  document.getElementById('anser').innerHTML = anser;
};
// 回答出力用、コンソール入力用


