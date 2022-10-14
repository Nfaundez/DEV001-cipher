const cipher = {
    encode: function(offset, message) {
        if (message === undefined || offset === undefined) {
            throw new TypeError("alertaaa!!!")
        } else if (message === typeof 0 || offset === 0) {
            throw new TypeError("alertaaa!!!")
        }
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        offset = (offset % 26 + 26) % 26;
        return message.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + offset) % 26]);
    },
        
    decode: function(offset, message) {
        if (message === undefined || offset === undefined) {
            throw new TypeError("alertaaa!!!")
        } else if (message === typeof 0 || offset === 0) {
            throw new TypeError("alertaaa!!!")
        }
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        offset = (offset % 26 - 26) % 26;
        return message.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - offset) % 26]);
    }
}
export default cipher;

        
    



























