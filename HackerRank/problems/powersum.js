function combinations(X, N, c) {
    if (X === 0) {
        return 1;
    }
    var result = 0;
    for (var i = c; Math.pow(i, N) <= X; i++) {
        result += combinations(X - Math.pow(i, N), N, i + 1);
    }
    return result;
}




console.log(combinations(100, 2, 1));