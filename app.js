const form = document.querySelector('form');
const urlInput = form.querySelector('input[name="url"]');
const topInput = form.querySelector('input[name="top-caption"]');
const bottomInput = form.querySelector('input[name="bottom-caption"]');
const fontSizeInput = form.querySelector('input[type="range"]');
const fontStyleInput = form.querySelector('select');
const fontColorInput = form.querySelector('input[type="color"]');
const content = document.querySelector('#content-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Grab form input values
    const imgUrl = urlInput.value;
    const topCaption = topInput.value;
    const bottomCaption = bottomInput.value;
    const fontSize = fontSizeInput.value;
    const fontStyle = fontStyleInput.value;
    const fontColor = fontColorInput.value;

    // Create meme with image + text
    const newMeme = createMeme(imgUrl, topCaption, bottomCaption);

    // Style captions according to input values
    const captions = newMeme.querySelectorAll('.caption')
    for(let caption of captions){
        caption.style.color = fontColor;
        caption.style.fontSize = `${fontSize}vw`;
        caption.classList.add(fontStyle);
    }

    clearInputs();
})

const createMeme = (url, top, bottom) => {
    const memeCard = document.createElement('div');
    memeCard.classList.add('meme-card');
    memeCard.innerHTML = `
        <div class="meme-container">
            <div class="top caption">${top}</div>
            <img src="${url}" />
            <div class="bottom caption">${bottom}</div>
        </div>
        <div>
            <button class="delete">X</button>
        </div>
    `;
    content.append(memeCard);
    return memeCard
}

// Remove a meme
content.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
})

// Return form inputs to default values
const clearInputs = () => {
    urlInput.value = '';
    topInput.value = '';
    bottomInput.value = '';
    fontSizeInput.value = '3';
    fontStyleInput.value = 'impact';
    fontColorInput.value = '#ffffff';
}