# Exercise #3 - A Secret Message

You made a trip to your local museum to see the new exhibit on Roman military history. There, you saw displayed messages which were encrypted using the Caesar cipher.

The Caesar cipher is a simple cipher used to encrypt sensitive information such as military intelligence in the days of Julius Caesar. It works by replacing each letter in the text by a letter some fixed number of positions up or down the alphabet, depending on the shift value. This is why its also commonly referred to as the shift cipher.

Being curious, you wrote down some of the messages and decided to write your own tool to decrypt them and find out what those Romans were up to.

**Example:**

Input: 

```
input: 'ABCD'
shift: 2
```

Output:

```
'CDEF'
```

**Deliverables:**

Write a function named `caesarCipher` accepting two parameters:

* `input` - string, uppercase A-Z letters only.
* `shift` - number, how many letters to shift each input character by.

The function requirements are:

1. The function must return a string result for valid input arguments.
1. The `shift` parameter must be an integer (both positive and negative values must be supported).
1. The `input` parameter must be a valid string of one or more uppercase letters of the English alphabet (A-Z).

**Challenge inputs:**

#1

```
input: 'HOWAMIDOINGSOFAR'
shift: 4
```

#2

```
input: 'MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX'
shift: -4
```

**Tips:**

* [Explore the Caesar cipher on Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Explore the String global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [Explore the ASCII character encoding standard](https://en.wikipedia.org/wiki/ASCII)
* Test your function using different arguments to ensure error and edge-cases are handled correctly
