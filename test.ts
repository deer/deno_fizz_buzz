import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import { superoak } from "https://deno.land/x/superoak/mod.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

Deno.test("home", async () => {
  const request = await superoak(app);
  await request.get("/").expect("Hello World!\n");
});

Deno.test("3", async () => {
  const request = await superoak(app);
  await request.get("/fizzbuzz/3").expect("Fizz\n");
});

Deno.test("5", async () => {
  const request = await superoak(app);
  await request.get("/fizzbuzz/5").expect("Buzz\n");
});

Deno.test("15", async () => {
  const request = await superoak(app);
  await request.get("/fizzbuzz/15").expect("FizzBuzz\n");
});

Deno.test("16", async () => {
  const request = await superoak(app);
  await request.get("/fizzbuzz/16").expect("16\n");
});

Deno.test("asdf", async () => {
  const request = await superoak(app);
  await request.get("/fizzbuzz/asdf").expect("NaN\n");
});
