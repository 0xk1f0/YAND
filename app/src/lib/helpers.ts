export function getCurrentDateTime(dateFmt: string, timeFmt: string) {
    const DATE = new Date();
    const CURRENT_DATE = DATE.toLocaleDateString(dateFmt, {
        month: "long",
        day: "numeric",
        weekday: "long",
    });
    const CURRENT_TIME = DATE.toLocaleTimeString(timeFmt, {
        hour: "2-digit",
        minute: "2-digit",
    });
    return { DATE: CURRENT_DATE, TIME: CURRENT_TIME };
}
