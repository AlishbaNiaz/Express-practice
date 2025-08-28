
const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/:username/:ID", (req, res) => {
  let {username,ID}=req.params;
  let code=`<h1>WELCOME TO THE PAGE OF @${username}</h1>`;
  res.send(code);
});
app.get("/search", (req, res) => {
  let {q}=req.query;
  let code=`<h1>Here are the Search Results for : ${q}</h1>`;
  if(!q)
  {res.send("<h1>No Search Resut Found</h1>");}
  res.send(code);
});
app.get("/", (req, res) => {
  res.send("✅ Hello , You requested the root path");
});

app.get("/apple", (req, res) => {
  res.send("🍎 You requested the Apple path");
});

app.get("/orange", (req, res) => {
  res.send("🍊 You requested the Orange path");
});

app.post("/", (req, res) => {
  res.send("📩 You requested the POST root path");
});

// Catch-all (for wrong requests)
app.use((req, res) => {
  res.send("❌ You entered a wrong request path.");
});
 
// app.use((req, res) => {
//   let code = "<h1>FRUITS</h1><ul><li>Apple</li><li>Banana</li></ul>";
//   res.send(code);
//   console.log("Request Received");
// });
