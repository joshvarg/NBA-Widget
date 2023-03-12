let url = "site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
var req = new Request(url);
req.headers = {"Content-type": "application/json;charset=UTF-8"};
var res = await req.loadJSON();

let games = res.events;
let text = "";
games.forEach(game => text.concat(game.name, " "));
let w = new ListWidget();
let t = w.addText(text);


Script.setWidget(w);
Script.complete();

w.presentSmall();
