$(document).ready(

    function () {

    const validate = function (texto) {
        if (texto == null ){
            return " - "
        }
        if (texto.length >= 100){
            return texto.substring(0,100) + " ...";
        }
        else {
            return texto
        }
    }

    $('.scrollTo').click(function (){
        console.log('click')
        var goto = $(this).attr('href');
        
        if($(goto).length){
            var getOffset = $(goto).offset().top;
            console.log(getOffset)
            $('html').animate({
                scrollTop: getOffset
            }, 1000)
        }
        return false;
    })

    $.ajax({
        method: 'GET',
        url: 'https://api.github.com/users/vanlmc/repos',
        dataType: 'json'
    }).done(function(data){ 
            console.log(data)
            $.map(data, function(repo, i){  //passa o index também

                $('#repos').append('<tr> <td> <a target="_blank" href="https://github.com/'+repo.full_name+'">' + repo.full_name + '</a></td>' + '<td class="description">'+ validate(repo.description) +  '</td> ' + '</tr>')
            })
        })



    }
);