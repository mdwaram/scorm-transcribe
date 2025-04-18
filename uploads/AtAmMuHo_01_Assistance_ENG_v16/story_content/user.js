function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mzS5Itqb1g":
        Script1();
        break;
      case "6ZWtClzAw5t":
        Script2();
        break;
      case "5jYVIkCQxcN":
        Script3();
        break;
      case "5rH0VG3hNZ0":
        Script4();
        break;
      case "61Me5tKDH61":
        Script5();
        break;
      case "6F3JHWlFtWg":
        Script6();
        break;
      case "6VP5yK5tvVv":
        Script7();
        break;
      case "5qw2pugZ2J5":
        Script8();
        break;
      case "6aTOatCRjB0":
        Script9();
        break;
      case "5vBWmrfxkHn":
        Script10();
        break;
      case "5m9o8l1xim7":
        Script11();
        break;
  }
}

function Script1()
{
  //FIRST SLIDE OF A TOPIC
//exclude from Getting Started
//START
var player = GetPlayer();

//Get current chapter and topic
var currentTopic = player.GetVar('currentTopic');

// Dynamic variables based on currentChapter currentTopic
var topicStatus = "topic" + currentTopic + "Status";

//Dynamic values based on dynamic variables
var topicStatusValue = player.GetVar(topicStatus);

// trigger logic START
if(topicStatusValue === 0){
  player.SetVar(topicStatus, 1);
}
// trigger logic END
//END
}

function Script2()
{
  //LAST SLIDE OF A TOPIC/SINGLE SLIDE TOPIC/SUMMARY
//exclude from Getting Started
//START
var player = GetPlayer();

//Get current chapter and topic
var currentTopic = player.GetVar('currentTopic');

// Dynamic variables based on currentChapter currentTopic
var topicStatus = "topic" + currentTopic + "Status";

//Dynamic values based on dynamic variables
var topicStatusValue = player.GetVar(topicStatus);

// trigger logic START

//sets topic status based on currentTopic
player.SetVar(topicStatus, 2);

// Get number of topics
var topicsNum = player.GetVar('topicsNum') - 1;
console.log('topicsNum', topicsNum);
//Get all topic status in an array
var topicStatusArr = [
  player.GetVar('topic1Status'),
  player.GetVar('topic2Status'),
  player.GetVar('topic3Status'),
  player.GetVar('topic4Status'),
  player.GetVar('topic5Status'),
  player.GetVar('topic6Status'),
  player.GetVar('topic7Status'),
  player.GetVar('topic8Status'),
  player.GetVar('topic9Status'),
  player.GetVar('topic10Status'),
  player.GetVar('topic11Status')
];
console.log('topicStatusArr before', topicStatusArr);
//Loop through topicStatusArr up to the index value of topicsNum
//push into new array called currentModTopicStatus
var currentModTopicStatus = [];

for (var i = 0; i < topicsNum; i++) {
  currentModTopicStatus.push(topicStatusArr[i]);
}

console.log(currentModTopicStatus);
//test each value in currentModTopicStatus
function currentModTopicStatusCheck(currentValue) {
  return currentValue === 2;
}
console.log('currentModTopicStatus', currentModTopicStatus.every(currentModTopicStatusCheck));
//set these variables based on conditions checking topic status in current topic
if(currentModTopicStatus.every(currentModTopicStatusCheck) === true){
  player.SetVar('viewedAllContent', true);
}else{
  console.log('they all are not equal');
}

// trigger logic END
//END
}

function Script3()
{
  //FIRST SLIDE OF A TOPIC
//exclude from Getting Started
//START
var player = GetPlayer();

//Get current chapter and topic
var currentTopic = player.GetVar('currentTopic');

// Dynamic variables based on currentChapter currentTopic
var topicStatus = "topic" + currentTopic + "Status";

//Dynamic values based on dynamic variables
var topicStatusValue = player.GetVar(topicStatus);

// trigger logic START
if(topicStatusValue === 0){
  player.SetVar(topicStatus, 1);
}
// trigger logic END
//END
}

