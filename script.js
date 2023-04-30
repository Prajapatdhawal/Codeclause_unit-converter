function convert() {
    let distance = document.getElementById("distance").value;
    let value = document.getElementById("value").value;
    let result = document.getElementById("result");
    if (distance == "km") {
        let miles = value / 1.609;
        result.innerHTML = `${value} kilometers is equal to ${miles.toFixed(2)} miles.`;
    } else {
        let km = value * 1.609;
        result.innerHTML = `${value} miles is equal to ${km.toFixed(2)} kilometers.`;
    }
}
