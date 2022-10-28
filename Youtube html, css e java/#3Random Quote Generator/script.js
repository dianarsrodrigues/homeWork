function generate(){
    var quotes = {
        "- Lewis B. Smedes": '"To forgive is to set a prisoner free and discover that the prisoner was you."'
    }

    var authors = Object.keys(quotes);

    //console.log(authors)
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}