let myLibrary = [];
  
  
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function openPopUpButton(){
   
    const addBookButton = document.querySelector("#addBookButton");
    let poppedUp = false;

    addBookButton.addEventListener("click", ()=>{
        
        if(poppedUp === false){
            document.querySelector("#popUpBackground").style.display = "block";
            document.querySelector("#popUp").style.display = "block";
            
            
            poppedUp = true;
        }
        else{
            document.querySelector("#popUp").style.display = "none";
            poppedUp = false;
        }
    })

}

function formSubmitButton(){

    const form = document.querySelector("#submitForm");

    form.addEventListener("click", ()=>{
        
        const newBook = new Book(document.querySelector("#title").value,document.querySelector("#author").value,document.querySelector("#pages").value, "not read yet");

        myLibrary.push(newBook);

        console.log(myLibrary.length);

        refresh();
    
    })
    
}


function changeReadStatus(){

}

function deleteBook(){

}

function refresh(){

    document.querySelectorAll('.book').forEach(e => e.remove());

    displayLibrary();
    //usuwa wszystkie divy z bookcontainera po czym wyswietla wszystkie ksiazki (displayLibrary())
}

function displayLibrary(){

    const bookContainer = document.querySelector("#bookContainer");
    
    for(let i = 0; i<myLibrary.length; i++)
    {
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const pages = document.createElement('p');

        const content = document.createElement('div');
        content.classList.add('book');


        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;

        content.appendChild(title);
        content.appendChild(author);
        content.appendChild(pages);

        bookContainer.appendChild(content);
    }
}

Book.prototype.info = function(){
  return (this.title+" by "+this.author+", "+this.pages+" pages, "+this.read);
}

const Hobbit = new Book("Hobbit","Tolkjen",290,"not read yet");
const Haripota = new Book("Hari pota","kobieta",350,"not read yet");

console.log(Hobbit.info());



openPopUpButton();
formSubmitButton();
refresh();


