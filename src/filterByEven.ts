// export function filterByEven(numbers: number[]): number[] {
//     return numbers.filter(num => num % 2 === 0);
// }

export function filterByEven(arr: number []): number[] {
    if (arr.length === 0) {
        return [];
      }
    return arr.filter(num => num % 2 === 0);
}