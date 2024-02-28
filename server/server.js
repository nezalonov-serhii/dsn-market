const next = require("next");
const express = require("express");
const connectDB = require("./config/db_connect");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const productRouter = require("./routes/api/productRoutes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
   const server = express();
   const formatsLogger = server.get("env") === "development" ? "dev" : "short";

   server.use(express.static("public"));
   server.use(logger(formatsLogger));
   server.use(cors());
   server.use(express.json());

   server.use("/api/products", productRouter);

   // Залиште цей обробник останнім, це дозволить Next.js обробляти всі інші маршрути
   server.all("*", (req, res) => {
      return handle(req, res);
   });

   server.use((err, req, res, next) => {
      const { status = 500, message = "Server error" } = err;
      res.status(status).json({
         message,
      });
   });

   connectDB();

   const port = process.env.PORT || 3000;
   server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
   });
});
