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
        console.log(e.data);
        console.log(e.target.value);

        if (e.data == null) {
            if (spans.length == 0) return;
            let span = spans.splice(spans.length - 1, 1)[0];
            span.classList.remove("span-float");

            setTimeout(e => {
                span.classList.add("span-leave");
            }, 0);

        } else {
            let span = document.createElement("span");
            span.innerText = e.data;
            span.className = "span-float";
            output.appendChild(span);

            spans.push(span);
        }
    }
}