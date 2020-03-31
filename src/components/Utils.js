import getUuidByString from "uuid-by-string";

export function uuidByString(str) {
    return getUuidByString(str)
}

export function base64EncodeUnicode(str) {
    // First we escape the string using encodeURIComponent to get the UTF-8 encoding
    // of the characters, then we convert the percent encodings into raw bytes, and
    // finally feed it to btoa() function.
    var utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    });

    return btoa(utf8Bytes);
}

export function toggleNumber(node, visibility) {
    node
        .childNodes
        .forEach(function (item) {
            if (item.className === "number") {
                item.style.visibility = visibility;
            }
        });
}