function milesTravelled(minutes, milesPerHour) {
    return Math.round((minutes / 60) * milesPerHour)
}

console.log(milesTravelled(5, 20))