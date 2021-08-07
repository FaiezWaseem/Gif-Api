function copytext(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var resultCopy = document.execCommand("copy");
    document.body.removeChild(input);
    return resultCopy;
  }
  document.querySelector('#copy').onclick = () =>{
    copytext(`      //Create a function Like this

    var getData = function(url){
      fetch(url)
       .then(function(data) {
       return data.json()
        
        })
      .then(function(data) {
         //to get keys of object  

        var obkeys = Object.keys(data)
            for (const [key, value] of Object.entries(data)) {

                //Get the gif link  , title or upload date like this 
                //Utilize according to your need

            console.log(value.link , value.title , value.date)
              }
            })
       .catch (function(error) {
           //Catch Error
        alert(error)
        });
    }
    //Pass the api to the function

    getData("https://gifs-api-default-rtdb.firebaseio.com/code.json?print=pretty")`)
    alert('Copied')
  }
function card(ul , link , title , date){
    document.querySelector(ul).innerHTML +=`<div class="card">
    <img src="${link}" alt="could'nt Load" style="width:300px">
    <div class="container">
      <h4><b>${title}</b></h4> 
      <p>${date}</p> 
      <a href="${link}">Download!</a>
    </div>
  </div>`
}
var getData = function(url){
    fetch(url)
     .then(function(data) {
     return data.json()
      
      })
    .then(function(data) {
       //to get keys of object  

      var obkeys = Object.keys(data)
          for (const [key, value] of Object.entries(data)) {

              //Get the gif link  , title or upload date like this 
              //Utilize according to your need

         card('#ul',value.link , value.title , value.date)
            }
          })
     .catch (function(error) {
         //Catch Error
      alert(error)
      });
  }

  getData('https://gifs-api-default-rtdb.firebaseio.com/random.json?print=pretty')
  getData('https://gifs-api-default-rtdb.firebaseio.com/code.json?print=pretty')
  getData('https://gifs-api-default-rtdb.firebaseio.com/loading.json?print=pretty')
  getData('https://gifs-api-default-rtdb.firebaseio.com/web.json?print=pretty')


  const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}