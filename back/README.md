# Installation
## Information
The default **port** is **8080**.

## Local run
Ensure you have node 10 or higher.
1. `npm install`
2. `npm start`

# API Calls

## 1. Create a host
### Comment :

- Create a token for a new player host, a room and local save the new player on room
- **Returns 200** : **json** of the player created

### Local : 
```
curl -X GET http://localhost:8080/createID
```

### Response exemple :
```json
{
	"role":"host",
	"host":"MRADwXIjXl",
	"token":"MRADwXIjXl"
}
```

## 2. Join a host
### Comment :

- Create a token for a new player and join the room of host 
- **Returns 200** : **json** of the player created
- **Returns 404** : Room undifined

### Local : 
```
curl -X GET http://localhost:8080/join/:id
```

### Response exemple :
```json
{
	"role":"join",
	"host":"MRADwXIjXl",
	"token":"lowOQSgGmd"
}
```

## 3. Get all rooms
### Comment :

- Get players of all rooms existing
- **Returns 200** : **json** of rooms and his players

### Local : 
```
curl -X GET http://localhost:8080/rooms
```

### Response exemple :
```json
{
	"roomsToken":["MRADwXIjXl"],
	"rooms": 
	[
		{
			"token":"MRADwXIjXl",
			"players":"[\"MRADwXIjXl\",\"lowOQSgGmd\"]"
		}
	]
}
```

## 4. Get a room
### Comment :

- Get details of a room by his token
- **Returns 200** : **json** of a room details
- **Returns 404** : Room undifined

### Local : 
```
curl -X GET http://localhost:8080/room/:id
```

### Response exemple :
```json
{"token":"MRADwXIjXl","players":"[\"MRADwXIjXl\",\"lowOQSgGmd\""}
```

## 5. Delete a room
### Comment :

- Remove a room from data if exist
- **Returns 200** : This room was correctly removed
- **Returns 404** : Room undifined

### Local : 
```
curl -X GET http://localhost:8080/room/:id
```

### Response exemple :
```
This room was correctly removed
```