(function (window) {
  var names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
  for (var i in names){
  var fll = (names[i].charAt(0)).toLowerCase();
  var flu = names[i].charAt(0);

  if (flu == 'J' || fll == 'j'){
  window.byeSpeaker.speak(names[i]);
  }
  else{
  window.helloSpeaker.speak(names[i]);
  }
  }
})(window);
