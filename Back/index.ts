import server from "./src/app"
import dotenv from "dotenv"
import db from "./src/db"
import handlerUploadProductsData from "./src/utils/productsData";
dotenv.config();
const { PORT } = process.env || 3001


try {
    server.listen(PORT,async () => {
        await db;
        console.log(`Server listening on port ${PORT}`);
        await handlerUploadProductsData()
    });
} catch (error) {
    console.error("Error during startup:", error);
}
