const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <link rel="stylesheet" href="https://devspace.sh/css/quickstart.css">
        </head>
        <body>
            <img src="https://devspace.sh/images/congrats.gif" />
            <h1>We deployed this project with DevSpace!!</h1>
            <div>
                <h2>Now it's time to code</h2>
            </div>
        </body>
    </html>
    `)
})

app.listen(port, () => console.log("Example app listening on http://localhost:" + port))
