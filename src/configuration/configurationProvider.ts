import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";
import yaml from "js-yaml";
import { logger } from "./logger";

export default class Configuration {
    private static _instance: Configuration | null = null;
    private _config;

    private constructor(configPath?: string) {
        let configStr = fs.readFileSync(
            configPath ?? path.join(process.cwd(), "configuration.yml"),
            "utf8"
        );
        logger.debug("the raw config file has been loaded", {
            config: configStr,
        });
        configStr = configStr.replace(
            /\$\{([\w_-]+)}/g,
            (substring, varName) => {
                const varContent = process.env[varName];
                if (varContent === undefined) {
                    throw new ReferenceError(
                        `could not find an environment variable called "${varName}"`
                    );
                }
                return varContent;
            }
        );

        this._config = yaml.load(configStr);

        // we don't want to print the parsed config to not leak any secrets in it
        logger.info(
            "the config file has been processed, the configuration is now available"
        );
    }

    static getInstance() {
        if (Configuration._instance === null) {
            Configuration._instance = new Configuration();
        }
        return Configuration._instance;
    }

    static getConfig() {
        return Configuration.getInstance()._config;
    }
}

// this serves as a shorthand method to get the configuration object
export function config() {
    return Configuration.getConfig();
}
