function knapSack(bagCapacity, wt, value, n) {
    if (n == 0 || bagCapacity == 0)
        return 0;


    if (wt[n - 1] > bagCapacity)
        return knapSack(bagCapacity, wt, value, n - 1);

    else return Math.max(value[n - 1] + knapSack(bagCapacity - wt[n - 1], wt, value, n - 1),
        knapSack(bagCapacity, wt, value, n - 1)
    );
}


value = [60, 100, 120, 140, 180, 30]
weight = [10, 20, 30, 40, 50, 60]

items = {
    10: 60,
}
bagCapacity = 10;
itemsLenght = value.length;



console.log(knapSack(bagCapacity, weight, value, itemsLenght));



