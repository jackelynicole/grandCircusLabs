const main = () => {
    const addParagraph = document.getElementById("grow-me"); 
    addParagraph.classList.add("big");

    const removeParagraph = document.getElementById("shrink-me"); 
    removeParagraph.classList.remove("big"); 

    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
    console.log(item.textContent);
    });

    const link = document.querySelector('a.link'); 
    link.href = 'https://www.example.com'; 
    link.textContent = 'somewhere'; 

    const hideParagraph = document.getElementById("hide-me");
    hideParagraph.style.display = "none";

    const showParagraph = document.getElementById("show-me");
    showParagraph.style.display = "block";

    const inputBox = document.querySelector('input');
    const header = document.querySelector('h1');
    inputBox.addEventListener('input', () => {
        const userName = inputBox.value; 
        header.textContent = `Welcome ${userName}!`; 
    });
};

main();

