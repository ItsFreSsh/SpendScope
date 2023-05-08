/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v1.11.0/mod.ts";

const viewPath = `${Deno.cwd()}/views/`;

// Set Eta's configuration
configure({
  // This tells Eta to look for templates
  // In the /views directory
  views: viewPath,
});

await start(manifest);
