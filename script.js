
(function () {
  try {
    emailjs.init("sGsq5EDISOiDizqFT");
    console.log("EmailJS initialized successfully");
  } catch (error) {
    console.error("EmailJS initialization failed", error);
  }
})();

// Updated sendEmail function to handle EmailJS email sending
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  // Check if all fields are filled
  if (!name || !mobile || !email) {
    showGameAlert('error', 'Please fill in all fields.');
    return;
  }

  // EmailJS parameters
  const templateParams = {
    name: name,
    mobile: mobile,
    email: email,
    message :message
  };

  // Send the email
  emailjs.send("service_t6iubxi", "template_hxw0ya5", templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      showGameAlert('success', 'Your details have been sent successfully!');
    })
    .catch(function (error) {
      console.error('FAILED...', error);
      showGameAlert('error', 'Oops, something went wrong! Please try again.');
    });
}

// Optional: Gaming-style alert function
function showGameAlert(type, message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'game-alert';
  alertBox.innerHTML = `
      <img src='./images/trophy.png' alt='Trophy' class='coin-spin'>
      <h2>${type === 'success' ? 'MISSION ACCOMPLISHED!' : 'ERROR'}</h2>
      <p>${message}</p>
      <button onclick="this.parentElement.style.display='none'" class='bg-yellow-500 text-black pixelfont py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300'>CONTINUE</button>
  `;
  document.body.appendChild(alertBox);
  alertBox.style.display = 'block';
}


// JavaScript code for mute/unmute functionality
function toggleVolume() {
  const audio = document.getElementById('background-music');
  const volumeUpIcon = document.getElementById('volume-up');
  const volumeMuteIcon = document.getElementById('volume-mute');

  // Check if the audio is currently playing sound
  if (audio.muted) {
      // Unmute the audio and show the "volume-up" icon
      audio.muted = false;
      volumeUpIcon.classList.remove('hidden');
      volumeMuteIcon.classList.add('hidden');
  } else {
      // Mute the audio and show the "volume-mute" icon
      audio.muted = true;
      volumeUpIcon.classList.add('hidden');
      volumeMuteIcon.classList.remove('hidden');
  }
}

// Add sound file location
const enterSound = new Audio('./audio/mousehover.mp3'); // Replace with your sound file path
const cloudSound = new Audio('./audio/transition.mp3'); // Replace with your

document.getElementById('enterButton').addEventListener('click', function () {
    // Play the sound
    enterSound.play();
    cloudSound.play(); // Play the sound for cloud transitions

    // Trigger cloud animations
    const cloudLeft = document.getElementById('cloudLeft');
    const cloudRight = document.getElementById('cloudRight');
    cloudLeft.style.animation = "slideInLeft 3.5s forwards";
    cloudRight.style.animation = "slideInRight 3.5s forwards";

    // Hide the button after it's clicked
    this.style.display = 'none';

    // Wait for the cloud animation to finish before transitioning
    setTimeout(() => {
        // Start fade-out of the clouds
        document.getElementById('enterPage').classList.add('fade-out');

        // Wait for fade-out animation to finish and hide the "enterPage"
        setTimeout(() => {
            document.getElementById('enterPage').style.display = 'none';
            // Show the main section
            document.querySelector('.main').classList.remove('hidden');
        }, 1000); // Wait for fade-out to finish
    }, 2500); // Wait for cloud animations to complete
}); 


// Gsap Applying..............................................

// let tl = gsap.timeline();
// tl.from(".nav", {
  //  duration: 1,
    // opacity: 1,
    //  y: -100,
    //  ease: "power1.inOut" 
  // });
// 
  // tl.from(".navpart2", {
    // duration: 1,
    //  opacity: 0,
      // y: -50,
      // ease: "power1.inOut" 
  //  });
// 
  //  gsap.from(".Icons", {
    // duration: 1.5,
    //  opacity: 0,
      // x: -80,
      // stagger:0.1,
      // ease: "power1.inOut" 
  //  });
// 

