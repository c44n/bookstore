let booksList = books;

function init() {
    loadBooks(3);
}

function loadBooks(param) {
    let bookCardRef = document.getElementById('book__wrapper');

    for (i = 0; i < param; i++) {
        let id = i;        
        bookCardRef.innerHTML += bookLayout(booksList[i], id);
    }
}

function clickLike(id) {
    let likeIconRef = document.getElementById('like_icon_' + id);
    let likeRef = document.getElementById('like_count_' + id);
    let likeCount = likeRef.innerHTML;

    if (likeIconRef.dataset.type == 'add') {
        addLike(likeCount, likeRef, likeIconRef);
    } else {
        removeLike(likeCount, likeRef, likeIconRef);
    }
}

function addLike(likeCount, likeRef, likeIconRef) {
    let newLikeCount = Number(likeCount) + 1;
    likeRef.innerHTML = newLikeCount;
    likeIconRef.dataset.type = 'remove';
    likeIconRef.src = "./images/fav.png";
}

function removeLike(likeCount, likeRef, likeIconRef) {
    let newLikeCount = Number(likeCount) - 1;
    likeRef.innerHTML = newLikeCount;
    likeIconRef.dataset.type = 'add';
    likeIconRef.src = "./images/fav_border.png";
}

function saveComment(id){
    let saveInputRef = document.getElementById('writeComment_'+id);
    let commentArea = document.getElementById('commentTable_'+id);
    let comment = saveInputRef.value.toString();

    if(comment != ""){
        let commentText = addCommentTemplate(comment);       
        commentArea.innerHTML += commentText;
    }
    
}