# Font-favorite-tier3

Google Fonts Clone using React, Node, and Express


# Download/Fork 

`git clone https://github.com/duole93/fontfavorite-tier3.git`

# Install

### STEP 1: Install node modules dependancies

- There are 2 folders, client and server.
- 'cd' to each folder and install node modules dependancies

```
cd client
npm install
 ```
```
cd server
npm install
``` 

### STEP 2: Get Google Font API key from [Google Developer Font API](https://developers.google.com/fonts/docs/developer_api)

### STEP 3: Set up localhost port and add Google font API key to server side

- because react-app by default using port `3000` we need a different port for our server
- in order to do that, create `.env` file at the root level of server folder (i.e server/.env)

```
PORT=5000
REACT_APP_API_KEY=YOUR_API_KEY
```

### STEP 4: Start the project

-in terminal, nevigate to server folder and run the command

`node server.js`

-in terminal, nevigate to client folder and run the command

`npm start`


