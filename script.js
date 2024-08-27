const form = document.getElementById("form");

function onSubmitForm(event) {
    console.log(event);
    console.log(form);
}

window.addEventListener("load", () => {
    console.log("pagina carregada")
    const numberQuestions = 10;
    const responseQuestions = {};
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        for(let i = 0; i < numberQuestions; i++) {
            
            const inputValue = document.querySelector(`input[name="question_${i+1}"]:checked`)?.value;
            if(inputValue) {
                console.log(inputValue);
                responseQuestions[`question_${i+1}`] = inputValue;
            }
        }

        const mensagemEmail = montarMensagemEmail(responseQuestions);
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = {
            to: "bassetodudu@gmail.com",
            subject: "Formulario de fumantes de 2024",
            text: "Hello world",
            html: mensagemEmail
        }

        await fetch("https://shoutmon-email.onrender.com/send-email", {headers, body: JSON.stringify(body), method: "POST"})
    })

   
})


function montarMensagemEmail(responseQuestions) {

    let mensagemEmail = "";

    mensagemEmail += "<h1>Fumantes 2024 Relatório</h1><br>"

    for(let res in responseQuestions) {
        mensagemEmail += `<p>${res}</p><br>`
        mensagemEmail += `<p>${responseQuestions[res]}</p><br>`
    }   

    console.log(mensagemEmail);
    return mensagemEmail;


}



function showModal() {
    // Exibe o modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Fecha o modal após 5 segundos
    setTimeout(function() {
        closeModal();
    }, 5000);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}