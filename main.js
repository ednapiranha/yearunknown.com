(function () {
  var videos = ['ivjWJjnPWzg', '5mt5F67tVXe', '57J7g5Xhzz5', 'iE5ZljmbVea', 'i25eF1eqHYt'];

  var video = videos[Math.floor(Math.random() * (videos.length - 1))];

  var vidFrame = document.querySelector('iframe');

  vidFrame.src = "https://vine.co/v/" + video + "/embed/simple";
})();