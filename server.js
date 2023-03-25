import * as yt from "youtube-search-without-api-key";
import path from "path";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import express from "express";
import ytdl from "ytdl-core";
import fs from "fs";

const app = express();
app.use(cors());
const __dirname = path.resolve();

app.get("/api/:title", cors(), async (req, res) => {
  const videos = await yt.search(req.params.title);
 res.send(videos[0].id.videoId))
}
app.listen(
  process.env.PORT || 5002,
  console.log("server running on port 5002")
);
