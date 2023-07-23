const app = require("./server")

const port = process.env.PORT || 7070;

app.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
