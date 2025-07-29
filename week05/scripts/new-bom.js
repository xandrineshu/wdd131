const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || [];

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

displayList = (item) => {
    let li = document.createElement('li');
    li.textContent = item;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

button.addEventListener('click', () => {  //----------------------------------------------
    if (input.value.trim() !== '') {      // test input.value to make sure it is not empty
        displayList(input.value);         // display the chapters list
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList();                 // set localStorage with updated array
        input.value = '';                 // clear the input
        input.focus();                    // set the focus back to the input
    };                                    //----------------------------------------------
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});