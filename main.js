
console.log("Sanity Check: JS is working!");

$(document).ready(function(){



   var i = 2;
   var j = 2;

   document.onkeydown = function() {

    // pup A
    switch (window.event.keyCode) {
      case 90: //key "z"
          var pupALocation = "#a"+[i]

          console.log("pupALocation is " + i);

          $(pupALocation).append(`<img class ="pupAImage" src="images/running-pup.gif-c200" width= 40px>`);

          i++; //to move pup forward
          var o = i - 2; //to delete prior pup image

            console.log(pupALocation);
            console.log("pupALocation is now at " + i);
            console.log("pupALocationPrior is " + o);

          var pupALocationPrior ="#a"+[o]+" img.pupAImage"; //creates my selector that increases with o
            console.log(pupALocationPrior);
          $(pupALocationPrior).remove();

          if($("#a14 img.pupAImage").length > 0){
          alert("Pup A is the winner!");
          $(pupALocation).append(`<img class ="pupAImage" src="images/ready-pup.png" width= 40px>`); //standing winning puppy
          $("#a14 img.pupAImage:first-child").remove(); //removing running puppy after winning
          }
    }

    // pup A
    switch (window.event.keyCode) {
      case 191: //key "/"
          var pupBLocation = "#b"+[j];

          console.log("pupBLocation is " + j);

          $(pupBLocation).append(`<img class ="pupBImage" src="images/running-pup.gif-c200" width= 40px>`);

          j++; //to move pup forward
          var k = j - 2; //to delete prior pup image

            console.log(pupBLocation);
            console.log("pupBLocation is now at " + j);
            console.log("pupBLocationPrior is " + k);

          var pupBLocationPrior ="#b"+[k]+" img.pupBImage"; //creates my selector that increases with k
            console.log(pupBLocationPrior);
          $(pupBLocationPrior).remove();

          //winner rule
          if($("#b14 img.pupBImage").length > 0){
          alert("Pup B is the winner!");
          $(pupBLocation).append(`<img class ="pupBImage" src="images/ready-pup.png" width= 40px>`); //standing winning puppy
          $("#b14 img.pupBImage:first-child").remove(); //removing running puppy after winning

          }
    }


  }; //ends onkeydown function







}); //end doc ready
