

function prepareConfidentialDocument(content, template) {
    var content = 'Lorem    ipsum XXXdolor sitxxx amet.';
    let regextest = /XXX(.*?)xxx/;
    console.log(content);
    let sensitiveData = content.replace(regextest, ' [REDACTED] ');
    let trimWhiteSpace = sensitiveData.replace(/\s+/g,' ').trim();
    var template = '== CONFIDENTIAL ==\n\n' + trimWhiteSpace + '\n\n == CONFIDENTIAL ==';
    return template;
}
