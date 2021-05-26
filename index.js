var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
Plotly.d3.json('https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json', function(figure){

    var trace1 = {
      x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
      name: '',
      colorscale: figure.data[0].colorscale,
      type: 'surface',
      showscale: false
    }
    var trace2 = {
      x:figure.data[1].x, y:figure.data[1].y, z:figure.data[1].z,
      name: '',
      colorscale: figure.data[1].colorscale,
      type: 'surface',
      showscale: false
    }
    var trace3 = {
      x:figure.data[2].x, y:figure.data[2].y, z:figure.data[2].z,
      colorscale: figure.data[2].colorscale,
      type: 'surface',
      showscale: false
    }
    var trace4 = {
      x:figure.data[3].x, y:figure.data[3].y, z:figure.data[3].z,
      colorscale: figure.data[3].colorscale,
      type: 'surface',
      showscale: false
    }
    var trace5 = {
      x:figure.data[4].x, y:figure.data[4].y, z:figure.data[4].z,
      colorscale: figure.data[4].colorscale,
      type: 'surface',
      showscale: false
    }
    var trace6 = {
      x:figure.data[5].x, y:figure.data[5].y, z:figure.data[5].z,
      colorscale: figure.data[5].colorscale,
      type: 'surface',
      showscale: false
    }
    var trace7 = {
      x:figure.data[6].x, y:figure.data[6].y, z:figure.data[6].z,
      name: '',
      colorscale: figure.data[6].colorscale,
      type: 'surface',
      showscale: false
    }
    
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];
  
    var layout = {
      title: 'Ribbon Plot',
      showlegend: false,
      autosize: true,
      width: 600,
      height: 600,
      scene: {
        xaxis: {title: 'Sample #'},
        yaxis: {title: 'Wavelength'},
        zaxis: {title: 'OD'}
      }
    };
    Plotly.newPlot('myDiv', data, layout);
});
