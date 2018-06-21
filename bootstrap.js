'use strict'

/**
 * Module dependencies
 */
let express = require("express")
let app     = express()
let path    = require("path")

let port = process.env.port || 8000

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules/angular-socialshare/dist'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port)
console.log('App listening on port ', port)

