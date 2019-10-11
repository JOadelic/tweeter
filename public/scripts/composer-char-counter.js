$(document).ready(function() {
  let charactersRemaining = $(".counter").text();
  $(".textInput").on('keyup', (e) => {
    let characterCounter = e.target.value.length;
    console.log('textInput.length is...',characterCounter)
    
    if ($(".emptyTweet")) {
      $(".emptyTweet").slideUp("slow", "linear");
    } 

    if ((140 - characterCounter) < 0) {
      $(".counter").css( "color", "red") 
      $(".counter").text(charactersRemaining - characterCounter);
    } else if ((140 - characterCounter) >= 0) {
      $(".counter").css( "color", "#32988f")
      $(".counter").text(charactersRemaining - characterCounter);
    }
  });
});