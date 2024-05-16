// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

function divideNumbers() {
  const dividend = parseInt(document.getElementById('dividendInput').value);
  let divisor = parseInt(document.getElementById('divisorInput').value);

  let quotient = 0;
  let remainder = dividend;

  while (remainder >= divisor) {
    remainder -= divisor;
    quotient++;
  }

  document.getElementById("divisionResult").innerHTML = "<p>" + dividend + " / " + divisor + " = " + quotient + " R " + remainder + "</p>";
}
