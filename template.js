function bookLayout(book, id, commentElement) {
    let allComments = "";

    for (let i = 0; i < book.comments.length; i++) {
        let comment = book.comments[i];
        allComments += bookCommentTemplate(comment);
    }

    let loadLayout = `
        <div class="book__card border_xl">
            <div id="book_card_title">
                ${bookTitleTemplate(book)}
            </div>

            <div id="book_content">
                ${bookContentTemplate(book, id)}
            </div>

            <hr>

            <div id="book_comments">
                <h3>Kommentare</h3>
                <table>
                    <tbody id="commentTable_${id}">
                        ${allComments}
                    </tbody>
                </table>
                <div class="write_comment_wrapper">
                    <input type="text" id="writeComment_${id}" placeholder="Schreibe hier ein Kommentar" class="writeCommentInput">
                    <button onclick="saveComment(${id})" id="saveCommentBtn" class="writeCommentBtn" >Absenden</button>
                </div>    
            </div>
        </div>
    `;
    return loadLayout;
}

function bookTitleTemplate(book) {
    return `
        <div class="book__title_wrapper border_xl">
            <h3 class="book__title" id="book_title"> ${book.name}</h3>
        </div>
    `;
}

function bookContentTemplate(book, id) {
    return `
        <div class="book__content">
            <div class="book__content__image_wrapper padding-y__l">
                <img src="./images/book_cover.png" alt="" class="book_cover">
            </div>

            <hr>

            <div class="book__content__info">

                <div class="price_fav_wrapper">
                    <div class="price_fav_wrapper__pricing">
                        <h5>${book.price} €</h5>
                    </div>
                    <div class="price_fav_wrapper__fav">
                        <h5 id="like_count_${id}">${book.likes}</h5>
                        <span id="like_badge_wrapper">
                            <img src="./images/fav_border.png" id="like_icon_${id}" data-type="add" onclick="clickLike(${id})">
                        </span>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-primary">
                        <tbody>
                            <tr>
                                <td scope="row">Author </td>
                                <td>: ${book.author}</td>
                            </tr>
                            <tr>
                                <td scope="row">Erscheinungsjahr </td>
                                <td>: ${book.publishedYear}</td>
                            </tr>
                            <tr>
                                <td scope="row">Genre </td>
                                <td>: ${book.genre}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
            </div>
        </div>
    `;
}

function bookCommentTemplate(comment) {
    return `
        <tr class="">
            <td width="100px"><small>${comment.name}: </small> </td>
            <td><small>${comment.comment}</small></td>
        </tr>    
    `;
}

function addCommentTemplate(comment){
    return `
        <tr>
            <td width="100px"><small>Can: </small> </td>
            <td><small>${comment}</small></td>
        </tr>    
    `;
}