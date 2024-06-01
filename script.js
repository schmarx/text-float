window.onload = e => {
    /**
     * @type {HTMLInputElement}
     */
    let input = document.querySelector("#input");
    let output = document.querySelector("#output");


    /**
     * @type {HTMLSpanElement[]}
     */
    let spans = [];

    input.focus();

    input.oninput = e => {
        console.log("");
        let inputText = e.target.value;

        let spanValues = spans.map(span => span.innerHTML); // innerHTML to get spaces
        console.log(inputText, spanValues.reduce((t, v) => t + v, ""));

        let index = 0;
        while (index < inputText.length && index < spanValues.length) {
            console.log(`"${inputText[index]}" is "${spanValues[index]}": ${inputText[index] == spanValues[index]}`)
            if (inputText[index] != spanValues[index]) break;
            index++;
        }
        console.log(`change at ${index}`);

        while (spans.length > index) {
            let span = spans.splice(spans.length - 1, 1)[0];
            span.classList.remove("span-float");

            setTimeout(() => {
                span.classList.add("span-leave");
                setTimeout(() => {
                    span.remove();
                }, 200);
            }, 0);
        }

        while (spans.length < inputText.length) {
            let span = document.createElement("span");
            span.innerText = inputText[spans.length];
            span.className = "span-float";
            output.appendChild(span);

            spans.push(span);
        }
    }
}