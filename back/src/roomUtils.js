const allRooms = new Map() ;

/**
 * Create a new room with just the host in
 * @param {String} token The token of host
 * @returns {JSON} The room created in format {token:String, players:[String], currentWord:String = ''}
 */
function createRoom(token) {
    const room = {    
        token : token,   
        players : [token], 
        currentWord : ''
    };
    allRooms.set(token,room) ;
    return room ;
}

/**
 * Add a player (his token) in a room.
 * Throw 'Room undifined' if the token of room not exist.
 * @param {String} roomToken 
 * @param {String} playerToken 
 * @returns {JSON} The room modified in format {token:String, players:[String], currentWord:String}
 */
function joinRoom(roomToken, playerToken) {
    const room = allRooms.get(roomToken)
    if (room == undefined) {
        throw 'Room undifined';
    }
    room.players.push(playerToken) ;
    allRooms.set(roomToken, room) ;
    return room;
}

/**
 * Remove a room by his host
 * @param {String} token The token of the room's host to remove
 * @returns {Boolean}
 */
function removeRoom(token) {
    return allRooms.delete(token) ;
}

function detailsRoom(token) {
    const room = allRooms.get(token) ;
    if (room == undefined) {
        throw 'Room undifined' ;
    }
    const json = {
        token: room.token,
        players: JSON.stringify(room.players)
    }
    return json ;
}

function detailsRooms() {
    const json = 
    {
        roomsToken : [],
        rooms : []
    }
    
    for (let value of allRooms.values()){
        json.roomsToken.push(value.token) ;
        json.rooms.push({
            token: value.token,
            players: JSON.stringify(value.players)
        }) ;
    }
    return json ;
}

module.exports = {createRoom, removeRoom, joinRoom, detailsRooms, detailsRoom} ;