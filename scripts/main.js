import newscard from '../components/newscard.js';
import article from '../components/article.js';

async function apiCall(url) {
    //add api call logic here
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;

    } catch (error) {
        console.log('error:',error)
    }

}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(article => {
        let div = document.createElement('div');
        div.innerHTML = newscard(article);
        div.addEventListener('click',() =>{
            localStorage.setItem('article',JSON.stringify(article));
            window.location.href='news.html';
        })
        main.append(div);
    })

}

function appendArticle(data,main){
    main.innerHTML = article(data);
}

export { apiCall, appendArticles ,appendArticle};