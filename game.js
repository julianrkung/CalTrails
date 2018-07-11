var canvas;
var stage;
var textColor = "#000000";
var buttonColor = "#0033cc";
var black = "#0E1111";
var white = "#EEF0F0";
var playerNum = 0;
const width = 1000;
const height = 600;
const font = '30px VT323';
var week = 1;
var semester = 1;
var year = 1;

var player = {
  name: "",
  intelligence: 0,
  social: 0,
  sleep: 0,
  GPA: 4.00,
  happiness: 100,
  gradeSummary: {
    semesters: [],
    total: 0
  }
}

function init() {
  canvas = document.getElementById("demoCanvas");
  stage = new createjs.Stage(canvas);
  createjs.Ticker.on("tick", stage);
  createjs.Ticker.framerate = 80;
  createMenu();
}

function tick(event) {
    stage.update(event);
}

function createMenu() {
    document.addEventListener('keydown', handleStartMenuKey);

    var menu = new createjs.Container();
    menu.x = 0;
    menu.y = 0;
    menu.setBounds(0, 0, width, height);

    var back = new createjs.Bitmap("img/welcome.png");
    back.x = 0;
    back.y = 0;

    var rec1 = new createjs.Shape();
    rec1.graphics.setStrokeStyle(0, "round");
    rec1.graphics.beginStroke("rgba(0,50,98,.8)").beginFill("rgba(0,50,98,.8)").drawRect(145, 100, 710, 190);

    var welcome = new createjs.Text('Berkeley VR', '70px VT323', white);
    welcome.x = canvas.width/2 - 150;
    welcome.y = 120;


    var start = new createjs.Text('Start Game (S)', '40px VT323', white);
    start.x = canvas.width/2 - 115;
    start.y = 220;

    var rec2 = new createjs.Shape();
    rec2.graphics.setStrokeStyle(0, "round");
    rec2.graphics.beginStroke("rgba(0,50,98,.8)").beginFill("rgba(0,50,98,.8)").drawRect(145, 375, 710, 130);

    var show = "Welcome to Berkeley! Two rules: GPA greater than 2.0 and avoid depression!"

    var text1 = new createjs.Text(show.slice(0, 31), '30px VT323', white);
    text1.x = canvas.width / 2 - text1.getMeasuredWidth() / 2;
    text1.y = (canvas.height / 15) * 10;

    var text2 = new createjs.Text(show.slice(31), '30px VT323', white);
    text2.x = canvas.width / 2 - text2.getMeasuredWidth() / 2;
    text2.y = (canvas.height / 15) * 11;

    var rec3 = new createjs.Shape();
    rec2.graphics.setStrokeStyle(0, "round");
    rec2.graphics.beginStroke("rgba(0,50,98,.8)").beginFill("rgba(0,50,98,.8)").drawRect(145, 575, 710, 100);

    var createdBy = new createjs.Text("Created by Ethan Teo, Danlin Lillemark, Haoran Guo, and Julian Kung", '20px VT323', white);
    createdBy.x = canvas.width / 2 - 260;
    createdBy.y = (canvas.height / 15) * 14 + 20;

    menu.addChild(back, rec1, welcome, start, rec2, text1, text2, rec3, createdBy);
    stage.addChild(menu);
}

function handleStartMenuKey(event) {
    if (event.keyCode == 83) {
        document.removeEventListener('keydown', handleStartMenuKey);
        choosePlayer();
    }
}

