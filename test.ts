import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import { superoak } from "https://deno.land/x/superoak/mod.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

Deno.test("home", async () => {
    const request = await superoak(app);
    await request.get("/").expect({
        message: "Hello World!",
      });
});

Deno.test("3", async () => {
    const request = await superoak(app);
    await request.get("/fizzbuzz/3").expect({
        message: "Fizz",
    });
});

Deno.test("5", async () => {
    const request = await superoak(app);
    await request.get("/fizzbuzz/5").expect({
        message: "Buzz",
    });
});

Deno.test("15", async () => {
    const request = await superoak(app);
    await request.get("/fizzbuzz/15").expect({
        message: "FizzBuzz",
    });
});

Deno.test("16", async () => {
    const request = await superoak(app);
    await request.get("/fizzbuzz/16").expect({
        message: "16",
    });
});

Deno.test("asdf", async () => {
    const request = await superoak(app);
    await request.get("/fizzbuzz/asdf").expect({
        message: "NaN",
    });
});
