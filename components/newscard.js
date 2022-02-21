function newscard(news){
    let { author, title, description, urlToImage,source : {name} } = news;

    // console.log(name);
    return `
        <div class='card'>
            <img src='${urlToImage}'>
            <h5 class='title'>${title}</h5>
            <p class='description'>${description}</p>
            <p class='author'>${name}</p>
        </div>
    `;
}

export default newscard;