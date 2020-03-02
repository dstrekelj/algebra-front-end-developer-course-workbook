# Exercise #4 - Ancient Numerals

A team of researchers is uncovering the ruins of a forgotten ancient civilisation. 

Among the findings is the civilisation's numeral system which is a decimal numeral system represented by the following symbols:

```
0     1     2     3     4     5     6     7     8     9  
....  ****  ****  ....  ....  *...  *..*  .*..  .**.  ****
....  ....  ....  ****  ****  *...  *..*  .*..  .**.  ****
....  ....  ....  ....  ****  *...  *..*  .*..  .**.  ****
....  ....  ****  ....  ....  *...  *..*  .*..  .**.  ****
```

Researchers are currently digitising all texts by scanning them line by line.

A text is scanned into an array of numerals. Numerals are scanned row by row into an array of strings. Each array of strings represents a row of the numeral, and each element in that array represents a row of the symbol that is present in the numeral.

You are tasked with parsing the digitised texts into numbers for later analysis.

**Example:**

Input: 

```
input: [
    [
        [ '****', '****' ],
        [ '****', '....' ],
        [ '****', '....' ],
        [ '****', '****' ],
    ],
    [
        [ '....' ],
        [ '****' ],
        [ '****' ],
        [ '....' ],
    ],
]
```

Output:

```
'92 4'
```

**Deliverables:**

Write a function named `parseAncientText` accepting one parameter:

* `input` - array of digitised ancient numerals.

The function requirements are:

1. The function must return a string result displaying ancient numerals as numbers. If there is more than one numeral in the input, the numbers are separated by a space.
3. The `input` parameter must be a valid array of numerals.

**Challenge inputs:**

#1

```
input: [
  [
    [ '****', '....', '....', '****' ]
    [ '....', '****', '....', '****' ],
    [ '....', '****', '....', '****' ],
    [ '****', '....', '....', '****' ],
  ],
  [
    [ '*..*', '.*..' ]
    [ '*..*', '.*..' ],
    [ '*..*', '.*..' ],
    [ '*..*', '.*..' ],
  ],
  [
    [ '....', '*...', '.**.' ]
    [ '****', '*...', '.**.' ],
    [ '....', '*...', '.**.' ],
    [ '....', '*...', '.**.' ],
  ],
  [
    [ '****' ],
    [ '....' ],
    [ '....' ],
    [ '....' ],
  ],
]
```

**Tips:**

* [Explore the String global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [Explore the Array global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* Test your function using different arguments to ensure error and edge-cases are handled correctly
