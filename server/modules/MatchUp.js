'use strict';

var matchmaking = [];

module.exports = {
  getMatch: getMatch
};

function getMatch(user) {
  for (let i = 0; i < matchmaking.length; i++) {
    if (matchmaking[i].id != user.id) {
      return {
        matchId: `${matchmaking[i].id}-${user.id}-${new Date().getTime()}`,
        players: [matchmaking[i], user]
      };
    }
  }

  return false;
}
