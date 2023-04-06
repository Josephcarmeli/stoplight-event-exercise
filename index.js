let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

//------------------------------------------------stopButton eventlisteners-------------------------------------------
stopButton.addEventListener("click", function() {
  if (stopLight.classList.contains("stop")) {
    // If the class "stop" is applied to stopLight element
    stopLight.classList.remove("stop");
    console.log("Red light off");
  } else {
    // If the class "stop" is not applied to stopLight element
    stopLight.classList.add("stop");
    console.log("Red light on");
  }
});

stopButton.addEventListener("mouseenter", function() {
  console.log('Entered ' + stopButton.textContent + ' button');
});

stopButton.addEventListener("mouseleave", function() {
  console.log('left ' + stopButton.textContent + ' button');
});
//------------------------------------------------stopButton eventlisteners-------------------------------------------


//------------------------------------------------slowButton eventlisteners-------------------------------------------
slowButton.addEventListener("click", function() {
  if (slowLight.classList.contains("slow")) {
    slowLight.classList.remove("slow");
    console.log("Yellow light off");
  } else {
    slowLight.classList.add("slow");
    console.log("Yellow light on");
  }
})

slowButton.addEventListener("mouseenter", function() {
  console.log('Entered ' + slowButton.textContent + ' button');
});

slowButton.addEventListener("mouseleave", function() {
  console.log('left ' + slowButton.textContent + ' button');
});
//------------------------------------------------stopButton eventlisteners-------------------------------------------

//------------------------------------------------goButton eventlisteners---------------------------------------------
goButton.addEventListener("click", function() {
  if (goLight.classList.contains("go")) {
    goLight.classList.remove("go");
    console.log("Green light off");
  } else {
    goLight.classList.add("go");
    console.log("Green light on");
  }
})

goButton.addEventListener("mouseenter", function() {
  console.log('Entered ' + goButton.textContent + ' button');
});

goButton.addEventListener("mouseleave", function() {
  console.log('left ' + goButton.textContent + ' button');
});
//------------------------------------------------goButton eventlisteners---------------------------------------------