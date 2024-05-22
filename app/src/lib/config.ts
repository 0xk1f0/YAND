import path from "path";
import { promises as fs } from "fs";
import { parse } from "yaml";

const CONFIG_DIR = process.env.CONFIG_DIR || "/config/config.yaml";
const DEFAULT_DIR = process.env.DEFAULT_DIR || "/default/default.yaml";

class ConfigParser {
    async getGeneral() {
        let config = "";
        try {
            config = await fs.readFile(path.normalize(CONFIG_DIR), "utf-8");
        } catch {
            try {
                config = await fs.readFile(
                    path.normalize(DEFAULT_DIR),
                    "utf-8"
                );
            } catch {
                config = "";
            }
        }
        if (config !== "") {
            const YAML = parse(config);
            return YAML;
        } else {
            throw Error("No config file found");
        }
    }

    async getCategories() {
        let config = "";
        try {
            config = await fs.readFile(path.normalize(CONFIG_DIR), "utf-8");
        } catch {
            try {
                config = await fs.readFile(
                    path.normalize(DEFAULT_DIR),
                    "utf-8"
                );
            } catch {
                config = "";
            }
        }
        if (config !== "") {
            const YAML = parse(config);
            return YAML.services;
        } else {
            throw Error("No config file found");
        }
    }

    async getCategoryEntries(category: string) {
        let config = "";
        try {
            config = await fs.readFile(path.normalize(CONFIG_DIR), "utf-8");
        } catch {
            try {
                config = await fs.readFile(
                    path.normalize(DEFAULT_DIR),
                    "utf-8"
                );
            } catch {
                config = "";
            }
        }
        if (config !== "") {
            const YAML = parse(config);
            const SERVICES: { name: string; items: any }[] = YAML.services;
            const ITEMS = SERVICES.find((element) => element.name === category);
            return ITEMS !== undefined ? ITEMS.items : [];
        } else {
            throw Error("No config file found");
        }
    }
}

export default ConfigParser;
