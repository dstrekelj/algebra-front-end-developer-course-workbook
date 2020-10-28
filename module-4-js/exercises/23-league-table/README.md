# Exercise #23 - League Table

A popular football blog has hired you to create a sortable league table to launch as part of their new redesign and rebranding.

The league table is designed to display data according to the following columns:

-   **#** - team league rank.
-   **Team** - team name.
-   **GP** - games played.
-   **W** - wins.
-   **D** - draws.
-   **L** - losses.
-   **Pts** - points.

Table rows are sortable by each column in ascending or descending order.

It is not possible to sort by two columns at the same time.

To keep the league table updated easily, the webmasters have set up a `data.json` file in the root of the site directory. This file is populated with the latest league table data at midnight of each day.

The `data.json` file contains a JSON-compliant array of objects, each object containing rank, name, games played, wins, draws, losses, and points for each team in the league.

For example:

```json
[
    {
        "rank": 2,
        "team": "Osijek",
        "games_played": 35,
        "wins": 17,
        "draws": 11,
        "losses": 7,
        "points": 62
    }
]
```

The webmasters provided you with an example `data.json` as part of this task to aid with development. The application must load this data asynchronously and use it to create the league table.

The league table data is initially sorted by rank in descending order.

Because the redesign is nearly finished, you are only required to create a plug-and-play script according to the specified requirements:

```js
var leagueTable = new LeagueTable(".js-league-table");

leagueTable.sortRows("losses", "descending");
```

The `index.html` file contains the basic HTML structure that will be used in the redesigned website to create the league table.

The webmasters proposed to make the following possible:

**Deliverables:**

Write a module named `LeagueTable` accepting parameters:

-   `selector` - a selector for the element which will have its content updated.

The requirements are:

-   Creating a new `LeagueTable` object must fetch league table data asynchronoulsy from `data.json`.
-   The selected element must be populated with league table data.
-   The module must return a public API with the function `sortRows`.

Write the `sortRows` function accepting parameters:

-   `sortBy` - the key to sort data by (e.g. team name).
-   `sortOrder` - the order in which to sort data by (ascending or descending).

The function requirements are:

1. The function must not return anything.
2. The `sortBy` parameter must only accept values `rank`, `team`, `games_played`, `wins`, `draws`, `losses`, and `points`.
3. The `sortOrder` parameter must only accept values `ascending` and `descending`.
4. Calling the function updates the league table with sorted data according to selected parameters.

**Tips:**

-   [Explore Fetch API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
-   [Explore Fetch examples on GitHub](https://github.com/mdn/fetch-examples)
-   [Explore Introduction to fetch() on Google Developers](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
-   [Explore Array.prototype.sort() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
-   [Explore Introduction to events on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
-   [Explore EventTarget.addEventListener() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
-   [Explore Event reference on MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
