while ( 2==2 ){

    var apresentacao = prompt ( 'Bem vindos ao primeiro projeto da TURMA 5! \n\n Esse jogo tem por objetivo solucionar um simples questinamento: \n Como fazer para chegar vivo ao fim do curso😶\n\n Você deseja realmente continuar ? \n\n DIGITE S - PARA SIM \n DIGITE C - PARA CLARO')

    if ( apresentacao == "c" || apresentacao == "C" ){          
        alert('Beleza!')
        break;

    } else if ( apresentacao == "s" || apresentacao == "S"){
        alert('Ok, estão vamos lá!');
        break;    
    }
}
