//3. Printing content button

const btn = document.getElementById("webpagePrinter")


btn.addEventListener("click", function printWebpage() {
    return window.print()
})