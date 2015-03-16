// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/
var spokane='99203';
$('#getZip').click(function(){
  var zip = $('#zip').val();

  console.log(zip);

  // 2. _simpleWeather()_ object
  $.simpleWeather({
    location: zip, // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {

      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      //get and store state
      var state= weather.region;

      var hiLow="H:"+weather.high+" "+"L:"+weather.low;

      var text=weather.text;

      var cityState=weather.city+","+weather.region;

      var code=weather.todayCode;
      
      console.log(state);
      
      var thumb = weather.thumbnail;
      
      console.log(thumb);
      
      // Output to hooks in HTML
      $('.temp').text(temp+"°F");
      $('.city').text(cityState);
      $('.hiLow').text(hiLow);
      $('.text').text(text);
      $('.thumb img').attr('src', thumb);
            
      if (weather.code>29 && weather.code<36) {
        
        $("#weather").css( "background-color", "#1fc122" );
        
      }

      else {
        $("#weather").css( "background-color", "#f43e3e" );
      }


      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });
});

