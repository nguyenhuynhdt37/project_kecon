let thisPage = 1;
let limit = 10;
let homeproductitem = document.querySelectorAll('.grid-column-2-4 .home-product-item');

function loadItem(){
    let beginGet = limit * ( thisPage - 1);
    let endGet = limit * thisPage - 1;
    homeproductitem.forEach((homeproductitem,key)=>{
        if(key >= beginGet && key <= endGet){
            homeproductitem.style.display = 'block';
        }else
        {
            homeproductitem.style.display = 'none';
        }
    }
    )
    listPaginatiton();
}

loadItem();

function listPaginatiton(){
    let count = Math.ceil(homeproductitem.length / limit);
    document.querySelector('.Paginatiton').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = '<';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.Paginatiton').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.Paginatiton').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = '>';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.Paginatiton').appendChild(next);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
}

// close modal

const modalbaner = document.querySelector('.js-modal-baner')
        const modalbanerclose = document.querySelector('.js-modal-baner-close')
        
        function closebaner(){
           modalbaner.classList.add('open')
        }
        modalbanerclose.addEventListener('click',closebaner)