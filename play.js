var username = localStorage.getItem('username');
var usertotal = 0;
var userh = "Half Century";
var userc = "Century";
var userstr = "On Strike";
var userdouble = "Double Century";
var  target = Math.floor(Math.random()* 200) +1;
function bat()
{
  document.getElementById('totalscore').innerHTML = target;
}

function userscore()
{
var userscore = uchoice;
usertotal += uchoice;
target -= userscore;
if(target <= 0)
{
     document.getElementById('comments').innerHTML = '<h2>That Was Great!</h2>';
    document.getElementById('end').href='play.html';
      document.getElementById('end').innerHTML='Play Again';
  document.getElementById('winorloss').innerHTML = '<h2>You Won The Match</h2>';
  document.getElementById('totalscore').style.visibility = 'hidden';
  document.getElementById('ts').style.visibility = 'hidden';
    document.getElementById('tohide').style.display ='none';
  document.getElementById('record').style.display ='none';
}
document.getElementById('totalscore').innerHTML = target;
if(usertotal>=50 && usertotal< 100)
{
  document.getElementById('record').innerHTML = userh;
}
else if(usertotal >= 100 && usertotal < 200)
{
  document.getElementById('record').innerHTML = userc;
}
else
{
  document.getElementById('record').innerHTML = userstr;
}
}
function one()
{
  uchoice = 1;
  var compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 1)
  {
    var uo = "Out!";
    document.getElementById('comments').innerHTML = uo;
    usertarget = usertotal;
    display(usertarget);
    //alert("Score "+usertarget); 
  }  
  else
  {
    var userc = "A single has taken";
    document.getElementById('comments').innerHTML=userc;
    userscore();
  }
}
function two()
{
  uchoice = 2;
  var compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 2)
  {
    var uo = "Out!";
    document.getElementById('comments').innerHTML = uo;
    usertarget = usertotal;
    display(usertarget);
    //alert("Score "+usertarget);  
  }  
  else
  {
    var userc = "Good run gives a two";
    document.getElementById('comments').innerHTML=userc;
    userscore();
  }
}
function three()
{
  uchoice = 3;
  var compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 3)
  {
    var uo = "Out!";
    document.getElementById('comments').innerHTML = uo;
    usertarget = usertotal;
    display(usertarget);
    //alert("Score "+usertarget);
  }  
  else
  {
    var userc = "Wow three runs!";
    document.getElementById('comments').innerHTML=userc;
    userscore();
  }
}
function four()
{
  uchoice = 4;
  var compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 4)
  {
    var uo = "Out!";
    document.getElementById('comments').innerHTML = uo;
    usertarget = usertotal;
    display(usertarget);    //alert("Score "+usertarget);
  }  
  else
  {
    var uc = "Boundary from the batsman";
    document.getElementById('comments').innerHTML=uc;
    userscore();
  }
}
function five()
{
  uchoice = 5;
  var compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 5)
  {
    var uo = "Out!";
    document.getElementById('comments').innerHTML = uo;
    usertarget = usertotal;
    display(usertarget);
    //alert("Score "+usertarget);
  }  
  else
  {
    var uc = "Five runs!";
    document.getElementById('comments').innerHTML=uc;
    userscore();
  }
}
function six()
{
  uchoice = 6;
  var compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 6)
  {
    var uo = "Out!";
    document.getElementById('comments').innerHTML = uo;
    usertarget = usertotal;
    display(usertarget);
    //alert("Score "+usertarget);
  }  
  else
  {
    var uc = "A Magnificient strike into the crowd! 6";
    document.getElementById('comments').innerHTML=uc;
    userscore();
  }
}
/*
function bowl(previous)
{
  location.replace('bowl.html');
}*/
// bowling code

var shots = ['One run','Makes a two','Three runs','Fantastic Four','Five','He splas a six'];
var comptotal = 0;
var comph = "Half Century from Opponent";
var compc = "Century from Opponent";
var compstr = "Opponent On Strike";
var b = "Batting";
var compdouble = "Double Century";
var userscored = Math.floor(Math.random()* 200) +1;

function bowl()
{
  document.getElementById('totalscore').innerHTML = userscored;
}

