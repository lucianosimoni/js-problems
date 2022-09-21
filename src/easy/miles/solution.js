function kmToMile(km) {
    return roundMile(km / 1.6)
}

function roundMile(mile) {
    return Math.round(mile)
}

console.log(kmToMile(51))