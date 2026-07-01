import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { serverConfig } from "./config/serverConfig.js";
import { healthRouter } from "./routes/health.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDistPath = path.resolve(__dirname, "../../web/dist");
const indexHtmlPath = path.join(webDistPath, "index.html");

const app = express();

app.disable("x-powered-by");
app.use(healthRouter);
app.use(express.static(webDistPath, { index: false, maxAge: "1h" }));

app.get("*", (_req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(serverConfig.port, () => {
  console.log(`Hof-Lebensgemeinschaft Hamburg server running on http://localhost:${serverConfig.port}`);
});
