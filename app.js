function talk() {
    var know = {
        "Who are you" : "Hello, Codewith_random here ",
        "Who are you not" : "Good: )",
        "What can i do for you" : "I have my family os 5000 menbers, i don't have follower, have supportive Family",
        "ok" : "Thank You So Much",
        "Bye" : "Okay! Will meet soon..",
        "Quem é você": "Olá, Codewith_random aqui ",
        "Quem é você" : "Bom: )",
        "O que posso fazer por você" : "Tenho minha família com 5.000 membros, não tenho seguidores, tenho família solidária",
        "ok": "Muito obrigado",
        "Tchau": "Ok! Nos encontraremos em breve .."
    };
    
    var user = document.getElementById('userBox').value ;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chaLog').innerHTML = "Sorry, I didn't understand <br>"    
    }
}