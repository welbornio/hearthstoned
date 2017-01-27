'use strict';

var app = require('../index').app;
var MatchUp = require('./MatchUp');
var io = require('../index').io;
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
    this.namespace = io.of(`/${this.id}`);

    this.namespace.on('connection', function(socket) {
      console.log('Player connected to game:', this.id);
    });
  }

  getPlayers() {
    return this.players;
  }
}
