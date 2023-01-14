const totalResults = 100;
const perPage = 9;
let totalPages = Math.ceil(totalResults / perPage);

console.log('Total pages: ', totalPages);

const currentPage = 1;

if (currentPage > 0 && currentPage <= totalPages) {
    let page1Before = currentPage - 1;
    let page2Before = currentPage - 2;
    let page1After = currentPage + 1;
    let page2After = currentPage + 2;

    if (page1Before < 1) { page1Before = ''; }
    if (page2Before < 1) { page2Before = ''; }
    if (page1After > totalPages) { page1After = ''; }
    if (page2After > totalPages) { page2After = ''; }
    
    console.log(page2Before, page1Before, currentPage, page1After, page2After);
} else {
    console.log("Page not found");
}

