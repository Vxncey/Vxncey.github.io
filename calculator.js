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
