# Exercise #1 - String Manipulation

You're a developer at security company. Every day you receive emails from higher-ups containing sensitive information. This sensitive information is marked with an "XXX" at the beginning and end of one or more words.

The nature of your job has you sometimes forwarding emails to third parties which are not privy to sensitive information. Usually you just remove sensitive information by hand, replacing words and sentences with "[REDACTED]", but lately this has become so common you decided to automate your job.

Write a function named `prepareConfidentialDocument` accepting two parameters:

* `content` - a string containing the text with confidential information.
* `template` - a string containing the template which will display confidential content, where `::content::` will be a placeholder for the content string.

The function requirements are:

1. Content must only have one space between words.
2. Words that begin with "XXX" and end with "XXX" must be replaced with "[REDACTED]".
3. The function must return the parsed document where the template's `::content::` placeholder must be replaced with parsed content.

**Example:**

Input: 

```js
var template = '== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL ==';
var content = 'Lorem    ipsum XXXdolor sitxxx amet.';

// ...

prepareConfidentialDocument(content, template);
```

Output:

```
== CONFIDENTIAL ==

Lorem ipsum [REDACTED] amet.

== CONFIDENTIAL ==
```

**Tips:**

* [Explore the String global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* Test your function by using different arguments
* Remember to check if the function is being called with the correct arguments
