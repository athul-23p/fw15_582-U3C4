import newscard from '../components/newscard.js';

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

        main.append(div);
    })

}

export { apiCall, appendArticles }