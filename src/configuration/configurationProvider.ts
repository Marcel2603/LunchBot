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
        const rawConfig = fs.readFileSync(
            configPath ?? path.join(process.cwd(), "configuration.yml"),
            "utf8"
        );
        logger.debug("the raw config file has been loaded", {
            config: rawConfig,
        });
        const config = yaml.load(rawConfig);
    }

    static getInstance() {
        if (Configuration._instance instanceof Configuration)
            return Configuration._instance;

        throw new Error(
            "The configuration instance has not yet been instanced. This is required to be able to use it."
        );
    }
}
