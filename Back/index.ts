import server from "./src/app"
import dotenv from "dotenv"
import db from "./src/db"
dotenv.config();
const { PORT } = process.env || 3001


try {
    db;
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
} catch (error) {
    console.error("Error during startup:", error);
}
