require "dotenv"
  .config()
express = require "express"
path = require "path"

app = express()
port = process.env.PORT || 8000

###
app.use express.static "public"
###
app.get "*", (req, res) => res.sendFile path.join "#{__dirname}/public/index.html"

app.listen port, -> console.log port
