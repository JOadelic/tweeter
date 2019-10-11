// $(document).ready(function() {
  
  
//   let charactersRemaining = $(".counter").text();
//   $(".textInput").keyup( e => {
//     if ($(".counter").text() < 0) {
//       alert("You have exceeded you character limit!")
//     } else {
//       $(".counter").text(charactersRemaining - e.target.value.length);
//     }
//   });


// });

$(document).ready(function() {
  let charactersRemaining = $(".counter").text();
  // renderTweets(data);
  // let charactersRemainingInvalid = $(".counterInvalid").text();
  $(".textInput").on('keyup', (e) => {
    let characterCounter = e.target.value.length;
    console.log('textInput.length is...',characterCounter)
    // let counter = $(e)
    if ($(".emptyTweet") || $(".tweetTooLong")) {
      $(".emptyTweet").slideUp("slow", "linear");
    }

    if ((140 - characterCounter) < 0) {
      // alert("passed 0!");
      $(".counter").css( "color", "red") 
      $(".counter").text(charactersRemaining - characterCounter);
    } else if ((140 - characterCounter) >= 0) {
      $(".counter").css( "color", "#32988f")
      $(".counter").text(charactersRemaining - characterCounter);
    }
  });
});