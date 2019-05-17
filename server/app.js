const express = require("express");
const app = express();
app.get("/", function(req, res) {
  res.send("<h1>Hello world</h1>");
});

app.get("/data", (req, res) => {
  res.json({ name: "imooc", type: "IT React app" });
});
app.listen(9000, function() {
  console.log(`Node app start at port 9000`);
});
