import path from "path";
import { promises as fs } from "fs";
import { parse } from "yaml";
import { type } from "arktype";

const CONFIG = path.normalize(process.env.CONFIG || "/config/config.yaml");

const ConfigFile = type({
    title: "string",
    subtitle: "string",
    default: {
        surface: "string",
        foreground: "string == 7",
        background: "string == 7",
    },
    weather: {
        enabled: "boolean",
        timezone: "string",
        latitude: "string",
        longtitude: "string",
    },
    services: type({
        name: "string",
        items: type({
            name: "string",
            logo: "string",
            subtitle: "string",
            tag: "string",
            url: "string.url",
        }).array(),
    }).array(),
});

export type Config = typeof ConfigFile.infer;

class ConfigParser {
    static async readConfig() {
        let content = await fs.readFile(CONFIG, "utf-8");
        let config = ConfigFile(parse(content));
        if (config instanceof type.errors) {
            throw {
                type: "Config Error",
                message: `Unable to parse ${CONFIG}`,
            };
        }
        return config;
    }

    static async getCategoryEntries(config: Config, category: string) {
        const ITEMS = config.services.find(
            (element) => element.name === category,
        );
        return ITEMS !== undefined ? ITEMS.items : [];
    }

    static async getAllIcons(config: Config) {
        let icons: Set<string> = new Set();
        config.services.forEach((element) => {
            element.items.forEach((entry) => {
                icons.add(entry.logo);
            });
        });
        return icons;
    }
}

export default ConfigParser;
