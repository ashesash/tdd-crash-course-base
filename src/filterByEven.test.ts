import {filterByEven} from "./filterByEven";

test(' given [1,2,3], when filter by even, then [2,]', () => {
    expect(filterByEven([1,2,3])).toEqual([2]);
});

test(' given [1,2,3,4,5,6], when filter by even, then [2,4,6]', () => {
    expect(filterByEven([1,2,3,4,5,6])).toEqual([2,4,6]);
});

test(' given [], when filter by even, then []', () => {
    expect(filterByEven([])).toThrowError('empty array is not acceptable');
});