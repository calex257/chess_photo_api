# Chess photo api

# Installation

Run
```
npm install
```
to setup the necessary dependencies of the project.

After the installation is finished, you can start the API via the following command
```
npm start
```

# Usage

The API will return a visual representation of the fen sent via the URL. The URL
format should be the following:
```
http://localhost:4200/fen/{Actual FEN string}
```
where the actual FEN string is formed of 8 sections separated by the '/' character.

Additional information cannot be sent via this method at this time and the FEN
must be valid.