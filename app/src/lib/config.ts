import path from "path";
import { promises as fs } from "fs";
import { parse } from "yaml";

const CONFIG = process.env.CONFIG || "/config/config.yaml";
const DEFAULT = process.env.DEFAULT || "/default/default.yaml";

class ConfigParser {
    static async readConfig() {
        let config = "";
        try {
            config = await fs.readFile(path.normalize(CONFIG), "utf-8");
        } catch {
            try {
                config = await fs.readFile(path.normalize(DEFAULT), "utf-8");
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

    static async getCategoryEntries(yaml: any, category: string) {
        const SERVICES: { name: string; items: any }[] = yaml.services;
        const ITEMS = SERVICES.find((element) => element.name === category);
        return ITEMS !== undefined ? ITEMS.items : [];
    }

    static async getAllIcons(yaml: any) {
        const SERVICES: { name: string; items: any }[] = yaml.services;
        let icons: Set<string> = new Set();
        SERVICES.forEach((element) => {
            element.items.forEach(
                (entry: {
                    name: string;
                    logo: string;
                    subtitle: string;
                    tag: string;
                    url: string;
                }) => {
                    icons.add(entry.logo);
                }
            );
        });
        return icons;
    }
}

export default ConfigParser;
