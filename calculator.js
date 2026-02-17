let results = [];   // Store valid results only

document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while (true) {

    let x = prompt("Enter first number (Cancel to stop):");
    if (x === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let y = prompt("Enter second number:");
    if (y === null) break;

    let result;

    // Convert to numbers
    let numX = Number(x);
    let numY = Number(y);

    // Check for non-numeric input
    if (isNaN(numX) || isNaN(numY)) {
        result = "wrong input number";
    }
    else if (!["+", "-", "*", "/", "%"].includes(operator)) {
        result = "computation error";
    }
    else {
        switch (operator) {
            case "+":
                result = numX + numY;
                break;
            case "-":
                result = numX - numY;
                break;
            case "*":
                result = numX * numY;
                break;
            case "/":
                result = numY !== 0 ? numX / numY : "computation error";
                break;
            case "%":
                result = numY !== 0 ? numX % numY : "computation error";
                break;
        }

        // Only store valid numeric results
        if (typeof result === "number") {
            results.push(result);
        }
    }

    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");
}

document.write("</table>");

if (results.length > 0) {

    let total = 0;
    let min = results[0];
    let max = results[0];

    for (let i = 0; i < results.length; i++) {
        total += results[i];

        if (results[i] < min) min = results[i];
        if (results[i] > max) max = results[i];
    }

    let avg = total / results.length;

    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + avg + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
    document.write("</table>");
}

