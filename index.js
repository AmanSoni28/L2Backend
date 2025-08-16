require('dotenv').config()   //import 'dotenv'

const express = require('express')
const app = express()
const port = 3000

const github = {
  "login": "AmanSoni28",
  "id": 194285649,
  "node_id": "U_kgDOC5SQUQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/194285649?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AmanSoni28",
  "html_url": "https://github.com/AmanSoni28",
  "followers_url": "https://api.github.com/users/AmanSoni28/followers",
  "following_url": "https://api.github.com/users/AmanSoni28/following{/other_user}",
  "gists_url": "https://api.github.com/users/AmanSoni28/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AmanSoni28/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AmanSoni28/subscriptions",
  "organizations_url": "https://api.github.com/users/AmanSoni28/orgs",
  "repos_url": "https://api.github.com/users/AmanSoni28/repos",
  "events_url": "https://api.github.com/users/AmanSoni28/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AmanSoni28/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aman Soni",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Hello Everyone,\r\n\r\nI am Aman Soni, and Currently pursuing MCA ( Master of Computer Application ) from the Harcourt Butler Technical University , Kanpur , UP .",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2025-01-08T18:53:34Z",
  "updated_at": "2025-07-13T14:31:22Z"
}

app.get('/', (req, res) => {       //get have a string(route) and a callback
  res.send('Hello World!')        //send response "Hello World!" 
})

app.get('/twitter', (req, res)=>{
     res.send("twitter is open")
})

app.get('/login', (req, res)=>{
     res.send("<h1>Login with userId and Password</h1>")
})
app.get('/Aman', (req, res)=>{
     res.send("<h2>My name is Aman")
})

app.get("/youtube", (req, res)=>{
   res.send("welcome to youtube")
})
app.get("/github", (req, res)=>{
   res.json(github)
})

// app.listen(port, () => {              //Listen have a variable and a callback, Listen at port:localhost:3000
//   console.log(`Example app listening on port ${port}`)         
// })

app.listen(process.env.PORT, () => {              //listen at port : localhost:4000
  console.log(`Example app listening on port ${port}`)
})






//<-------------notes--------------->
// run: npm run start

// 1.
// const express = require('express')                
// You import the Express.js library into your project.
// require('express') loads the Express module, and express here becomes a function you can call to create an application.

// 2.
// const app = express()
// You create an Express application by calling express().
// app is now your server instance, and you’ll use it to define routes and handle HTTP requests.

// 3.
// const port = 3000
// This sets the port number your server will listen on.
// When you start the server, it will be accessible at http://localhost:3000.

// 4.
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// This defines a GET route for the root URL /.
// When someone visits http://localhost:3000/ in their browser:
// req (request) → contains information about the incoming request (e.g., URL, headers).
// res (response) → used to send data back to the client.
// res.send('Hello World!') sends back plain text "Hello World!" as the response.

// 5.
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// This starts the server and tells it to listen for requests on port 3000.
// Once the server is running, it logs:
// Example app listening on port 3000
// You can now open your browser and visit http://localhost:3000 to see the output.

// 💡 In short:
// This is the simplest Express.js app
// Import Express.
// Create an app.
// Define a route for /.
// Start listening on a port.