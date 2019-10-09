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


const $createTweetElement = function (tweetData) {
  
    
    return `<article class="tweetBox tweetBox1">
        <header>
          <div class="nameAndPic">
             <img src=${tweetData.user.avatars}>
             <span class="name">${tweetData.user.name}</span>
           </div>
           <div class="userHandle tweetBox:hover.userHandle"> ${tweetData.user.handle}</div>
          
         </header>
         <body>
           <div>${tweetData.content.text}</div>
         </body>
        <footer>
          <div class="date">10 days ago</div>
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
   $('.container').append(htmlTweet);
  }
}
// console.log(renderTweets(data));
// console.log($createTweetElement(data))


// console.log(inputData);
$(function() {
  const $button = $('.button1');
  
  $('form').submit(function (e) {
    e.preventDefault();
    // console.log($( this ).serialize());
    // console.log('text input value: ',$(".textInput").val());
    let textInput = $(".textInput").val();
    let data = $(this).serialize();
    
    $.ajax("/tweets/", { method: 'POST' , data})
    .then(function () {
      console.log('Success, tweet posted!: ', textInput);
        
      
    });
  });
});

// example BELOW
// $(function() {
//   const $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax('more-posts.html', { method: 'GET' })
//     .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//     });
//   });
// });


