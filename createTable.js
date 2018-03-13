var table="<!DOCTYPE html>\n" + "<html lang=\"en\">\n" + "<head>\n" + "    <meta charset=\"UTF-8\">\n" + "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" + "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" + "    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n" + "    <title>Ivaneski Game</title>\n" + "    <script src=\"script.js\"></script>\n" + "</head>\n" + "<body>\n" + "    <table>\n" + "        <th>";
for(var i=0;i<5;i++){
    table= table+"<tr>";
    for(var y =0;y<5;y++){
    table=table+"<th>"+"</th>";
    }
    table=table+"</tr>";
}
table=table+"</table>";
document.write(table);
