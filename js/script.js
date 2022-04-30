/* Created by: Venika Sem
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment4-HTML/sw.js", {
    scope: "/ICS2O-Assignment4-HTML/",
  })
}

/**
 * This function calculates the pizzas total price
 */

 function buttonClicked() {
  var pizzaPrice = 0
  var toppingPrice = 0
  var totalPrice = 0
  var tax = 0


  var largeSize = document.getElementById("largeSize")
  var extraLagreSize = document.getElementById("extraLagreSize")

  if (largeSize.checked == true) {
    pizzaPrice = 6.00
    
  }

  if (extraLagreSize.checked == true) {
    pizzaPrice = 10.00
  }


  var topping1 = document.getElementById("topping1")
  var topping2 = document.getElementById("topping2")
  var topping3 = document.getElementById("topping3")
  var topping4 = document.getElementById("topping4")


  if (topping1.checked == true) {
    toppingPrice = 1.00
  }

  if (topping2.checked == true) {
    toppingPrice = 1.75
  }

  if (topping3.checked == true) {
    toppingPrice = 2.50
  }

  if (topping4.checked == true) {
    toppingPrice = 3.35
  }


  tax = (pizzaPrice + toppingPrice) * 0.13
  totalPrice = tax + (pizzaPrice + toppingPrice)

  document.getElementById("order").innerHTML =
  "Your pizza will cost  $" + totalPrice.toFixed(2)

  console.log(totalPrice)
}