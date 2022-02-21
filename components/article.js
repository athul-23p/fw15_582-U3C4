function article(data){

    
    let {
        title,
        content,
        publishedAt,
        url,
        urlToImage,
        source : {id,name}
    } = data;
    return `
     <h2>${title}</h2>
        <img src="${urlToImage
        }" alt="">
        <div class="article-details">
          <p class="source">${name}</p>
          
          <p>${new Date(publishedAt).toDateString()}</p>
        </div>
        <p class="content">${content}</p>

        <a href="${url}">Read more</a>
    `;

}


export default article;