(function (window) {
  var names = ["John","Yaakov","Rishabh","Dave","Morris","Jack","Jill","jonah"];
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