function choosePlayer() {
  stage.removeAllChildren();
  document.addEventListener('keydown', handleChoosePlayerMenuKey);

  var background = new createjs.Shape();
  background.graphics.beginFill("rgb(0,50,98)").drawRect(0,0,1000,600);

  var title = new createjs.Text("Choose Player", "70px VT323", white);
  title.x = canvas.width / 2 - title.getMeasuredWidth() / 2;
  title.y = canvas.height / 15 * 4;

  var player1 = new createjs.Text("Chad (a)", "50px VT323", white);
  player1.x = canvas.width / 2 - player1.getMeasuredWidth() / 2;
  player1.y = (canvas.height / 15) * 8;

  var player2 = new createjs.Text("EECS (b)", "50px VT323", white);
  player2.x = canvas.width / 2 - player2.getMeasuredWidth() / 2;
  player2.y = (canvas.height / 15) * 10;

  var player3 = new createjs.Text("Media Studies (c)", "50px VT323", white);
  player3.x = canvas.width / 2 - player3.getMeasuredWidth() / 2;
  player3.y = (canvas.height / 15) * 12;

  stage.addChild(background, title, player1, player2, player3);
}

function handleChoosePlayerMenuKey(event) {

    let name, description;
    const confirm = new createjs.Text("Do you want to choose this player? (y/n)", "30px VT323", white);

    confirm.x = canvas.width / 2 - confirm.getMeasuredWidth() / 2;
    confirm.y = (canvas.height / 15) * 12;

    var background = new createjs.Shape();
    background.graphics.beginFill("rgb(0,50,98)").drawRect(0,0,1000,600);

    if (event.keyCode == 65) {
        stage.removeAllChildren();

        name = new createjs.Text("Chad", "50px VT323", textColor);
        descriptionText = "Chad's the man. He hangs out with all the hottest dudes.";
        playerNum = 1;
    } else if (event.keyCode == 66) {
        stage.removeAllChildren();
        name = new createjs.Text("EECS", "50px VT323", textColor);
        descriptionText = '\"Here\'s is your ticket, enjoy the movie\"';
        var description2 = new createjs.Text('"You too"', "40px VT323", textColor);
        description2.x = canvas.width / 2 - description2.getMeasuredWidth() / 2;
        description2.y = (canvas.height / 15) * 9;
        playerNum = 2;
    } else if (event.keyCode == 67) {
        stage.removeAllChildren();
        name = new createjs.Text("Media Studies", "50px VT323", textColor);
        descriptionText = "He's also considering a public health minor.";
        playerNum = 3;
    }
    description = new createjs.Text(descriptionText, "40px VT323", textColor);

    description.x = canvas.width / 2 - description.getMeasuredWidth() / 2;
    description.y = (canvas.height / 15) * 8;

    name.x = canvas.width / 2 - name.getMeasuredWidth() / 2;
    name.y = (canvas.height / 15) * 4;

    stage.addChild(name, confirm, description);
    if (playerNum == 2) {
      stage.addChild(description2);
    }

    document.removeEventListener('keydown', handleChoosePlayerMenuKey);
    document.addEventListener('keydown', proceedWithPlayer);
}

function proceedWithPlayer(event) {
    if (event.keyCode == 89) {
        bideo();
        initPlayer(playerNum);
    } else if (event.keyCode == 78) {
        document.removeEventListener('keydown', proceedWithPlayer);
        choosePlayer();
    }
}

function bideo(){
    $("#sather").fadeIn();
    $("#black").show();
    setTimeout(function(){ $("#sather").fadeOut();
      $("#football").fadeIn();
    }, 1500);

    setTimeout(function(){ $("#football").fadeOut();
      $("#soda").fadeIn();
    }, 3000);

    setTimeout(function(){ $("#football").fadeOut();
      $("#black").css("z-index", "-2");
      $("#soda").fadeOut();

    }, 4500);

}

function initPlayer(playerNum) {
  if(playerNum == 1) {
    player.name = "Chad";
    player.intelligence = 60;
    player.social = 75;
    player.sleep = 65;
  } else if(playerNum == 2) {
    player.name = "EECS";
    player.intelligence = 75;
    player.social = 65;
    player.sleep = 65;
  } else if(playerNum == 3) {
    player.name = "Media Studies";
    player.intelligence = 60;
    player.social = 70;
    player.sleep = 70;
  }

  document.removeEventListener('keydown', proceedWithPlayer);
  gameplay();
}

