var template = "== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL ==";
var content =
  "Erat quibusdam blandit,    consequatur cupiditate? Adipisicing pretium donec nonummy? Nibh, nullam faucibus hac adipiscing culpa egestas! Magnis viverra sollicitudin repellendus? Sodales    repellendus! Aliquet XXXomnisXXX exercitation! Pharetra accumsan pariatur, nostrum praesentium? Maxime mollis? A distinctio placerat adipisci, autem amet tenetur auctor, massa inceptos interdum conubia quam    cupiditate iure maxime. Cupidatat elit semper, eum dicta maecenas, eleifend    sodales nec cras nam magna fermentum nobis XXXdistinctio, delenitiXXX? Dui tempora porttitor lorem recusandae rerum    veritatis vehicula cursus qui aliqua sociis facilisi vero cum blandit,    rerum blanditiis porta a, necessitatibus, sociosqu torquent    quisque odio natus integer accusantium wisi aliqua minus! Eum. Elit mattis massa etiam velit cum class curabitur, aliquam    ullamco provident    repellendus at commodo corrupti sociis! Beatae eius tristique inventore. Eos soluta penatibus ac, cras facilisis? XXXAnim vitae vulputateXXX aenean eum scelerisque laudantium nemo    bibendum perspiciatis    exercitation XXXarchitectoXXX? Purus voluptas. Excepturi error.    Placerat accusantium mattis, ducimus, soluta veritatis.";

function prepareConfidentialDocument(content, template) {
  var parsedContent = content;

  //remove extra whitespace
  for (var i = 0; i < parsedContent.length; i++) {
    if (parsedContent.includes("  ")) {
      parsedContent = parsedContent.replace("  ", " ");
    } else break;
  }

  //words that begin with "XXX" and end with "XXX" are replaced with "[REDACTED]".
  for (var i = 0; i < parsedContent.length; i++) {
    var indexOfFirst = parsedContent.indexOf("XXX");
    if (indexOfFirst === -1) {
      break;
    } else {
      var indexOfSecond = parsedContent.indexOf("XXX", indexOfFirst + 1);
      var confidential_data = parsedContent.substring(
        indexOfFirst,
        indexOfSecond + 3
      );
      parsedContent = parsedContent.replace(confidential_data, "[REDACTED]");
    }
  }

  //create new string with parsed content
  var parsedDoc = template.replace("::content::", parsedContent);
  return parsedDoc;
}

console.log(prepareConfidentialDocument(content, template));
