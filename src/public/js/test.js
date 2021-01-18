const API = 'https://jsonplaceholder.typicode.com/posts';
const listElement = document.getElementById('list-element');
const cardElement =  document.getElementById('card-body');


const newsWorldObtain = url_api => {
    return new Promise((resolve, reject) => {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url_api, true);
            xhr.onreadystatechange = event =>{
                if(xhr.readyState===4){
                    if(xhr.status===200){
                        resolve(JSON.parse(xhr.responseText))
                    }
                }
            }
        } catch (error) {
            const err = Error(error + url_api );
            reject(err);
        }
        xhr.send();
    })
}


const sendDataNews = async () =>{
    try {
        const data = await newsWorldObtain(API);
        const infoList = data.filter( element => element.userId === 1 );
        for(let i=0; i<infoList.length; i++){
            printList(i, infoList);
            printCard(i, infoList);
        }
    } catch (error) {
        console.log(error);
    }
 }

const printCard = (iterador, infoList) => {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card animate__animated animate__backInUp">
        <div class="card-body text-wrap">
            <h5 class="card-title font-weight-bolder">${infoList[iterador].title}</h5>
            <p class="card-text">${infoList[iterador].body}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `
    cardElement.appendChild(card);
}

 

const printList = (iterador, infoList) => {
    const list = document.createElement('div');
    list.innerHTML = ` <li class="list-group-item animate__animated animate__backInDown">${infoList[iterador].title}</li> `
    listElement.appendChild(list);
}




 sendDataNews();
 