function gameplay() {
    hud();
    options();
}


function hud(){
    stage.removeAllChildren();

    var rec1 = new createjs.Shape();
    rec1.graphics.setStrokeStyle(8, "round");
    rec1.graphics.beginStroke(white).beginFill(black).drawRect(30, 370, 710, 200);

    var rec2 = new createjs.Shape();
    rec2.graphics.setStrokeStyle(8, "round");
    rec2.graphics.beginStroke(white).beginFill(black).drawRect(770, 22, 200, 318);

    var rec3 = new createjs.Shape();
    rec3.graphics.setStrokeStyle(8, "round");
    rec3.graphics.beginStroke(white).beginFill(black).drawRect(770, 370, 200, 200);

    var date = new createjs.Text('Year ' + year + ', Semester ' + semester + ': Week ' + week, '40px VT323', white);
    date.x = 385 - date.getMeasuredWidth()/2;
    date.y = 388;

    var nametext = new createjs.Text(player.name, '30px VT323', white);
    nametext.x = 870 - nametext.getMeasuredWidth()/2;
    nametext.y = 190 + nametext.getMeasuredHeight();

    var gpatext = new createjs.Text('GPA: ' + player.GPA, '30px VT323', white);
    gpatext.x = 870 - gpatext.getMeasuredWidth()/2;
    gpatext.y = 230 + gpatext.getMeasuredHeight();

    var haptext = new createjs.Text('Happiness: ' + player.happiness + '%', '30px VT323', white);
    haptext.x = 870 - haptext.getMeasuredWidth()/2;
    haptext.y = 270 + haptext.getMeasuredHeight();

    var atrtext = new createjs.Text('Attributes', '30px VT323', white);
    atrtext.x = 870 - atrtext.getMeasuredWidth()/2;
    atrtext.y = 390 + atrtext.getMeasuredHeight();


    var inttext = new createjs.Text('Intelligence: ' + player.intelligence, '25px VT323', white);
    inttext.x = 870 - inttext.getMeasuredWidth()/2;
    inttext.y = 440 + inttext.getMeasuredHeight();

    var soctext = new createjs.Text('Social: ' + player.social, '25px VT323', white);
    soctext.x = 870 - soctext.getMeasuredWidth()/2;
    soctext.y = 470 + soctext.getMeasuredHeight();

    var sletext = new createjs.Text('Sleep: ' + player.sleep, '25px VT323', white);
    sletext.x = 870 - sletext.getMeasuredWidth()/2;
    sletext.y = 500 + sletext.getMeasuredHeight();

    var path;

    if (player.happiness > 70){
      path = "img/"+playerNum+"hap.png";
    }
    else if (player.happiness > 40){
      path = "img/"+playerNum+"meh.png";
    }
    else {
      path = "img/"+playerNum+"sad.png";
    }

    var cha = new createjs.Bitmap(path);
    cha.x = 870 - 144/2;
    cha.y = 50;
    cha.scale = .5;

    stage.addChild(rec1, rec2, rec3);
    stage.addChild(date);
    stage.addChild(gpatext, haptext, atrtext, inttext, soctext, sletext, nametext);
    stage.addChild(cha);
}

function options() {
    const option = new createjs.Text("Choose your focus for the week:", "25px VT323", white);
    option.x = 50;
    option.y = 388 + 45;

    const study = new createjs.Text("(1) Sleep", "25px VT323", white);
    study.x = 50;
    study.y = 388 + 75;

    const sleep = new createjs.Text("(2) Study", "25px VT323", white);
    sleep.x = 50;
    sleep.y = 388 + 105;

    const party = new createjs.Text("(3) Party", "25px VT323", white);
    party.x = 50;
    party.y = 388 + 135;

    stage.addChild(option, study, sleep, party);
    document.addEventListener('keydown', handleChooseFocus);
}