function Script4()
{
  //LAST SLIDE OF A TOPIC/SINGLE SLIDE TOPIC/SUMMARY
//exclude from Getting Started
//START
var player = GetPlayer();

//Get current chapter and topic
var currentTopic = player.GetVar('currentTopic');

// Dynamic variables based on currentChapter currentTopic
var topicStatus = "topic" + currentTopic + "Status";

//Dynamic values based on dynamic variables
var topicStatusValue = player.GetVar(topicStatus);

// trigger logic START

//sets topic status based on currentTopic
player.SetVar(topicStatus, 2);

// Get number of topics
var topicsNum = player.GetVar('topicsNum') - 1;
console.log('topicsNum', topicsNum);
//Get all topic status in an array
var topicStatusArr = [
  player.GetVar('topic1Status'),
  player.GetVar('topic2Status'),
  player.GetVar('topic3Status'),
  player.GetVar('topic4Status'),
  player.GetVar('topic5Status'),
  player.GetVar('topic6Status'),
  player.GetVar('topic7Status'),
  player.GetVar('topic8Status'),
  player.GetVar('topic9Status'),
  player.GetVar('topic10Status'),
  player.GetVar('topic11Status')
];
console.log('topicStatusArr before', topicStatusArr);
//Loop through topicStatusArr up to the index value of topicsNum
//push into new array called currentModTopicStatus
var currentModTopicStatus = [];

for (var i = 0; i < topicsNum; i++) {
  currentModTopicStatus.push(topicStatusArr[i]);
}

console.log(currentModTopicStatus);
//test each value in currentModTopicStatus
function currentModTopicStatusCheck(currentValue) {
  return currentValue === 2;
}
console.log('currentModTopicStatus', currentModTopicStatus.every(currentModTopicStatusCheck));
//set these variables based on conditions checking topic status in current topic
if(currentModTopicStatus.every(currentModTopicStatusCheck) === true){
  player.SetVar('viewedAllContent', true);
}else{
  console.log('they all are not equal');
}

// trigger logic END
//END
}

function Script5()
{
  //FIRST SLIDE OF A TOPIC
//exclude from Getting Started
//START
var player = GetPlayer();

//Get current chapter and topic
var currentTopic = player.GetVar('currentTopic');

// Dynamic variables based on currentChapter currentTopic
var topicStatus = "topic" + currentTopic + "Status";

//Dynamic values based on dynamic variables
var topicStatusValue = player.GetVar(topicStatus);

// trigger logic START
if(topicStatusValue === 0){
  player.SetVar(topicStatus, 1);
}
// trigger logic END
//END
}

function Script6()
{
  //LAST SLIDE OF A TOPIC/SINGLE SLIDE TOPIC/SUMMARY
//exclude from Getting Started
//START
var player = GetPlayer();

//Get current chapter and topic
var currentTopic = player.GetVar('currentTopic');

// Dynamic variables based on currentChapter currentTopic
var topicStatus = "topic" + currentTopic + "Status";

//Dynamic values based on dynamic variables
var topicStatusValue = player.GetVar(topicStatus);

// trigger logic START

//sets topic status based on currentTopic
player.SetVar(topicStatus, 2);

// Get number of topics
var topicsNum = player.GetVar('topicsNum') - 1;
console.log('topicsNum', topicsNum);
//Get all topic status in an array
var topicStatusArr = [
  player.GetVar('topic1Status'),
  player.GetVar('topic2Status'),
  player.GetVar('topic3Status'),
  player.GetVar('topic4Status'),
  player.GetVar('topic5Status'),
  player.GetVar('topic6Status'),
  player.GetVar('topic7Status'),
  player.GetVar('topic8Status'),
  player.GetVar('topic9Status'),
  player.GetVar('topic10Status'),
  player.GetVar('topic11Status')
];
console.log('topicStatusArr before', topicStatusArr);
//Loop through topicStatusArr up to the index value of topicsNum
//push into new array called currentModTopicStatus
var currentModTopicStatus = [];

for (var i = 0; i < topicsNum; i++) {
  currentModTopicStatus.push(topicStatusArr[i]);
}

console.log(currentModTopicStatus);
//test each value in currentModTopicStatus
function currentModTopicStatusCheck(currentValue) {
  return currentValue === 2;
}
console.log('currentModTopicStatus', currentModTopicStatus.every(currentModTopicStatusCheck));
//set these variables based on conditions checking topic status in current topic
if(currentModTopicStatus.every(currentModTopicStatusCheck) === true){
  player.SetVar('viewedAllContent', true);
}else{
  console.log('they all are not equal');
}

// trigger logic END
//END
}

