import dompurify from "dompurify";

const createMarkup = (dirty) => {
    return { __html: dompurify.sanitize(dirty) };
}

export { createMarkup };