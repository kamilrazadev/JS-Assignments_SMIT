//--------------------Q 01-----------------------
    // var studentNames = [];
//--------------------Q 02-----------------------
    // var studentNames = [];
//--------------------Q 03-----------------------
    // var fruits = ["apple", "banana", "orange"];
//--------------------Q 04-----------------------
    // var numbers = [1, 2, 3, 4, 5];
//--------------------Q 05-----------------------
    // var booleanArray = [true, false, true];
//--------------------Q 06-----------------------
    // var mixedArray = [1, "apple", true];
//--------------------Q 07-----------------------
    // var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    
    // document.write("Qualifications:<br>");
    // document.write(qualifications[0] + "<br>");
    // document.write(qualifications[1] + "<br>");
    // document.write(qualifications[2] + "<br>");
    // document.write(qualifications[3] + "<br>");
    // document.write(qualifications[4] + "<br>");
    // document.write(qualifications[5] + "<br>");
    // document.write(qualifications[6] + "<br>");
    // document.write(qualifications[7] + "<br>");
//--------------------Q 08-----------------------
    // const studentNames = ['Michael', 'John', 'Tony'];
    // const scores = [320, 450, 390];
    // const totalMarks = 500;

    // document.write('Score of ' + studentNames[0] + ' is ' + scores[0] + '. Percentage: ' + (scores[0] / totalMarks * 100) + '%<br>');
    // document.write('Score of ' + studentNames[1] + ' is ' + scores[1] + '. Percentage: ' + (scores[1] / totalMarks * 100) + '%<br>');
    // document.write('Score of ' + studentNames[2] + ' is ' + scores[2] + '. Percentage: ' + (scores[2] / totalMarks * 100) + '%<br>');
//--------------------Q 09-----------------------
// const colors = ['Red', 'Green', 'Blue'];

// document.write('<b>Original Array:</b><br>');
// document.write(colors[0] + '<br>');
// document.write(colors[1] + '<br>');
// document.write(colors[2] + '<br>');

// const colorToAddBeginning = prompt('Enter a color to add to the beginning:');
// colors.unshift(colorToAddBeginning);
// document.write('<br><b>Updated Array (Added to the beginning):</b><br>');
// document.write(colors[0] + '<br>');
// document.write(colors[1] + '<br>');
// document.write(colors[2] + '<br>');
// document.write(colors[3] + '<br>');

// const colorToAddEnd = prompt('Enter a color to add to the end:');
// colors.push(colorToAddEnd);
// document.write('<br><b>Updated Array (Added to the end):</b><br>');
// document.write(colors[0] + '<br>');
// document.write(colors[1] + '<br>');
// document.write(colors[2] + '<br>');
// document.write(colors[3] + '<br>');

// colors.unshift('Yellow', 'Purple');
// document.write('<br><b>Updated Array (Added two colors to the beginning):</b><br>');
// document.write(colors[0] + '<br>');
// document.write(colors[1] + '<br>');
// document.write(colors[2] + '<br>');
// document.write(colors[3] + '<br>');
// document.write(colors[4] + '<br>');
// document.write(colors[5] + '<br>');

// colors.shift();
// document.write('<br><b>Updated Array (Deleted the first color):</b><br>');
// document.write(colors[0] + '<br>');
// document.write(colors[1] + '<br>');

// colors.pop();
// document.write('<br><b>Updated Array (Deleted the last color):</b><br>');
// document.write(colors[0] + '<br>');
// document.write(colors[1] + '<br>');

// const indexToAdd = parseInt(prompt('Enter the index to add a color:'));
// const colorToAdd = prompt('Enter the color to add:');
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write('<br><b>Updated Array (Added at a specific index):</b><br>');
// document.write(colors[0] + '<br>');
// document.write(colors[1] + '<br>');
// document.write(colors[2] + '<br>');
// document.write(colors[3] + '<br>');

//--------------------Q 10-----------------------
    // var scores = [320, 230, 480, 120];
    // scores.sort();
    // console.log("Ordered score of students: " + scores);
//--------------------Q 11-----------------------
    // var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
    // var selectedCities =  cities.slice(0, 3);
    // console.log(selectedCities);
//--------------------Q 12-----------------------
    // var arr = ["This", "is", "my", "car"];
    // console.log("Array: " + arr);
    // console.log("String: " + arr.join(" "));
//--------------------Q 13-----------------------
    // var fifoArray = [];

    // fifoArray.push("Value 1");
    // fifoArray.push("Value 2");
    // fifoArray.push("Value 3");

    // var firstValue = fifoArray.shift();
    // var secondValue = fifoArray.shift();
    // var thirdValue = fifoArray.shift();

    // console.log("First value:", firstValue);
    // console.log("Second value:", secondValue);
    // console.log("Third value:", thirdValue);

//--------------------Q 14-----------------------
    // var lifoArray = [];

    // lifoArray.push("Value 1");
    // lifoArray.push("Value 2");
    // lifoArray.push("Value 3");

    // var lastValue = lifoArray.pop();
    // var secondLastValue = lifoArray.pop();
    // var thirdLastValue = lifoArray.pop();

    // console.log("Last value:", lastValue);
    // console.log("Second last value:", secondLastValue);
    // console.log("Third last value:", thirdLastValue);

//--------------------Q 15-----------------------
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var dropdownMenu = "<select>" + "<option>" + phoneManufacturers.join("</option><option>") + "</option>" + "</select>";

// document.write(dropdownMenu);

