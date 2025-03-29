import { merge } from "../src/merge";

describe("Merge function tests", () => {
    test("Test with normal sorted arrays", () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2 = [2, 4, 6, 8];
        const collection_3 = [10, 9, 6, 4, 3];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 8, 9, 10]);
    });

    test("Test with duplicates among arrays", () => {
        const collection_1: number[] = [1, 2, 3];
        const collection_2: number[] = [3, 4, 5];
        const collection_3: number[] = [9, 8, 3];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 3, 3, 4, 5, 8, 9]);
    });

    test("Test with empty all arrays", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });

    test("Test with one empty array", () => {
        const collection_1 = [1, 3, 5];
        const collection_2: number[] = [];
        const collection_3 = [10, 8, 6];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 3, 5, 6, 8, 10]);
    });
});
