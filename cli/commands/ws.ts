import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    io.emit("account:receive", JSON.stringify({ message: "hello" }));
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("NOTFOUND");
});

const io = new Server(httpServer, {
  path: "/api/socket",
  addTrailingSlash: false,
  cors: { origin: "*", methods: ["GET", "POST"] },
});

const clients: Set<Socket> = new Set();

io.on("connection", (socket) => {
  clients.add(socket);

  socket.on("message", (event) => {
    console.log("message", event);
  });

  socket.on("close", () => {
    clients.delete(socket);
  });
});

httpServer.listen(4000);
