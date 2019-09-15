
 $( document ).ready(function() {
    console.log( "ready!" );

  var targetNumber = Math.floor(Math.random() * (102) +19);
  var gem1 = Math.floor(Math.random() * (12) + 1);
  var gem2 = Math.floor(Math.random() * (12) + 1);
  var gem3 = Math.floor(Math.random() * (12) + 1);
  var gem4 = Math.floor(Math.random() * (12) + 1);
  var numberOptions = [gem1, gem2, gem3, gem4];
  var counter = 0;
  var wins = 0;
  var losses = 0;


  $("#magicNumber").html("The Magic Number: " + targetNumber)





// $("#gem1").on("click", function(){
//     alert(gem1)
// })

// $("#gem2").on("click", function(){
//     alert(gem2)
// })

// $("#gem3").on("click", function(){
//     alert(gem3)
// })

// $("#gem4").on("click", function(){
//     alert(gem4)
// })
 
  
  
      $.each(numberOptions,function(i, value){
        $("#gem"+(i+1)).on("click", function(){
            counter+=value;
            $("#yourScore").html("Your score: " + counter)

            if (counter === targetNumber) {
                alert("You win!");
                wins++;
                $("#wins").html("Wins " + wins);
                reset();

              }
            
              else if (counter >= targetNumber) {
                alert("You lose!!");
                losses++;
                $("#losses").html("Losses " + losses);
                reset();
              }

            // alert(value)
            // console.log ($("#gem"+(i+1)))
            
        
              })
      })

      function reset(){
       
        gem1 = Math.floor(Math.random() * (12) + 1);
        gem2 = Math.floor(Math.random() * (12) + 1);
        gem3 = Math.floor(Math.random() * (12) + 1);
        gem4 = Math.floor(Math.random() * (12) + 1);
        counter = 0;
        targetNumber = Math.floor(Math.random() * (102) +19);
        $("#magicNumber").html("The Magic Number: " + targetNumber)
        $("#yourScore").html("Your score: " + counter)
      }

    
  
  
});