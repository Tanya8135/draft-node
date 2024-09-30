# Start of work

1. Create repository (with `.gitignore` (vs code))
2. Clone repository
3. Open VS Code
4. Open nerminal (ctrl + ~)

- Run the command

```
npm init -y
```

5. Execute the first commit in the terminal
6. Set up Express:

```
npm install express
```

7. Create file: `server.js`
8. Create file` app.js`
9. Startup project:
   node server.js

# Postman

1. Open application.
2. Copy link: `http://localhost:3000/` -> enter 'Send'put on screen "Hellow, World!"

# Nodemon

1. Create nodemon: npm i nodemon -D
2. In package.json add the following to scripts:
   ``"scripts": {
   "start": "node ./server.js",
   "start:dev": "nodemon ./server.js"
   },

3. Run the development server:
   npm run start:dev

(If the setup uses a file server.js, then in the path replace ./bin/www with ./server.js)