function handleChooseFocus(event) {
    var focus = 0;
    if (event.keyCode == 49) {
        focus = 1;
    } else if (event.keyCode == 50) {
        focus = 2;
    } else if (event.keyCode == 51) {
        focus = 3;
    }

  if(focus != 0) {
    initStatChanges(focus);
  }
}

function initStatChanges(focus) {
    document.removeEventListener('keydown', handleChooseFocus);
  var scalar = Math.floor(Math.random() * 5 + 1);
  if (focus == 1) {
    $("#bed").fadeIn();
    $("#moffit").fadeOut();
    $("#party").fadeOut();

    if (scalar == 1 || scalar == 2) {
      updateTextInBox("Despite trying your best, you had a rough week of sleep: +" + scalar + " sleep");
    }
    else {
      updateTextInBox("You sleep like a baby: +" + scalar + " sleep");
    }

    player.sleep = player.sleep + scalar;
    player.intelligence = player.intelligence - minusRandomScalar();
    player.social = player.social - minusRandomScalar();
  }

  if (focus == 2) {
    $("#moffit").fadeIn();
    $("#party").fadeOut();
    $("#bed").fadeOut();

    if (scalar == 1 || scalar == 2) {
      updateTextInBox("Even after studying, the concepts are still fuzzy in your brain: +" + scalar + " intelligence");
    } else {
      updateTextInBox("You spend countless hours at Moffitt, shower less, and stink more: +" + scalar + " intelligence");
    }

    player.sleep = player.sleep - minusRandomScalar();
    player.intelligence = player.intelligence + scalar;
    player.social = player.social - minusRandomScalar();
  }

  if (focus == 3) {
    $("#moffit").fadeOut();
    $("#party").fadeIn();
    $("#bed").fadeOut();
    if (scalar == 1 || scalar == 2) {
      updateTextInBox("Your friends are busy this week, but they manage to squeeze in a little time for you: +" + scalar + " social");
    }
    else {
      updateTextInBox("You go to a frat party, shotgun a beer, slap a wine bag, and win a game of beer pong: +" + scalar + " social");
    }
    player.sleep = player.sleep - minusRandomScalar();
    player.intelligence = player.intelligence - minusRandomScalar();
    player.social = player.social + scalar;
  }

  updateHappiness();
  if (player.happiness <= 0 || player.GPA < 2) {
    lostPage();
  }
  else if (year > 4) {
    winScreen();
  } else {
    document.addEventListener('keydown', nextWeek);
  }
}

function nextWeek(event) {
    if (event.keyCode == 32) {
        document.removeEventListener('keydown', nextWeek);
        week++;
        if (week == 9) {
            semester++;
            week = 1;
            if (year == 4 && semester == 3) {
                winScreen();
            } else {
                if (semester == 3) {
                    week = 8;
                    semester = 2;
                    landmarkReached();
                    semester = 1;
                    year++;
                } else {
                    landmarkReached();
                }
            }
            week = 1;
            return;
        }

        if (Math.random() > 0.85) {
            challenge();
            return;
        } else if (Math.random() > 0.7) {
            randomEvent();
            return;
        }
        gameplay();
    }
}

