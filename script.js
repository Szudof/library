let myLibrary = [];
let bookCount = 0;
  
  
function Book(title,author,pages,read, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;

}

function openPopUpButton(){
   
    const addBookButton = document.querySelector("#addBookButton");
    let poppedUp = false;

    const popUp = document.querySelector("#popUp");
    const exitBtn = document.createElement('div');
    const popUpBackground = document.querySelector("#popUpBackground");
    exitBtn.id = "exitPopUp";
    exitBtn.textContent = "X";
    popUp.appendChild(exitBtn);

    addBookButton.addEventListener("click", ()=>{
            
       popUpBackground.style.display = "block";
       popUp.style.display = "block";
            
       poppedUp = true;
        
    })

    exitBtn.addEventListener("click", ()=>{
        
        popUpBackground.style.display = "none";
        popUp.style.display = "none";
        
        poppedUp = false;
    })



}

function addNewBook(){

    const form = document.querySelector("#submitForm");

    form.addEventListener("click", ()=>{
        
        const newBook = new Book(document.querySelector("#title").value,document.querySelector("#author").value,document.querySelector("#pages").value, "not read yet", bookCount);

        bookCount++;

        myLibrary.push(newBook);

        refresh();
    
    })
    
}


function changeReadStatus(){

}


function refresh(){

    document.querySelectorAll('.book').forEach(e => e.remove());

    displayLibrary();
    //usuwa wszystkie divy z bookcontainera po czym wyswietla wszystkie ksiazki (displayLibrary())
}

function deleteBook(){
    const deleteBookBtn = document.querySelector(".deleteBook");

    deleteBookBtn.addEventListener("click", ()=>{
        myLibrary.splice(0,1);

        refresh();
    })

    
}

function bookScheme(index){

    
    
    const deleteBtnContainer = document.createElement('div');
    deleteBtnContainer.classList.add("deleteBook");
    var img = new Image();
    img.src = "pics/trash.png"
    img.width = "35";
    img.height = "35";
    deleteBtnContainer.appendChild(img);

    


    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');
   
   


    const content = document.createElement('div');
    content.classList.add('book');

    
    

    title.textContent = myLibrary[index].title;
    author.textContent = myLibrary[index].author;
    pages.textContent = myLibrary[index].pages;

    content.appendChild(deleteBtnContainer);
    content.appendChild(title);
    content.appendChild(author);
    content.appendChild(pages);

    

    return content;
}


function displayLibrary(){

    const bookContainer = document.querySelector("#bookContainer");
    
    for(let i = 0; i<myLibrary.length; i++)
    {
        bookContainer.appendChild(bookScheme(i));
        deleteBook(); //no tera to to wszystjue na strzala wypierdala
    }
}

Book.prototype.info = function(){
  return (this.title+" by "+this.author+", "+this.pages+" pages, "+this.read);
}

const Hobbit = new Book("Hobbit","Tolkjen",290,"not read yet");
const Haripota = new Book("Hari pota","kobieta",350,"not read yet");

console.log(Hobbit.info());



openPopUpButton();
addNewBook();
refresh();



