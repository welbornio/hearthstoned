'use strict';

var matchmaking = [];

module.exports = {
  getMatch: getMatch
};

function getMatch(user) {
  var _user;
  for (let i = 0; i < matchmaking.length; i++) {
    _user = matchmaking[i];
    if (_user.id != user.id) {
      removeUser(_user);
      removeUser(user);
      return {
        matchId: `${_user.id}-${user.id}-${new Date().getTime()}`,
        players: [_user, user]
      };
    }
  }
  addUserToQueue(user);
  return false;
}

function addUserToQueue(user) {
  for (let i = 0; i < matchmaking.length; i++) {
    if (matchmaking[i].id == user.id) {
      return;
    }
  }
  matchmaking.push(user);
}

function removeUser(user) {
  for (let i = 0; i < matchmaking.length; i++) {
    if (matchmaking[i].id == user.id) {
      matchmaking.splice(i, 1);
      break;
    }
  }
}