function landmarkReached() {
  var difficulty;
  if (player.name == "Chad") {
    difficulty = 65;
  } else if (player.name == "EECS") {
    difficulty = 80;
  } else {
    difficulty = 60;
  }

  var change = ((player.intelligence*0.9 + player.sleep*0.1 - difficulty)/100) + 0.03;
    if(change > 0.15) {
        var numSems = player.gradeSummary.semesters.push(4);
        var sumGPA = player.gradeSummary.semesters.reduce(function(a, b) { return a + b; }, 0);
        player.GPA = sumGPA / numSems;
        player.GPA = Math.round((player.GPA + change)*100)/100;
        if(player.GPA > 4) {
          player.GPA = 4.00;
        }
        updateTextInBox("You did extremely well on your finals!" + " Your new GPA is: " + player.GPA);
    } else if (change > 0.075) {
        var numSems = player.gradeSummary.semesters.push(3.5 + minusRandomScalar()/10);
        var sumGPA = player.gradeSummary.semesters.reduce(function(a, b) { return a + b; }, 0);
        player.GPA = sumGPA / numSems;
        player.GPA = Math.round((player.GPA + change)*100)/100;
        updateTextInBox("You did well on your finals!" + " Your new GPA is: " + player.GPA);
    } else if (change > 0) {
        var numSems = player.gradeSummary.semesters.push(3.0 + minusRandomScalar()/10);
        var sumGPA = player.gradeSummary.semesters.reduce(function(a, b) { return a + b; }, 0);
        player.GPA = sumGPA / numSems;
        player.GPA = Math.round((player.GPA + change)*100)/100;
        updateTextInBox("You did okay on your finals." + " Your new GPA is: " + player.GPA);
    } else if (change > -.1) {
        var numSems = player.gradeSummary.semesters.push(2.0 + minusRandomScalar()/10);
        var sumGPA = player.gradeSummary.semesters.reduce(function(a, b) { return a + b; }, 0);
        player.GPA = sumGPA / numSems;
        player.GPA = Math.round((player.GPA + change)*100)/100;
        updateTextInBox("You did poorly on your finals." + " Your new GPA is: " + player.GPA);
    } else {
        var numSems = player.gradeSummary.semesters.push(1.5 + minusRandomScalar()/10);
        var sumGPA = player.gradeSummary.semesters.reduce(function(a, b) { return a + b; }, 0);
        player.GPA = sumGPA / numSems;
        player.GPA = Math.round((player.GPA + change)*100)/100;
        updateTextInBox("You completely failed your finals." + " Your new GPA is: " + player.GPA);

    }
    if (player.happiness <= 0 || player.GPA < 2) {
      lostPage();
      semester = 2;
      week = 8;
    }
    document.addEventListener('keydown', afterChallenge);
}

function minusRandomScalar() {
  return Math.floor(Math.random() * 4);
}

function updateHappiness() {
  player.happiness = Math.floor(player.happiness + (((.6 * player.social) + (.4 * player.sleep) - 63) / 100) * player.happiness);
  if (player.happiness > 100) {
    player.happiness = 100;
  }
}

function winScreen() {
    year = 4;
    semester = 2;
    week = 8;
    var winText = "Congratulations! You graduated ";

    if (playerNum == 1) {
      winText = winText + "and became a famous body builder!";
    }
    else if (playerNum == 2) {
      winText = winText + "and got a job and  now work 40 hours a week!";
    }
    else if (playerNum == 3) {
      winText = winText + "and moved back in  with your parents!";
    }
    // console.log(winText);
    endText(winText);
  }

function randomEvent() {
    hud();
    var random = Math.random();

    if (random > 0.9) {
        updateTextInBox("You form a study group with your friends. +3 intelligence");
        player.intelligence += 3;
    } else if (random > 0.8) {
        updateTextInBox("A fire alarm wakes you up at 5am. -3% happiness");
        player.happiness -= 3;
    } else if (random > 0.7) {
        updateTextInBox("You throw up on your friend\'s bed after going to a party. -3 social");
        player.social -= 3;
    } else if (random > 0.6) {
        updateTextInBox("You get tackled by a homeless person. -3% happiness");
        player.happiness -= 3;
    } else if (random > 0.5) {
        updateTextInBox("You can\'t study because you can\'t find a seat in Moffitt. -3 intelligence");
        player.intelligence -= 3;
    } else if (random > 0.4) {
        updateTextInBox("Cal finally wins a football game. You go to sleep happy. +3 sleep");
        player.sleep += 3;
    } else if (random > 0.3) {
        updateTextInBox("It's 2am. You forgot your key and are locked out of your room. -3 sleep");
        player.sleep -= 3;
    } else if (random > 0.2) {
        updateTextInBox("You posted a meme and it got over 2000 likes. +3 social");
        player.social += 3;
    } else if (random > 0.1) {
        updateTextInBox("There is a protest for veganism and you are triggered. -3% happiness");
        player.happiness -= 3;
    }
    document.addEventListener('keydown', afterChallenge);
}

