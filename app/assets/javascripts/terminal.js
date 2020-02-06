$(function(){
  $('.content__type__box').on('click', function() {
    if ($(this).prop('checked')){
      // 一旦全てをクリアして再チェックする
      $('.content__type__box').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});


$(function(){
  $("#button").on("click",function(){
    var contentMaskDice = document.getElementById("content__mask__dice").value;
    var contentNumberDice = document.getElementById("content__number__dice").value;
    sum = 0
      for (var i = 1; i <= contentNumberDice ;i++ ){
        var randnum = Math.floor( Math.random() * contentMaskDice + 1);
        sum = randnum + sum
      }
    var Sum = sum

  var contentUnitText1 = document.getElementById("content__unit__text1").value;
  var contentUnitText2 = document.getElementById("content__unit__text2").value;
  var contentUnitText3 = document.getElementById("content__unit__text3").value;
  var contentUnitText4 = document.getElementById("content__unit__text4").value;
  var contentUnitText5 = document.getElementById("content__unit__text5").value;
  var contentUnitText = [contentUnitText1 , contentUnitText2 , contentUnitText3 , contentUnitText4 , contentUnitText5]
  var ContentUnitText = contentUnitText.filter(v => v)
  var randtext = contentUnitText[Math.floor( Math.random() * ContentUnitText.length)];

  // 取得した値を別の入力フォームに表示
  var resultForm = document.getElementById("resultForm");
  resultForm.value = Sum + randtext
  });
});
