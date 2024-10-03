const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({
  extended: true
}))

app.post('/', (req, res) => {
    console.log(req.body)
    res.send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Start IoT Connector
// This will execute IoT Connector service in background
// To keep the terminal window open, run "start IoTConnector"
const { exec } = require('child_process');
exec('IoTConnector', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});