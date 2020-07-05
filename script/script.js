$(document).ready(

    function () {

    const validate = function (texto) {
        if (texto == null ){
            return "Repositório sem descrição"
        }
        if (texto.length >= 100){
            return texto.substring(0,100) + " ...";
        }
        else {
            return texto
        }
    }

    $.ajax({
        method: 'GET',
        url: 'https://api.github.com/users/vanlmc/repos',
        dataType: 'json'
    }).done(function(data){ 
            console.log(data)
            $.map(data, function(repo, i){  //passa o index também

                $('#repos').append('<div> <h2>' + repo.full_name + '</h2>' + '<p>'+ validate(repo.description) +  ' <a target="_blank" href="https://github.com/'+repo.full_name+'">ver mais</a>'+  '</p>' + '</div>')
            })
        })



    }
);