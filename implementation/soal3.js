const divideSort = (number) => {

    let result;

    result = number
        .toString()
        .split("0")
        .map(x => x
            .split("")
            .sort((a, b) => a - b)
            .join("")
        ).join("")

    result = parseInt(result);

    console.log(result);
}

divideSort(5956560159466056)