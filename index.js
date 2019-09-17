const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <link rel="stylesheet" href="https://devspace.cloud/quickstart.css">
        </head>
        <body>
            <img src="https://devspace.cloud/img/congrats.gif" />
            <h1>You deployed this project with DevSpace!</h1>
            <div>
                <h2>Now it's time to start the development mode:</h2>
                <ol>
                    <li>Press CTRL+C or ENTER to terminate <code>devspace open</code></li>
                    <li>Run: <code>devspace dev</code></li>
                    <li>Edit this text in <code>index.js</code> and save the file</li>
                    <li>Check the logs to see how <code>nodemon</code> recompiles and restarts this project</li>
                    <li>Reload browser to see the changes</li>
                </ol>
            </div>
        </body>
    </html>
    `)
})

app.listen(port, () => console.log("Example app listening on port " + port))
