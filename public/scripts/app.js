/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function() {

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

const $createTweetElement = function (tweetData) {
  let datetime = tweetData.created_at; // anything
  let date = new Date(datetime);
  let options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
    };

  let result = date.toLocaleDateString('en', options);
    
    return `<article class="tweetBox tweetBox1">
        <header>
          <div class="nameAndPic">
             <img src=${tweetData.user.avatars}>
             <span class="name">${tweetData.user.name}</span>
           </div>
           <div class="userHandle tweetBox:hover.userHandle"> ${tweetData.user.handle}</div>
          
         </header>
         <body>
           <div>${escape(tweetData.content.text)}</div>
         </body>
        <footer>
          <div class="date">${result}</div>
         <div class="icons"> ❤️</div>
      
         </footer>
        </article>`
        
  }

const renderTweets = function(data) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of data) {
   let htmlTweet = $createTweetElement(tweet);
   $('.tweetContainer').prepend(htmlTweet);
  }
}

// submits new tweet form to server

  
  $('form').submit(function (e) {
    e.preventDefault();
    
    // console.log($( this ).serialize());
    // console.log('text input value: ',$(".textInput").val());
    let textInput = $(".textInput").val();
    let characters = textInput.length;
    let data = $(this).serialize();

    if(textInput === "") {
      
      $(".emptyTweet").slideToggle("slow", "linear");
      return;
      
    } else if (characters > 140) {
      $(".tooLongTweet").slideToggle("slow", "linear");
    }
    $.ajax("/tweets/", { method: 'POST', data})
    .then(function () {
      $loadTweets();
      $('.textInput').val('');
    }) 
  });



const $loadTweets = function() {
  const getTweets = $('.article'); 
    $('.tweetContainer').empty();
    $.ajax('/tweets', { method: 'GET' })
    .then(function (data) {
      // $('.container').load("/tweets/");
      renderTweets(data);
      
    });
};
$loadTweets()
//renderTweets(data)
 



// tweet dropdown
$(".birdieButton").click((e) => {
  e.preventDefault()
  console.log('button is working');
  // alert('button is working');
  $(".textInput").slideToggle("slow", "linear");
});

//error disapear
$()
}); 
