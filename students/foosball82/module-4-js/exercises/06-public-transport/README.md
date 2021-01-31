# Exercise #6 - Public Transport

The city of Helloworld recently overhauled its public transportation system, removing some old stops and adding new ones to make traffic flow from east to west (and vice versa) only.

Launching alongside the new system is an app to help citizens get familiar with the changes.

The app works by having the user select an origin station and a destination station. Based on an existing public transport map, the app will check possible travel routes and return the the route with the shortest travel duration.

Consider the following public transport map as an example:

```
A ---- B ---- C ---- D
        \____ E ____/
```

To travel from station A to station D, we move east along A-B-C-D.

To travel from station E to station A, we move west along E-B-A.

To travel from station C to station E, we have two options:
- Move east along C-D, then west along D-E
- Move west along C-B, then east along B-E

Every connection (e.g. A-B) has a travel time attached to it. Travelling west or east can have different travel times. Adding up the travel times to get the total travel duration is how we choose between the shortest travel route.

Your company's bid was accepted by the city and development on the app is well underway. The city's public transport authority sent a lot of data which your colleagues prepared for you in CSV format:

```
A,B,10,EAST
B,A,10,WEST
B,C,15,EAST
C,B,15,WEST
C,D,30,EAST
D,C,30,WEST
```

Each line represents a connection between two stations. Separated by a single comma are the following values (in order):
1. Origin station ("from station") ID
2. Destination station ("to station") ID
3. Travel duration (minutes)
4. Travel direction (either "EAST" or "WEST")

You are given the task of writing the function that will return the shortest travel route. The travel route should be formatted as follows:

```
{
    connections: [
        { from: 'A', to: 'B', direction: 'EAST', duration: 15 },
        { from: 'B', to: 'C', direction: 'EAST', duration: 10 },
        { from: 'C', to: 'D', direction: 'EAST', duration: 15 },
    ],
    duration: 40
}
```

**Example:**

Input: 

```
input = `A,B,10,EAST
B,A,10,WEST
B,C,15,EAST
C,B,15,WEST`
from = 'C'
to = 'A'
```

Output:

```
{
    connections: [
        { from: 'C', to: 'B', direction: 'WEST', duration: 15 },
        { from: 'B', to: 'A', direction: 'WEST', duration: 10 },
    ],
    duration: 25
}
```

**Deliverables:**

Write a function named `getTravelRoute` accepting parameters:

* `input` - required, CSV string of station connections.
* `fromStation` - required, origin station ID string.
* `toStation` - required, destination station ID string.

The function requirements are:

1. The function must validate inputs according to given requirements.
2. The function must return a travel route object in the specified format for valid inputs.
3. The function must handle travelling east, west, as well as support branching connections.

**Challenge inputs:**

#1

```
input = `A,B,10,EAST
B,A,10,WEST
B,C,15,EAST
C,B,15,WEST
C,D,30,EAST
D,C,30,WEST`
from = 'A'
to = 'D'
```

#2

```
input = `A,B,10,EAST
B,A,10,WEST
B,C,10,EAST
B,D,15,EAST
C,B,10,WEST
C,E,20,EAST
D,B,15,WEST
D,F,10,EAST
E,C,20,WEST
E,G,30,EAST
F,D,10,WEST
F,G,25,EAST
G,E,30,WEST
G,F,25,WEST`
from = 'C'
to = 'F'
```

**Tips:**

* [Explore the String global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [Explore the Array global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Explore the CSV format on Wikipedia](https://en.wikipedia.org/wiki/Comma-separated_values)
* [Exlore graph theory on Codingame](https://www.codingame.com/playgrounds/5470/graph-theory-basics/basics)
* [Explore Dijkstra's algorithm on Codingame](https://www.codingame.com/playgrounds/1608/shortest-paths-with-dijkstras-algorithm/introduction)
* Test your function using different arguments to ensure error and edge-cases are handled correctly
