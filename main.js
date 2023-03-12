let url = "site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
var req = new Request(url);
req.headers = {"Content-type": "application/json;charset=UTF-8"};
var res = await req.loadJSON();

let games = res.events;
let w = new ListWidget();
let text = w.addText(games);


Script.setWidget(w);
Script.complete();

w.presentSmall();
