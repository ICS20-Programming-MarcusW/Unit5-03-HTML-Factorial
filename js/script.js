// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: May 2022
// This file contains the JS functions for index.html
"use strict"

/**
 * This function displays the factorial of positive integers
 */
function displayFactorial() {

    // get the positive integer from the user
    let userNum = parseInt(document.getElementById('pos-int').value);
    // initialize variables
    // set counter to 1
    let counter = 1;
    // set answer to 1
    let facAnswer = 1;


    // do while loop to calculate the factorial
    do {
        facAnswer = facAnswer * counter
        counter++
    } while (counter <= userNum)


    // display the factorial of the integer back to the user
    document.getElementById('display-results').innerHTML = "The factorial of your number is: " + facAnswer
}