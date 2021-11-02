const playerUtils = require('./src/playerUtils.js')
const roomUtils = require('./src/roomUtils.js')
const express = require('express')
const app = express()


/**
 * Create a token for a new player host, a room and local save the new player on room
 * @returns {JSON} The player created
 */
app.get('/createID', (req,res) => {
    res.status(200).json(playerUtils.createNewMasterPlayer(req.headers.name)) ;
})


/**
 * Create a token for a new player and join the room of host 
 * @returns {JSON} The player created
 */
app.get('/join/:id', (req,res) => {
    try {
        res.status(200).json(playerUtils.joinMaster(req.headers.name, req.params.id)) ;
    } catch (error) {
        switch (error) {
            case 'Room undifined':
                res.status(404).send('This room does not exist');
                break;
        
            default:
                break;
        }
    }
})


/**
 * Get players of all rooms existing
 * @returns {JSON} Tokens of rooms and his players
 */
app.get('/rooms', (req,res) => {
    res.status(200).json(roomUtils.detailsRooms()) ;
})


/**
 * Get details of a room by his token
 * @returns {JSON} The room
 */
app.get('/room/:id', (req,res) => {
    try {
        res.status(200).json(roomUtils.detailsRoom(req.params.id)) ;
    } catch (error) {
        switch (error) {
            case 'Room undifined':
                res.status(404).send('This room does not exist');
                break;
        
            default:
                break;
        }
    }
})


/**
 * Remove a room from data if exist
 */
app.delete('/room/:id', (req,res) => {
   if (roomUtils.removeRoom(req.params.id)) {
       res.status(200).send('This room was correctly removed') ;
   } else {
       res.status(404).send('This room does not exist');
       
   }
})

app.listen(8080, () => {
    console.log(`Serveur à l'écoute`) ;
})