/* Global variables */
const links = [
    { label: "instagram", link: "http://instagram.com/jrizmalj" },
    { label: "linkedin", link: "https://www.linkedin.com/in/jaka-rizmal-b5b6a4156/" },
    { label: "github", link: "https://github.com/jrizmal" },
    { label: "medium", link: "https://medium.com/@jrizmal" }
]
let term = new Terminal();

/* On load set terminal window */
window.onload = function () {
    const terminalWindow = document.getElementById("terminal-window")
    terminalWindow.appendChild(term.html)
    term.print("guest@rizmal.si:~$ tree")
    term.print("hello.sh")
    term.print("big_secret.sh")

    term.print("guest@rizmal.si:~$ ./hello.sh")
    term.print("Hi")
    term.input("guest@rizmal.si:~$", onInput)
    term.setFocused()
}

const showPrompt = function(){
    term.input("guest@rizmal.si:~$", onInput)
}

const onInput = function (input) {
    const program = links.find(el => el.label == input.toLowerCase())
    if (input.toLowerCase() == "big_secret.sh" || input.toLowerCase() == "./big_secret.sh") {
        term.print(`Self destructing in 3...`)
        let c = 2;
        const interval = setInterval(() => {
            if (c > 0) {
                term.print(`${c}...`)
            } else {
                clearInterval(interval)
                location.reload();
            }
            c--
        }, 1000)
        

    } 
    else if (input.toLowerCase() == "hello.sh" || input.toLowerCase() == "./hello.sh"){
        term.print("Hi")
        showPrompt()
    }
    else {
        term.print(`"${input}" does not exist. Try again.`)
        showPrompt()
    }

}