import server from "./src/app"
import dotenv from "dotenv"
import db from "./src/db"
import handlerUploadProductsData from "./src/utils/productsData";
dotenv.config();
const { PORT } = process.env || 3001


try {
    server.listen(PORT,async () => {
        console.log(`Server listening on port ${PORT}`);
        handlerUploadProductsData()
        await db;
    });
} catch (error) {
    console.error("Error during startup:", error);
}
