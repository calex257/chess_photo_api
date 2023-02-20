import express from "express"
import { fenToBoard } from "../converter/converter";
import { boardToImage } from "../printer/printer";

const PORT = 4200;
const app = express();
app.get('/fen/:fenString*', async (req: express.Request, res: express.Response) => {
    const fen: string = req.path.substring(5);
    console.log(fen);
    const buffer: Buffer = await boardToImage(fenToBoard(fen), 1024);
    res.send(buffer);
})

app.listen(PORT);