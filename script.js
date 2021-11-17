
function search_writing() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let wr = document.getElementsByClassName('writing');
      
    for (i = 0; i < wr.length; i++) { 
        if (!wr[i].innerHTML.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(input)) {
            wr[i].style.display="none";
        }
        else {
            wr[i].style.display="list-item";                 
        }
    }
}

const str = 'áéíóúÁÉÍÓÚ';

const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

console.log(parsed);