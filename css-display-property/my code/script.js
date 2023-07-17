//aim is to store the slider name,slider value and element and then change corresponding element's height or width.

/* storing slider name variables */
const blockHeightSlider = document.getElementById('block-height-slider');
const blockWidthSlider = document.getElementById('block-width-slider');
const inlineHeightSlider = document.getElementById('inline-height-slider');
const inlineWidthSlider = document.getElementById('inline-width-slider');
const inlineBlockHeightSlider = document.getElementById('inline-block-height-slider');
const inlineBlockWidthSlider = document.getElementById('inline-block-width-slider');

/* storing values of sliders */
const blockHeightOutput = document.getElementById('block-height-output');
const blockWidthOutput = document.getElementById('block-width-output');
const inlineHeightOutput = document.getElementById('inline-height-output');
const inlineWidthOutput = document.getElementById('inline-width-output');
const inlineBlockHeightOutput = document.getElementById('inline-block-height-output');
const inlineBlockWidthOutput = document.getElementById('inline-block-width-output');

/* storing container */
const blockElement = document.querySelector('.block');
const inlineElement = document.querySelector('.inline');
const inlineBlockElement = document.querySelector('.inline-block');

/* adding event listner to change element value on changing slider value */
blockHeightSlider.addEventListener('input', () => {
    /* to change css value- values must be appended with px */
    /* note that here we usd slider.value and not output var bcz output var value is not yet calculated and it will be calculated on the basis of slider.value */
    const heightValue = blockHeightSlider.value + 'px';
    blockHeightOutput.textContent = blockHeightSlider.value;
    blockElement.style.height = heightValue;
});
blockWidthSlider.addEventListener('input', () => {
    const widthValue = blockWidthSlider.value + 'px';
    blockWidthOutput.textContent = blockWidthSlider.value;
    blockElement.style.width = widthValue;
});

inlineHeightSlider.addEventListener('input', () => {
    const heightValue = inlineHeightSlider.value + 'px';
    inlineHeightOutput.textContent = inlineHeightSlider.value;
    inlineElement.style.height = heightValue;
});
inlineWidthSlider.addEventListener('input', () => {
    const widthValue = inlineWidthSlider.value + 'px';
    inlineWidthOutput.textContent = inlineWidthSlider.value;
    inlineElement.style.width = widthValue;
});

inlineBlockHeightSlider.addEventListener('input', () => {
    const heightValue = inlineBlockHeightSlider.value + 'px';
    inlineBlockHeightOutput.textContent = inlineBlockHeightSlider.value;
    inlineBlockElement.style.height = heightValue;
});
inlineBlockWidthSlider.addEventListener('input', () => {
    const widthValue = inlineBlockWidthSlider.value + 'px';
    inlineBlockWidthOutput.textContent = inlineBlockWidthSlider.value;
    inlineBlockElement.style.width = widthValue;
});


