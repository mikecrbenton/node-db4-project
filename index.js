const express = require("express")
const recipesRouter = require("./routers/recipesRouter")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use(recipesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "This is an error caught by next()",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
