import { zodToJsonSchema } from "zod-to-json-schema";
import { configurationSchema } from "./configuration/configuration.schema";
import * as fs from "fs";

const schemaJson = zodToJsonSchema(
    configurationSchema,
    "LunchBot configuration schema"
);

const schemaStr = JSON.stringify(schemaJson, null, 4);
fs.writeFileSync("./schemas/configuration-schema.json", schemaStr);

console.log("Schema successfully updated.");