function challenge() {
    hud();
    let prompt;
    let choice1;
    let choice2;
    var random = Math.random();
    if (random > 0.67) {
        prompt = new createjs.Text("Someone from Alpha Kappa Psi flyers you on Sproul. What do you do?", "25px VT323", white);
        choice1 = new createjs.Text("(1) Attend their event", "25px VT323", white);
        choice2 = new createjs.Text("(2) Walk straight past them", "25px VT323", white);
        document.addEventListener('keydown', handleAKPChallenge);
    } else if (random > 0.33) {
        prompt = new createjs.Text("It seems that you have been sexiled. What do you do?", "25px VT323", white);
        choice1 = new createjs.Text("(1) Sleep in the hallway", "25px VT323", white);
        choice2 = new createjs.Text("(2) Knock on the door angrily", "25px VT323", white);
        document.addEventListener('keydown', handleSexileChallenge);
    } else {
        prompt = new createjs.Text("Someone asks you out on a date. What do you do?", "25px VT323", white);
        choice1 = new createjs.Text("(1) Say yes", "25px VT323", white);
        choice2 = new createjs.Text("(2) Say no", "25px VT323", white);
        document.addEventListener('keydown', handleDateChallenge);
    }

    prompt.x = 50;
    prompt.y = 388 + 45;

    choice1.x = 50;
    choice1.y = 388 + 75;

    choice2.x = 50;
    choice2.y = 388 + 105;

    stage.addChild(prompt, choice1, choice2);
}

function handleDateChallenge(event) {
    var random = Math.random();
    if (event.keyCode == 49) {
        if (random > 0.5) {
            updateTextInBox("You have a lot of fun. +5 social");
            player.social += 5;
        } else {
            updateTextInBox("You have entered a toxic relationship. -5% happiness");
            player.happiness -= 5;
        }
        document.removeEventListener('keydown', handleDateChallenge);
        document.addEventListener('keydown', afterChallenge);
    } else if (event.keyCode == 50) {
        if (random > 0.2) {
            updateTextInBox("Missed out on the love of your life. -5% happiness");
            player.happiness -= 5;
        } else {
            updateTextInBox("You sleep well because dating gives you anxiety. +3 sleep");
            player.sleep += 3;
        }
        document.removeEventListener('keydown', handleDateChallenge);
        document.addEventListener('keydown', afterChallenge);
    }
}

function handleSexileChallenge(event) {
    var random = Math.random();
    if (event.keyCode == 49) {
        if (random > 0.5) {
            updateTextInBox("The floor is cold and you have trouble falling asleep. -5 sleep");
            player.sleep -= 2;
        } else {
            updateTextInBox("You end up staying up all night chatting with a friend about roommate problems. +2 social");
            player.social += 2;
        }
        document.removeEventListener('keydown', handleSexileChallenge);
        document.addEventListener('keydown', afterChallenge);
    } else if (event.keyCode == 50) {
        if (random > 0.2) {
            updateTextInBox("Your roommate is furious. -3 social");
            player.social -= 3;
        } else {
            updateTextInBox("Your roommate is understanding. +1 social");
            player.social += 1;
        }
        document.removeEventListener('keydown', handleSexileChallenge);
        document.addEventListener('keydown', afterChallenge);
    }
}

