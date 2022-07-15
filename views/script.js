const chatbox = jQuery.noConflict();

chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );

  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );

  chatbox(".chatbox-maximize").click(() => {
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
    chatbox(".chatbox-panel").fadeIn();
    chatbox(".chatbox-panel").css({ display: "flex" });
  });

  chatbox(".chatbox-minimize").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
  });

  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
  chatbox(".send").click(() =>{
    n = document.getElementById("message").value;
    var content = n;
    var tag = document.createElement("div");
   var text = document.createTextNode(content);
   tag.style.textAlign = "right";
   tag.style.float = "right";
   tag.appendChild(text);
   var element = document.getElementById("messages");
   element.appendChild(tag);
   switch(flag){
     case 0: switchUser();
     flag = 1;
     break;
     default: break;
   }
  document.getElementById("message").value = " ";

  });
});
var n;
var flag = 0;
var flag1 = 0;
var flag2 = 0;
function switchUser(){
 var m = parseInt(document.getElementById("message").value);
 console.log(m);
  switch(m){
    case 1: displayStud_parent();
    break;
    case 2: displayStud_parent();
    break;
    case 3: displayFaculty();
    break;
    case 4: displayCategories();
    break;
    default: console.log("why");
  }
  document.getElementById("message").value = " ";
}
function displayFaculty(){
  var tag = document.createElement("div");
 var data="Please enter the following details.<br>Faculty id:<input type='text' name='P_id'><br><label for = 'branch'> Choose your branch:</label><br><select name = 'branch' id = 'branch'><option value = 'CSE'>CSE</option><option value = 'ECE'>ECE</option><option value = 'ETE'>ETE</option></select><br><input type ='submit' id = 'submit' value = 'Submit'/>";
 tag.innerHTML = data;
     var element = document.getElementById("messages");
  element.appendChild(tag);
  document.getElementById("message").value = " ";
  document.getElementById("submit").addEventListener("click", function(){ alert("ready")//we'll push the items items into the database here
 }, false);
}
var input = document.getElementById("message");
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === "Enter") {
    document.getElementsByClassName("send")[0].click();
  }
});

function displayStud_parent(){
    var tag = document.createElement("div");
  var data = "Please enter the following details.<br><form method = 'post'>USN:<input type='text' name='id' id = 'USN'><br><label for = 'courses'>Choose your course:</label><br><select name = 'courses' id = 'courses'><option value = 'UG'>UG</value><option value = 'PG'>PG</option><option value = 'PhD'>PhD</option></select><br><label for = 'branch'> Choose your branch:</label><br><select name = 'branch' id = 'branch'><option value = 'CSE'>CSE</option><option value = 'ECE'>ECE</option><option value = 'ETE'>ETE</option></select><br>Semester:<input type = 'text' name = 'sem' id = 'sem'><br><input type ='submit' id = 'submit' value = 'Submit'/></form>"
  tag.innerHTML = data;
      var element = document.getElementById("messages");
   element.appendChild(tag);
   document.getElementById("message").value = " ";
   document.getElementById("submit").addEventListener("click", function()
   { var element = document.getElementById("messages");
     var usn = document.getElementById("USN").value;
   var course = document.getElementById("courses").value;
   var branch = document.getElementById("branch").value;
   var sem = document.getElementById("sem").value;

   var tag = document.createElement("div");
   tag.innerHTML = "Entered data<br>USN:"+usn+"<br>Course:"+course+"<br>Branch:"+branch+"<br>Semester:"+sem+"<br>";
   element.appendChild(tag);
   displayCategories();
   //we'll push the items items into the database here
  }, false);
}
function choose_questions(){
  var s = parseInt(n);
  if(s == 1){
    displayQuestions("child-3");
}
else if(s == 2)
    {
      displayQuestions("child-4");
  }
else if(s == 3){
  displayQuestions("child-5");
}
else if(s == 4){
  displayQuestions("child-6");
  }
  else if(s == 5){
  displayQuestions("child-7");
  }
  else if( s == 6){
  displayQuestions("child-8");
  }
else if(s == 7){
var tag  = document.createElement("div");
    var data = "Welcome, enter the number coresponding to your user category<br>1.Student<br>2.Parent<br>3.Faculty<br>4.Casual<br>5.Admin<br><br><br>";
    tag.innerHTML = data;
    var element = document.getElementById("messages");
    element.appendChild(tag);
    document.getElementById("message").value = " ";
    switchUser();
  }
  else{
    return;
}
exit();
}
function displayCategories(){
  var tag = document.createElement("div");
 var data = document.getElementById("child-2").innerHTML;
 console.log(data);
 tag.innerHTML = data;
     var element = document.getElementById("messages");
  element.appendChild(tag);
  document.getElementById("message").value = " ";
    document.getElementById("send").addEventListener("click", choose_questions);

}

function choose_answers(){
  var b = parseInt(n);
  if (b == 1){
    b = b;
  }
  else if( b==2){
    b = b+10;
  }
  else if(b==3){
    b = b+20;
  }
  else if(b==4){
    b = b+30;
  }
  else if(b==5){
    b = b+40;
  }
  else if(b==6){
    b = b+50;
  }
  else{
    return;
  }
  console.log(n);
  var tag2 = document.createElement("div");
  var data2 = document.getElementById(b).innerHTML;
  tag2.innerHTML = data2;
  element.appendChild(tag2);
  document.getElementById("message").value = " ";
}

function displayQuestions(a){
  var str = a;
  var tag1 = document.createElement("div");
 var data1=document.getElementById(str).innerHTML;
 tag1.innerHTML = data1;
     var element = document.getElementById("messages");
  element.appendChild(tag1);
  document.getElementById("send").addEventListener("click", choose_answers);

}
