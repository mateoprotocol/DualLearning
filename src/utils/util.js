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

export { createMarkup, getFormattedDate };