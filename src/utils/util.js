import dompurify from "dompurify";

const createMarkup = (dirty) => {
    return { __html: dompurify.sanitize(dirty) };
}

const getFormattedDate = (dt = new Date()) => {
    return dt
        .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })
        .replace(',', '')
        .replace(/(\d+)$/, "'$1");
}

const formatTo12Hour = (timestamp, ampmTranslation = ['AM', 'PM']) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? ampmTranslation[1] : ampmTranslation[0];

    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    const minutesStr = minutes.toString().padStart(2, '0');

    return `${hours}:${minutesStr} ${ampm}`;
}

const isOneDayOlder = (timestamp1, timestamp2) => {
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);

    // Normalize both dates to midnight for strict day comparison
    const day1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const day2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());

    const diffInMs = day2 - day1;
    const oneDayInMs = 24 * 60 * 60 * 1000;

    return diffInMs === oneDayInMs;
}

export { createMarkup, getFormattedDate, formatTo12Hour, isOneDayOlder };