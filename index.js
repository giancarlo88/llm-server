require('dotenv').config()
const app = require('./app')

app.listen(8888, () => console.log('Application is listening on port 8888!'))
