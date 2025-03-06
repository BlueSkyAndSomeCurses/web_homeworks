function max(arr) {
    if (arr == null) return NaN;
    return Math.max.apply(Math, arr);
}

function maxPair(arr) {
    if (arr == null || arr.length < 2) return [];

    return arr
        .slice(0, arr.length - 1)
        .map((val, i) => [val, arr[i + 1]])
        .reduce((maxPair, currPair) =>
            (currPair[0] + currPair[1] > maxPair[0] + maxPair[1]) ? currPair : maxPair
        );

}

function recordProgress(object, tuple) {
    if (tuple == null) return object;
    const [age, weight] = [object.age, object.weight];
    const [ageChange, weightChange] = tuple;

    [object.age, object.weight] = [(age ?? 0) + ageChange, (weight ?? 0) + weightChange];
}
