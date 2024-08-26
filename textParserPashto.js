/**
 * Parse Roman Pashto text into a nested object with words as keys.
 * @param {string} text - The Roman Pashto text to parse.
 * @returns {Object} - A nested object where each line is an array of words.
 */
export function parseRomanPashto(text) {
    const lines = text.split('\n');
    const result = {};

    lines.forEach((line, lineIndex) => {
        const words = line.replace(/[.,?!]/g, '').split(' ').filter(word => word.trim());
        result[lineIndex] = words;
    });

    return result;
}

/**
 * Parse Pashto text written in Pashto script into a nested object with words as keys.
 * @param {string} text - The Pashto text to parse.
 * @returns {Object} - A nested object where each line is an array of words.
 */
export function parsePashto(text) {
    const lines = text.split('\n');
    const result = {};

    lines.forEach((line, lineIndex) => {
        const words = line.replace(/[.,?!]/g, '').split(' ').filter(word => word.trim());
        result[lineIndex] = words;
    });

    return result;
}
