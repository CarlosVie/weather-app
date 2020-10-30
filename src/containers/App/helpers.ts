export function flattenArrayOfObjects(arr: any, property: any) {
    if (!Array.isArray(arr)) throw new Error('Is not an array');
    let flattenArray: any = [];
    arr.forEach(element => {
        const elem = Object.assign({}, element);
        if (property && Reflect.has(elem, property) && Array.isArray(elem[property])) {
            const newElements = elem[property];
            delete elem[property];
            flattenArray.push(elem);
            flattenArray = flattenArray.concat(newElements);
        } else {
            flattenArray.push(elem);
        }
    });
    return flattenArray;
}
