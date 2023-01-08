const express = require("express");
const app = express();
const port = 3000;
var morgan = require("morgan");
app.use(morgan("combined"));
app.get("/trang-chu", (req, res) => {
  res.send("<h1>Xin chào</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//Cài handlebars templates :https://www.youtube.com/watch?v=lpbl2qQXbDo&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=9
