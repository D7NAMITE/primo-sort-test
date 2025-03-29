export function merge(
    collection_1: number[], //sorted from min to MAX
    collection_2: number[], //sorted from min to MAX
    collection_3: number[]  //sorted from MAX to min
): number[] {
    let sorted = []; // I will use this collection to store sorted results

    collection_3.reverse(); // collection_3 is now sorted min to MAX

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < collection_1.length || j < collection_2.length || k < collection_3.length) {
        let val_1 = collection_1[i] !== undefined ? collection_1[i] : Infinity;
        let val_2 = collection_2[j] !== undefined ? collection_2[j] : Infinity;
        let val_3 = collection_3[k] !== undefined ? collection_3[k] : Infinity;

        if (val_1 <= val_2 && val_1 <= val_3) {
            // if the value focusing in collection_1 less than values focusing in other two
            sorted.push(val_1);
            i++;
        } else if (val_2 <= val_1 && val_2 <= val_3) {
            // else if the value focusing in collection_2 less than values focusing in other tow
            sorted.push(val_2)
            j++;
        } else {
            // else the value in collection_3 is the smallest
            sorted.push(val_3)
            k++;
        }
    }
    return sorted
}
