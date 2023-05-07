import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";
import yaml from "js-yaml";
import { logger } from "./logger";

export default class Configuration {
    private static _instance: Configuration | null = null;
    private _config;

    private constructor(config) {
        this._config = config;
    }

    static init(configPath?: string) {
        let configStr = fs.readFileSync(
            configPath ?? path.join(process.cwd(), "configuration.yml"),
            "utf8"
        );
        logger.debug("the raw config file has been loaded", {
            config: configStr,
        });
        configStr = configStr.replace(
            /\$\{([\w_-]+)}/,
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

        const config = yaml.load(configStr);
        this._instance = new Configuration(config);

        // we don't want to print the parsed config to not leak any secrets in it
        logger.info(
            "the config file has been processed, the configuration is now available"
        );
    }

    static getInstance() {
        if (Configuration._instance instanceof Configuration)
            return Configuration._instance;

        throw new Error(
            "The configuration instance has not yet been instantiated. This is required to be able to use it."
        );
    }
}
