/* VARS */

let userData = [];
let userDataControl = [];
let isTyping = false;

const areaMessages = document.getElementById('area-messages');

const inputMessage = document.getElementById('message');
const sendMessage = document.getElementById('send');

/* TYPING BOT CONTROL */
function typingControl() {
  if (isTyping) {
    document.getElementById('typing').classList.remove('no-typing');
    document.getElementById('typing').classList.add('is-typing');
  } else {
    document.getElementById('typing').classList.remove('is-typing');
    document.getElementById('typing').classList.add('no-typing');
  }
}

/* WRITE */

inputMessage.addEventListener("input", _ => {
  if (inputMessage.value.length > 0) {
    sendMessage.style.background = '#63E2DB'
  } else {
    sendMessage.style.background = '#181E2A'
  }
});

inputMessage.addEventListener("keyup", event => {
  if (event.code === 'Enter') {
    event.preventDefault();
    getData();
  }
});

/* SCROLL */

function autoScroll() {
  const heightPage = document.body.scrollHeight;
  window.scrollTo(0, heightPage);
}

function scrollDiv() {
  areaMessages.scrollTo(0, 10000);
}

/* GET USER DATA */

function getData() {

  if (inputMessage.value != '' && inputMessage.value != undefined && inputMessage.value != null) {
    userData.push(inputMessage.value);
    userDataControl.push(inputMessage.value);
    inputMessage.value = '';
    sendMessage.style.background = '#181E2A'
    controlInteraction();
  }
}

/* CONFIG USER DATA */

function configData() {
  let levelAc = userData[5];
  let compare = levelAc.toUpperCase();
  switch (compare) {
    case 'None':
      userData[5] = 1.2;
      break;
    case 'Light':
      userData[5] = 1.375;
      break;
    case 'Moderate':
      userData[5] = 1.55;
      break;
    case 'Intense':
      userData[5] = 1.725;
      break;
  }
}

function loadData() {
  userName = userData[0];
  userGender = userData[1];
  userWeight = parseInt(userData[2]);
  userHeight = parseInt(userData[3]);
  userAge = parseInt(userData[4]);
  userActivity = userData[5];
  calcAll();
}

/* START INTERACTION */
function startInteraction() {

  setTimeout(function () {
    areaMessages.innerHTML += `<p class="bot-message">Hello, I'm Healthbot and I'm here to help you calculate your BMI, ideal weight and calorie expenditure! &#128170&#128526</p><br>`;
    isTyping = true;
    typingControl();
  }, 1000);

  setTimeout(function () {
    areaMessages.innerHTML += `<p class="bot-message">How can I call you?</p>`;
    isTyping = false;
    typingControl();
    autoScroll();
  }, 2000);

}

startInteraction();

/* CONTROL INTERACTION */

function controlInteraction() {

  /* USER NAME */
  if (userDataControl[0] != null) {
    areaMessages.innerHTML += `<p class="user-message">You can call me ${userData[0]}</p>`;
    userDataControl[0] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Right ${userData[0]}, I will need some information to be able to do the calculations.</p><br>`;
      scrollDiv();
    }, 3000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">What is your sex? To be more accurate in the calculations I need this information, please type"<span class="info">Male</span>" Or "<span class="info">Female</span>".</p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 6000);
  }

  /* USER GENDER */
  if (userDataControl[1] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[1]}</p>`;
    userDataControl[1] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Legal,How many kilos are you weighing? <span class="example">Example: 65</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 3000);
  }

  /* user WEIGHT */
  if (userDataControl[2] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[2]} Kg</p>`;
    userDataControl[2] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">And how tall are you in centimeters? <span class="example">Example: 170</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 3000);
  }

  /* USER HEIGHT */
  if (userDataControl[3] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[3]} cm</p>`;
    userDataControl[3] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Okay, not long now. How old are you? <span class="example">Example: 25</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 3000);
  }

  /* USER AGE */
  if (userDataControl[4] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[4]} Years</p>`;
    userDataControl[4] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Excellent! Lastly, I need to know your level of physical activity, so type one of the options below:</p><br>`;
      scrollDiv();
    }, 4000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">None, Light, Moderate, Intense</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 6000);
  }

  /* USER ACTIVITY */
  if (userDataControl[5] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[5]}</p>`;
    configData();
    userDataControl[5] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Perfect, I already have everything I need to calculate here.</p><br>`;
      loadData();
      scrollDiv();
    }, 3000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">But first, very important information, ${userName}:</p><br>`;
      scrollDiv();
    }, 5000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">The result I will show you <span class="info">are just averages obtained through formulas</span>, Therefore, you should not take it literally.</p><br>`;
      scrollDiv();
    }, 10000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Therefore, it is essential that you look for a nutritionist so that they can guide you more precisely!</p><br>`;
      scrollDiv();
    }, 16000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">But come on, while I was talking to you I already did the calculations here... &#128540</p><br>`;
      scrollDiv();
    }, 19000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"> Your BMI is <span class="info">${userIMC} kg/m² - ${resultIMC}</span></p><br>`;
      scrollDiv();
    }, 22000);

    setTimeout(function () {
      switch (resultIMC) {
        case 'Low Weight':
          areaMessages.innerHTML += `<p class="bot-message">Unfortunately you are below your ideal weight, where the average is <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Normal Weight':
          areaMessages.innerHTML += `<p class="bot-message">Congratulations, you are within the limits of your ideal weight, where the average is<span class="info">${idealWeight} Kg &#128516</span></p><br>`;
          scrollDiv();
          break;
        case 'Overweight':
          areaMessages.innerHTML += `<p class="bot-message">Unfortunately you are a little above your ideal weight, where the average is <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Grade 1 Obesity':
          areaMessages.innerHTML += `<p class="bot-message">Unfortunately you are above your ideal weight, where the average is <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Grade 2 Obesity':
          areaMessages.innerHTML += `<p class="bot-message">Unfortunately you are above your ideal weight, where the average is <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Grade 3 Obesity':
          areaMessages.innerHTML += `<p class="bot-message">Unfortunately you are above your ideal weight, where the average is <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
      }
    }, 24000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">If you consume an estimated amount of<span class="info">${resultMetabolic} calorias</span> daily, you will maintain your current weight of <span class="info">${userWeight} Kg</span> (also maintaining the same physical activity routine)</p><br>`;
      scrollDiv();
    }, 33000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">If you intend to change your current weight, look for a nutritionist so they can create a meal plan with the calories you need.</p><br>`;
      scrollDiv();
    }, 41000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Well, that's all the information I can give you so far. I hope I helped you, ${userName}! &#128521</p><br>`;
      scrollDiv();
    }, 46000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">Thank you very much for using HealthCare-Bot!</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
      //console.log(`Just for control analyse: ${userGender}`)
    }, 49000);

    setTimeout(function () {
      document.getElementById('area-interaction').innerHTML = '<p class="example">Chat finished.</p>'
    }, 50000);
    
    setTimeout(function () {
      areaMessages.innerHTML += `<p class="credits">HealthCare-Bot was developed by Marri Harish.Find out more at:<br><br><br><a class="social" href="https://github.com/Harishmarri28"><i class="fab fa-github"></i></a><a class="social" href="https://www.instagram.com/crazy_hari04/"><i class="fab fa-instagram"></i></a></p>`;
      scrollDiv();
    }, 51000);
    
  }

}
