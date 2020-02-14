function eventoBotaoFeito() {
    let $elemento_card = $('#card');
    let $elemento_direito = $('#direito');

    $elemento_direito.append($elemento_card);
}

$('.btn-feito').click(eventoBotaoFeito);

//////
//JQUERY






//////////

function eventoExcluirCard() {
    let $elemento_card = $('#card');
     $elemento_card.remove();
}

$('.btn-excluir').click(eventoExcluirCard);

