const mongoose = require('mongoose')
const app = require('./app')


const DB_HOST = "mongodb+srv://Maryna:QTCRPeimV5JLhKK7@cluster0.0voe4js.mongodb.net/db-contacts"

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
  .then(() => {
		app.listen(3000, () => {
			console.log("Database connection successful");
		});
	})
	.catch(error => {
		console.log(error.message);
		process.exit(1);
	});