function handleAKPChallenge(event) {
    var random = Math.random();
    if (event.keyCode == 49) {
        if (random > 0.2) {
            updateTextInBox("It's a waste of your time and you learn nothing. -2% happiness");
            player.happiness -= 2;
        } else if (random > 0.1) {
            updateTextInBox("You learn how to make a blockchain. +5 intelligence");
            player.intelligence += 5;
        } else {
            updateTextInBox("You learn how to implement machine learning. +5 intelligence");
            player.intelligence += 5;
        }
        document.removeEventListener('keydown', handleAKPChallenge);
        document.addEventListener('keydown', afterChallenge);
    } else if (event.keyCode == 50) {
        if (random > 0.5) {
            updateTextInBox("Turns out the person flyering was your friend. They are now angry at you for ignoring them. -3 social");
            player.social -= 3;
        } else {
            updateTextInBox("Spent that time studying instead of attending the workshop. +2 intelligence");
            player.intelligence += 2;
        }
        document.removeEventListener('keydown', handleAKPChallenge);
        document.addEventListener('keydown', afterChallenge);
    }
}

function afterChallenge(event) {
    if (event.keyCode == 32) {
        document.removeEventListener('keydown', afterChallenge);
        gameplay();
        return;
    }
}

function finishedGame() {
  year = 4;
  semester = 2;
  week = 8;
  endText("Congratulations! You graduated Berkeley! Go Bears!")
}

function lostPage() {
  //  "You won't be able to feed a family with your GPA"
  // "You develop depression. You should've gone to UCLA"
  var lostText;
  document.removeEventListener('keydown', nextWeek);
  if (player.happiness <= 0) {
    endText("You developed crippling depression. Should've gone to UCLA.");
    // lostText.x = canvas.width / 2 - lostText.getMeasuredWidth() / 2;
    // lostText.y = (canvas.height / 16) * 4;
  }

  else if (player.GPA < 2) {
    endText("You get put on academic probation. You won't get  an internship. You won't be able to feed your family.");
    // lostText.x = canvas.width / 2 - lostText.getMeasuredWidth() / 2;
    // lostText.y = (canvas.height / 16) * 4;
  }
}

function restartGame(event) {
  if (event.keyCode == 65) {
    location.reload();
  } else if (event.keyCode == 32) {
    return;
  }
}

function updateTextInBox(stringToShow) {
  hud();

  if(stringToShow.length > 50) {
    splitString(stringToShow);
  } else {
    var text1 = new createjs.Text(stringToShow, '30px VT323', white);
    text1.x = 385 - text1.getMeasuredWidth()/2;
    text1.y = 388 + 50;
    stage.addChild(text1);
  }

  const next = new createjs.Text("Press space to advance to next week", "25px VT323", white);
  next.x = 385 - next.getMeasuredWidth()/2;
  next.y = 388 + 145;
  stage.addChild(next);
}

function endText(stringToShow) {
  hud();
  if(stringToShow.length > 55) {
    splitString(stringToShow);
  } else {
    var text1 = new createjs.Text(stringToShow, '30px VT323', white);
    text1.x = 385 - text1.getMeasuredWidth()/2;
    text1.y = 388 + 50;
    stage.addChild(text1);
  }
  document.removeEventListener('keydown', nextWeek);
  document.removeEventListener('keydown', handleChooseFocus);

  const next = new createjs.Text("Restart (a)", "25px VT323", white);
  next.x = 385 - next.getMeasuredWidth()/2;
  next.y = 388 + 145;
  stage.addChild(next);
  document.addEventListener('keydown', restartGame);
}

function splitString(stringToShow) {
  var findSpace = 47;
  while(!(stringToShow.slice(findSpace, findSpace + 1) == ' ')) {
    findSpace+=1;
    if(findSpace > stringToShow.length){
        break;
    }
    console.log("is this in an infinite loop");
  }
  var text1 = new createjs.Text(stringToShow.slice(0, findSpace), '30px VT323', white);
  text1.x = 385 - text1.getMeasuredWidth()/2;
  text1.y = 388 + 55;
  var text2 = new createjs.Text(stringToShow.slice(findSpace), '30px VT323', white);
  text2.x = 385 - text2.getMeasuredWidth()/2;
  text2.y = 388 + 95;
  stage.addChild(text1, text2);
}
