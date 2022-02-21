function newscard(news){
    let { author, title, description, urlToImage } = news;


    return `
        <div class='card'>
            <img src='${urlToImage}'>
            <h5 class='title'>${title}</h5>
         
            <p class='author'>${author || " "}</p>
        </div>
    `;
}

export default newscard;