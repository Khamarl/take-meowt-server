// File to run the server on
const { app } = require("./app")

const port = 3000; // hardcoded port

app.listen(port, () => {
    console.log(`App listening on port ${port}...`)
})
