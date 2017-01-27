'use strict';

var app = require('../index');
var MatchUp = require('./MatchUp');
var io = require('socket.io')(app);
var games = [];

app.post('/game/match', function (req, res) {
  var userId = req.body.id;
  var match = MatchUp.getMatch({id: userId});

  if (match) {
    games.push(new Game(match));
  }

  res.send({
    match: !!match ? match.matchId : match,
    poll: !match
  });
});

class Game {
  constructor(matchData) {
    this.id = matchData.id;
    this.players = matchData.players;

    this.room = io.of(`/${this.id}`);
  }

  getPlayers() {
    return this.players;
  }
}