function compscore()
{
var compscore = compchoice;
comptotal += compscore;
userscored -= compscore;
if(userscored <= 0)
{
    document.getElementById('comments').innerHTML = '<h2>That Was A Nice Try</h2>';
    document.getElementById('end').href='play.html';
      document.getElementById('end').innerHTML='Play Again';
  document.getElementById('winorloss').innerHTML = '<h2>You Lose The Match</h2>';
  document.getElementById('ts').innerHTML = "<h2>0</h2>";
  document.getElementById('tohide').style.display ='none';
  document.getElementById('record').style.display ='none';
  }
document.getElementById('totalscore').innerHTML = userscored;
if(comptotal>=50 && comptotal< 100)
{
  document.getElementById('record').innerHTML = comph;
}
else if(comptotal >= 100 && comptotal < 200)
{
  document.getElementById('record').innerHTML = compc;
}
else if(comptotal >= 200 && comptotal < 300)
{
  document.getElementById('record').innerHTML = compdouble;
}
else
{
  document.getElementById('record').innerHTML = compstr;
}
}
function onebowl()
{
   var uchoice = 1;
  compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 1)
  {
    var co = "Out!";
    document.getElementById('comments').innerHTML = co;
    comptarget = comptotal;
    compdisplay(comptarget);
 }  
  else
  {
    var b = shots[compchoice-1];
    document.getElementById('comments').innerHTML = b;
     compscore();
  }
}
function twobowl()
{
  var uchoice = 2;
  compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 2)
  {
    var co = "Hey oooh!";
    document.getElementById('comments').innerHTML = co;
    comptarget = comptotal;
    compdisplay(comptarget);
  }  
  else
  {
    var b = shots[compchoice-1];
     document.getElementById('comments').innerHTML = b;
    compscore();
  }
}
function threebowl()
{
  var uchoice = 3;
  compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 3)
  {
    var co = "Got a wicket!";
    document.getElementById('comments').innerHTML = co;
    comptarget = comptotal;
    compdisplay(comptarget);
  }  
  else
  {
  var b = shots[compchoice-1];
     document.getElementById('comments').innerHTML = b;
    compscore();
  }
}
function fourbowl()
{
  var uchoice = 4;
  compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 4)
  {
    var co = "Wow! Wicket";
    document.getElementById('comments').innerHTML = co;
    comptarget = comptotal;
    compdisplay(comptarget);
  }  
  else
  {
  var b = shots[compchoice-1];
     document.getElementById('comments').innerHTML = b;
    compscore();
  }
}
function fivebowl()
{
  var uchoice = 5;
  compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 5)
  {
    var co = "Wow! Wicket";
    document.getElementById('comments').innerHTML = co;
    comptarget = comptotal;
    compdisplay(comptarget);
  }  
  else
  {

var b = shots[compchoice-1];
     document.getElementById('comments').innerHTML = b;
    compscore(); 
     }
}
function sixbowl()
{
  var uchoice = 6;
  compchoice = Math.floor(Math.random() * 6) +1;
  document.getElementById('compchoice').innerHTML = compchoice;
  if(compchoice === 6)
  {
    var co = "Wow Wicket!";
    document.getElementById('comments').innerHTML = co;
    comptarget = comptotal;
    compdisplay(comptarget);
  }  
  else
  {
  var b = shots[compchoice-1];
     document.getElementById('comments').innerHTML = b;
    compscore();
  }
}


//Toss code

function display(ut)
{
alert("Your scored "+ut);
document.getElementById('comments').innerHTML = '<h2>That Was A Nice Try</h2>';
    document.getElementById('end').href='play.html';
      document.getElementById('end').innerHTML='Play Again';
  document.getElementById('winorloss').innerHTML = '<h2>You Lose The Match</h2>';
  document.getElementById('tohide').style.display ='none';
  document.getElementById('record').style.display ='none';
}

function compdisplay(cs)
{
  alert('Opponent scored'+cs);
  document.getElementById('comments').innerHTML = '<h2>That Was Great!</h2>';
    document.getElementById('end').href='play.html';
      document.getElementById('end').innerHTML='Play Again';
  document.getElementById('winorloss').innerHTML = '<h2>You Won The Match</h2>';
  document.getElementById('tohide').style.display ='none';
  document.getElementById('record').style.display ='none';
  }




/*


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
/*
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
} */

document.getElementById('user').innerHTML = username;