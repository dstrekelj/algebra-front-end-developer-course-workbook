# Exercise #21 - Clock

The application you're working on has recently gained an influx of new users from across the world, and with that came some new challenges. It turns out users have trouble finding the right time to communicate with each other because of different time zones. The users' most requested feature quickly became a clock that can display the current time in different time zones, so the feature became a top priority to retain the new user base.

You are tasked with writing a function that will select an element and display a clock within it, showing time in the specified time zone.

**Deliverables:**

Write a function named `showClock` accepting one parameter:

* `selector` - a selector for the element which will have its content updated.

The function requirements are:

1. The function must not return anything.
2. The `selector` must be able to select one or more elements.
3. If the selected element does not have a `data-time-offset` attribute, the time offset value defaults to `UTC+00:00`.
4. If the selected element has an invalid `data-time-offset` value, a warning is logged to the console and the time offset value defaults to `UTC+00:00`.
5. The clock must display the curent hour, minute, and second in the `hour:minute:second timeOffset` format, e.g. `01:02:03 UTC-09:30`, taking into account the specified time zone.
6. The clock must update in real-time with every second.

**Tips:**

* [Explore the Date global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [Explore the WindowOrWorkerGlobalScope timer functions](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope)
* [Explore time zones on Wikipedia](https://en.wikipedia.org/wiki/Time_zone)
