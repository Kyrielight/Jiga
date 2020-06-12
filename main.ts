import denjucks from "https://deno.land/x/denjucks/mod.js";
import { Application } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";

// @ts-ignore
const __dirname = new URL('.', import.meta.url).pathname;

// Configure default Denjucks folder to "HTML"
// @ts-ignore 
denjucks.configure(__dirname + "html");

// Create a new application, defaults to 0.0.0.0:3000
const app = new Application();

app.get("/", (ctx) => {
    // @ts-ignore
    ctx.res.body = denjucks.render("index.html", {text: "World"})
    return true;
});

await app.run();
