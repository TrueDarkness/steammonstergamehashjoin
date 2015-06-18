// ==UserScript==
// @name Hash Join for Steam's Monster Game
// @namespace https://github.com/TrueDarkness/steammonstergamehashjoin
// @description A script that runs the Steam Monster Minigame for you.
// @version 1.0
// @match *://steamcommunity.com/minigame
// @match *://steamcommunity.com/minigame/
// @grant none
// @updateURL https://github.com/TrueDarkness/steammonstergamehashjoin/raw/master/smghj.js
// @downloadURL https://github.com/TrueDarkness/steammonstergamehashjoin/raw/master/smghj.js
// ==/UserScript==

if(window.location.hash) {
  JoinGame(window.location.hash.substring(1));
}
