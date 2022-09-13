const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>DevSpace Demo</title>
            <link rel="stylesheet" href="https://devspace.sh/css/quickstart.css">
        </head>
        <body>
            <section>
                <div class="container">
                    <div class="left">
                        <h1>You deployed this project with<img class="logo" src="https://static.loft.sh/branding/logos/devspace/horizontal/mono/devspace_horizontal_mono.svg" alt="DevSpace" /></h1>
                        <h2>Now it's time to code:</h2>
                        <ol>
                            <ul class="dots">
                                <li class="red"></li>
                                <li class="yellow"></li>
                                <li class="blue"></li>
                            </ul>
                            <li>Edit this text in <code>index.js</code> and save the file</li>
                            <li>Check the logs to see how DevSpace restarts your container</li>
                            <li>Reload browser to see the changes</li>
                        </ol>
                    </div>
                    <div><img src="https://static.loft.sh/devspace/quickstarts/devspace-astronaut.gif" /></div>
                </div>
            </section>
        </body>
    </html>
    `)
})

app.listen(port, () => console.log("Example app listening on http://localhost:" + port))
