const BASE_URL = "https://api.open-meteo.com/v1/forecast?forecast_days=1";
const PARAMETERS =
    "&current=temperature_2m,precipitation,cloud_cover,precipitation_probability,uv_index&daily=temperature_2m_max,temperature_2m_min,sunshine_duration";

class OpenMeteo {
    static async getWeather(tz: string, lat: string, log: string) {
        try {
            const RESP = await fetch(
                `${BASE_URL}&latitude=${encodeURIComponent(
                    lat
                )}&longitude=${encodeURIComponent(
                    log
                )}&timezone=${encodeURIComponent(tz)}${PARAMETERS}`
            );
            if (RESP.ok) {
                const RAW = await RESP.json();
                const DAILY = RAW.daily;
                const CURRENT = RAW.current;
                const DAILY_UNITS = RAW.daily_units;
                const CURRENT_UNITS = RAW.current_units;
                return {
                    temp: CURRENT.temperature_2m + CURRENT_UNITS.temperature_2m,
                    uv_idx: CURRENT.uv_index + CURRENT.uv_index,
                    cloud_cov: CURRENT.cloud_cover + CURRENT_UNITS.cloud_cover,
                    perc_prob:
                        CURRENT.precipitation_probability +
                        CURRENT_UNITS.precipitation_probability,
                    temp_max:
                        DAILY.temperature_2m_max +
                        DAILY_UNITS.temperature_2m_max,
                    temp_min:
                        DAILY.temperature_2m_min +
                        DAILY_UNITS.temperature_2m_min,
                    sun_dur: (DAILY.sunshine_duration / 3600).toFixed(2) + "h",
                };
            } else {
                return false;
            }
        } catch {
            return false;
        }
    }
}

export default OpenMeteo;
