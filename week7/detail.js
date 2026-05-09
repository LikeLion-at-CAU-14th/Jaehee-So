const params = new URLSearchParams(window.location.search);
const title = params.get('title');
const photo = params.get('photo');
const author = params.get('author');
const date = params.get('date');
const keyword = params.get('keyword');

document.getElementById('img').src = photo;
document.getElementById('title').innerText = title;
const formDate = date => {
    const year = date.substring(2, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return `${year}-${month}-${day}`;
}
document.getElementById('date').innerText = formDate(date);
document.getElementById('author').innerText = author;
document.getElementById('keyword').innerText = keyword;
