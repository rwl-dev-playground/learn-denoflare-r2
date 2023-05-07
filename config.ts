import type { Config } from "denoflare/common/config.ts";
import "std/dotenv/load.ts";

const config: Config = {
  scripts: {
    "learn-denoflare-r2": {
      path: "main.ts",
      localPort: 3030,
    },
  },
  profiles: {
    account1: {
      accountId: Deno.env.get("ACCOUNT_ID") || "",
      apiToken: Deno.env.get("API_TOKEN") || "",
    },
  },
};

const encoder = new TextEncoder();
const data = encoder.encode(JSON.stringify(config));
Deno.writeFile(".denoflare", data);
