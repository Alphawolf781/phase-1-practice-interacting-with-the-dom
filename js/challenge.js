document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    
    function incrementCounter() {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
    
    setInterval(incrementCounter, 1000);
  });
// 2. Manually Increment and Decrement the Counter
document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    
    plusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
    
    minusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  });
// 3. "Like" an Individual Number and Display Count
document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const heartButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    const likesCount = {};
  
    heartButton.addEventListener('click', function() {
      const currentCount = counter.innerText;
      if (!likesCount[currentCount]) {
        likesCount[currentCount] = 0;
      }
      likesCount[currentCount]++;
      
      const existingLike = document.getElementById(`like-${currentCount}`);
      if (existingLike) {
        existingLike.innerText = `${currentCount} has been liked ${likesCount[currentCount]} times`;
      } else {
        const newLike = document.createElement('li');
        newLike.setAttribute('id', `like-${currentCount}`);
        newLike.innerText = `${currentCount} has been liked ${likesCount[currentCount]} times`;
        likesList.appendChild(newLike);
      }
    });
  });
// 4. Pause and Resume the Counter
document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const pauseButton = document.getElementById('pause');
    const buttons = document.querySelectorAll('button');
    let isPaused = false;
    let intervalId = setInterval(incrementCounter, 1000);
    
    function incrementCounter() {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
    
    pauseButton.addEventListener('click', function() {
      if (!isPaused) {
        clearInterval(intervalId);
        pauseButton.innerText = 'resume';
        buttons.forEach(function(button) {
          if (button.id !== 'pause') {
            button.disabled = true;
          }
        });
      } else {
        intervalId = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause';
        buttons.forEach(function(button) {
          button.disabled = false;
        });
      }
      isPaused = !isPaused;
    });
  });
// 5. Leave Comments on Gameplay
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');
    
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const commentText = commentInput.value;
      const newComment = document.createElement('li');
      newComment.innerText = commentText;
      commentsList.appendChild(newComment);
      
      commentInput.value = '';
    });
  });
          