function Script7()
{
  //LAST SLIDE OF A TOPIC/SINGLE SLIDE TOPIC/SUMMARY
//exclude from Getting Started
//START
var player = GetPlayer();

//Get current chapter and topic
var currentTopic = player.GetVar('currentTopic');

// Dynamic variables based on currentChapter currentTopic
var topicStatus = "topic" + currentTopic + "Status";

//Dynamic values based on dynamic variables
var topicStatusValue = player.GetVar(topicStatus);

// trigger logic START

//sets topic status based on currentTopic
player.SetVar(topicStatus, 2);

// Get number of topics
var topicsNum = player.GetVar('topicsNum') - 1;
console.log('topicsNum', topicsNum);
//Get all topic status in an array
var topicStatusArr = [
  player.GetVar('topic1Status'),
  player.GetVar('topic2Status'),
  player.GetVar('topic3Status'),
  player.GetVar('topic4Status'),
  player.GetVar('topic5Status'),
  player.GetVar('topic6Status'),
  player.GetVar('topic7Status'),
  player.GetVar('topic8Status'),
  player.GetVar('topic9Status'),
  player.GetVar('topic10Status'),
  player.GetVar('topic11Status')
];
console.log('topicStatusArr before', topicStatusArr);
//Loop through topicStatusArr up to the index value of topicsNum
//push into new array called currentModTopicStatus
var currentModTopicStatus = [];

for (var i = 0; i < topicsNum; i++) {
  currentModTopicStatus.push(topicStatusArr[i]);
}

console.log(currentModTopicStatus);
//test each value in currentModTopicStatus
function currentModTopicStatusCheck(currentValue) {
  return currentValue === 2;
}
console.log('currentModTopicStatus', currentModTopicStatus.every(currentModTopicStatusCheck));
//set these variables based on conditions checking topic status in current topic
if(currentModTopicStatus.every(currentModTopicStatusCheck) === true){
  player.SetVar('viewedAllContent', true);
}else{
  console.log('they all are not equal');
}

// trigger logic END
//END
}

function Script8()
{
  var player = GetPlayer();

var ShowMenu = player.GetVar('showMenu');
console.log('Button clicked but ShowMenu is = ' + ShowMenu);

if (!ShowMenu)
{
  console.log('Show Menu is: ' + ShowMenu);
  ShowMenu = true;
  player.SetVar('showMenu', ShowMenu);
  player.SetVar('showResources', false);
  player.SetVar('showHelp', false);
  console.log('Show Menu is now: ' + ShowMenu);
}else{
  console.log('Show Menu is: ' + ShowMenu);
  ShowMenu = false;
  player.SetVar('showMenu', ShowMenu);
  console.log('Show Menu is now: ' + ShowMenu);
}
}

function Script9()
{
  var player = GetPlayer();

var ShowResources = player.GetVar('showResources');
console.log('Button clicked but ShowResources is = ' + ShowResources);

if (!ShowResources)
{
  console.log('Show Resources is: ' + ShowResources);
  ShowResources = true;
  player.SetVar('showResources', ShowResources);
  player.SetVar('showMenu', false);
  player.SetVar('showHelp', false);
  console.log('Show Resources is now: ' + ShowResources);
}else{
  console.log('Show Resources is: ' + ShowResources);
  ShowResources = false;
  player.SetVar('showResources', ShowResources);
  console.log('Show Resources is now: ' + ShowResources);
}
}

function Script10()
{
  //START
var player = GetPlayer();

//Get current chapter and topic
var QuestionID = player.GetVar('questionID');
var kcResource = player.GetVar('kcTranslation');
var courseResource = player.GetVar('courseTranslation');

if (player.GetVar('questionID') == "none"){
window.open("story_content/external_files/" +courseResource);
}else{
window.open("story_content/external_files/" +kcResource +"?id="+QuestionID);
};
}

function Script11()
{
  var player = GetPlayer();

var ShowHelp = player.GetVar('showHelp');
console.log('Button clicked but ShowHelp is = ' + ShowHelp);

if (!ShowHelp)
{
  console.log('Show Help is: ' + ShowHelp);
  ShowHelp = true;
  player.SetVar('showHelp', ShowHelp);
  player.SetVar('showResources', false);
  player.SetVar('showMenu', false);
  console.log('Show Help is now: ' + ShowHelp);
}else{
  console.log('Show Help is: ' + ShowHelp);
  ShowHelp = false;
  player.SetVar('showHelp', ShowHelp);
  console.log('Show Help is now: ' + ShowHelp);
}
}

