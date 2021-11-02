const roomUtils = require('./roomUtils.js')

/**
 * Generate a new token in length of 10
 * @returns String
 */
const generateNewToken = function (){return generateToken(10)}

/**
 * Create a host player and a new room
 * @param {String} name Name of the player
 * @returns {JSON} In format {name:String, role:String = 'host', host:String, token:String}
 */
function createNewMasterPlayer(name) {
    const token = generateNewToken() ;
    roomUtils.createRoom(token) ;
    return createPlayer(name, 'host', token, token) ;
}

/**
 * Create a player who will join the game
 * @param {String} name Name of the player 
 * @param {String} host Token of the room's host 
 * @returns {JSON} In format {name:String, role:String = 'join', host:String, token:String} OR Throw an error if it can't join.
 */
function joinMaster(name, host) {
    const token = generateNewToken() ;
    try {
        roomUtils.joinRoom(host, token) ;
    } catch (error) {
        console.log(error) ;
        throw error ;
    }
    return createPlayer(name, 'join', host, token) ;
}

/**
 * Create a player with all field specified
 * @param {String} name Name of the player
 * @param {String} role Role of the player between 'host' and 'join'
 * @param {String} host Token of the room's host
 * @param {String} token Token of the player
 * @returns {JSON} In format {name:String, role:String, host:String, token:String}
 */
function createPlayer(name, role, host, token) {
    return {
        name: name,
        role: role,
        host: host,
        token : token
    };
}

/**
 * Generate token of specified length
 * @param {Number} n The desired number of characters
 * @returns {String} The token generate
 */
function generateToken(n) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for(var i = 0; i < n; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}

module.exports = {createNewMasterPlayer, joinMaster, createNewMasterPlayer} ;
