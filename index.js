require('dotenv').config()
const app = require('./app')

app.listen(8081, () => console.log(`Application is listening on port ${process.env.PORT} !`))
