import { z } from "zod";
import path from "path";
import { promises as fs } from "fs";
import { parse as yamlParse } from "yaml";

const CONFIG_PATH = path.normalize(process.env.CONFIG || "/config/config.yaml");

const ConfigFile = z.object({
    title: z.string(),
    subtitle: z.string(),
    default: z.object({
        surface: z.string(),
        foreground: z.string().startsWith("#").min(7).max(7),
        background: z.string().startsWith("#").min(7).max(7),
    }),
    weather: z.object({
        enabled: z.boolean(),
        timezone: z.string(),
        latitude: z.string(),
        longtitude: z.string(),
    }),
    services: z.array(
        z.object({
            name: z.string(),
            items: z.array(
                z.object({
                    name: z.string(),
                    logo: z.string(),
                    subtitle: z.string(),
                    tag: z.string(),
                    url: z.string().url(),
                }),
            ),
        }),
    ),
});

export type ConfigFileType = z.infer<typeof ConfigFile>;

class ConfigParser {
    static async readConfig() {
        let config = "";
        try {
            config = await fs.readFile(CONFIG_PATH, "utf-8");
        } catch (e: any) {
            throw {
                type: e instanceof Error ? e.name : "Unknown",
                message: `Unable to open ${CONFIG_PATH}`,
            };
        }
        return ConfigFile.parse(yamlParse(config));
    }

    static async getCategoryEntries(config: ConfigFileType, category: string) {
        const ITEMS = config.services.find(
            (element) => element.name === category,
        );
        return ITEMS !== undefined ? ITEMS.items : [];
    }

    static async getAllIcons(config: ConfigFileType) {
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
