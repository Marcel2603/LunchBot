import { z } from "zod";

// regex courtesy of https://regexr.com/3bvl1
const REGEX_CRON =
    /^((?:\*|[0-5]?[0-9](?:(?:-[0-5]?[0-9])|(?:,[0-5]?[0-9])+)?)(?:\/[0-9]+)?)\s+((?:\*|(?:1?[0-9]|2[0-3])(?:(?:-(?:1?[0-9]|2[0-3]))|(?:,(?:1?[0-9]|2[0-3]))+)?)(?:\/[0-9]+)?)\s+((?:\*|(?:[1-9]|[1-2][0-9]|3[0-1])(?:(?:-(?:[1-9]|[1-2][0-9]|3[0-1]))|(?:,(?:[1-9]|[1-2][0-9]|3[0-1]))+)?)(?:\/[0-9]+)?)\s+((?:\*|(?:[1-9]|1[0-2])(?:(?:-(?:[1-9]|1[0-2]))|(?:,(?:[1-9]|1[0-2]))+)?)(?:\/[0-9]+)?)\s+((?:\*|[0-7](?:-[0-7]|(?:,[0-7])+)?)(?:\/[0-9]+)?)$/;

// remember to run `yarn generate-config-schema` when updating this
export const configurationSchema = z.object({
    $schema: z.string(),
    database: z.object({
        host: z.string(),
        user: z.string(),
        password: z.string(),
        table: z.string(),
    }),
    schedule: z.object({
        voting: z.object({
            begin: z.string().regex(REGEX_CRON),
            end: z.string().regex(REGEX_CRON),
        }),
    }),
});

export type ConfigurationSchema = z.infer<typeof configurationSchema>;
