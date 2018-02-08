$(window).on('load', function() {
  var imgs = $('#carrusel > img');
  var len = imgs.length;

  var img = new Array();

  for (var i=0; i<len ; i++){
    var j = '#carrusel img:nth-child('+(i+1)+')';
     img[i] =  $(j);
  }

  function anim(i) {
    var j = (i+len)%len;
    img[j].animate({"opacity":"1"}, {
      duration: 5000,
      complete: function (){
        img[j].animate({"opacity":"0"},5000);
        anim(i+1);
      }
    });
  }

  anim(0);
});
