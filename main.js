let url = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
var req = new Request(url);
req.headers = {"Content-type": "application/json;charset=UTF-8"};
var res = await req.loadJSON();

const lakers = new RegExp("[Ll]akers");
const pistons = new RegExp("[Pp]istons");
function checkGames(matchup, teamName){
  var bool = false;
  let found = matchup.match(teamName);
  if (found) {
    return true;
  } else {
    return false;
  }
}

function teamPlaying(todayGames, teamName){
  var index = -1;
  todayGames.forEach((game, idx) => {
    if (checkGames(game.name, teamName)) {
      index = idx;
    }
  });
  return index;
}

let w = new ListWidget();

let eventsidx = teamPlaying(res.events, pistons);
if (eventsidx > -1) {
  var game = res.events[eventsidx];
  var name = game.name
  let t = w.addText(name);
}

Script.setWidget(w);
Script.complete();

w.presentSmall();
