import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const port = 8000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`${"server is listening on :"} ${url}`);
});

await app.listen({ port });
