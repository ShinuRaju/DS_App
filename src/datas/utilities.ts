export function toPascalCase(s: string) {
    return s.replace(/(\w)(\w*)/g, function (_, firstLetter, restOfWord) {
        return firstLetter.toUpperCase() + restOfWord.toLowerCase();
    });
}
function toCamelCase(str: string) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}