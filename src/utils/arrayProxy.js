export default function arrayProxy (arr) {
    return new Proxy(arr, {
        get(target, prop) {
            if (!isNaN(prop)) {
                prop = parseInt(prop, 10);
                if (prop < 0) {
                    prop += target.length;
                }
            }
            return target[prop];
        }
    });
}