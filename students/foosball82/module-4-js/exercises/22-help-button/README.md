# Exercise #22 - Help Button

You are tasked with writing a function that will display the help action button after a set timeout.

**Deliverables:**

Write a function named `showHelpButton` accepting parameters:

* `selector` - a selector for the element which will have its content updated.
* `timeout` - the amount of milliseconds to wait before the button is shown.

The function requirements are:

1. The function must not return anything.
2. The `selector` must be able to select an element.
3. The `timeout` must be a valid number.
4. After the specified timeout, the selected element should have its class set according to the classes provided in `style.css`.

**Tips:**

* [Explore the Date global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [Explore the WindowOrWorkerGlobalScope timer functions](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope)
* [Explore the classList property on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
