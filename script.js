const correctPassword = 'faith';

function unlockText() {
    console.log("unlockText function called");
    const userPassword = prompt("Enter password to reveal");

    
    if (userPassword === null) {
        return; // Do nothing if canceled
    }

    if (userPassword === correctPassword) {
        const secretWord = document.querySelector('.secret-text');
        if (secretWord) {
            secretWord.style.filter = 'none'; // Remove the blur effect
            alert("Your clear");
        } else {
            console.error("Element with class 'secret-text' not found.");
        }
    } else {
        alert("Keep out!");
    }
}
