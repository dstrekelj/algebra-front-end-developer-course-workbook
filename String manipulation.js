var template = '== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL ==';
var content = 5487587;

function prepareConfidentialDocument(content, template) {
  if (typeof content == 'string' && typeof template == 'string') {
    var modContent = content.replace(/ \s/g, ' ');
    var x = modContent.replace(/XXX(.*?)xxx/gi, '[REDACTED]');
    var txt = template.replace('::content::', x);
    console.log(txt);
  } else var message = 'Argument error!';
  return message;
}

prepareConfidentialDocument(content, template);
