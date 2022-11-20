function talk() {
    const know = {
        "Who are you" : "Hello, Codewith_random here ",
        "who are you" : "Good: )",
        "What can i do for you" : "I have my family os 5000 menbers, i don't have follower, have supportive Family",
        "ok" : "Thank You So Much",
        "Bye" : "Okay! Will meet soon..",
        "quem é voce": "Olá, Codewith_random aqui ",
        "Quem é você" : "Bom: )",
        "O que posso fazer por voce" : "Tenho minha família com 5.000 membros, não tenho seguidores, tenho família solidária",
        "vlw": "Muito obrigado",
        "Tchau": "Ok! Nos encontraremos em breve .."
    };
    
    const user = document.getElementById('userBox').value ;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chaLog').innerHTML = "Sorry, I didn't understand <br>"    
    }
}