require('dotenv').config()
const app = require('./app')

app.listen(process.env.PORT , () => console.log(`Application is listening on port ${process.env.PORT} !`))
