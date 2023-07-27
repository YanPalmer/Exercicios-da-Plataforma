/*Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões:*/

// Nomeia os jogadores com os seus respectivos valores
let jogador1 = {
    pontos: 120,
    moedas: 15,
    enfrentou_chefe: true
};
let jogador2 = {
    pontos: 99,
    moedas: 200,
    enfrentou_chefe: false
};
let jogador3 = {
    pontos: 100,
    moedas: 5,
    enfrentou_chefe: true
};
let jogador4 = {
    pontos: 101,
    moedas: 4,
    enfrentou_chefe: false
};
// console.log(jogador1.pontos);

// (   ) Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)
let resultadoJogador1 = (jogador1.pontos >= 100) & (jogador1.moedas >= 5) & (jogador1.enfrentou_chefe == true);
resultadoJogador1 == 1 ? console.log(`O valor ${resultadoJogador1} é: Verdadeiro(V)`) : console.log(`O valor ${resultadoJogador1} é: Falso(F)`);

// (   ) Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)
let resultadoJogador2 = (jogador2.pontos >= 100) & (jogador2.moedas >= 5) & (jogador2.enfrentou_chefe == false);
resultadoJogador2 == 1 ? console.log(`O valor ${resultadoJogador1} é: Verdadeiro(V)`) : console.log(`O valor ${resultadoJogador1} é: Falso(F)`);

// (   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)
let resultadoJogador3 = (jogador3.pontos < 100) || (jogador3.moedas < 5) || (jogador3.enfrentou_chefe == true);
resultadoJogador3 == 1 ? console.log(`O valor ${resultadoJogador1} é: Verdadeiro(V)`) : console.log(`O valor ${resultadoJogador1} é: Falso(F)`);

// (   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não)
let resultadoJogador4 = (jogador4.pontos != 100) || (jogador4.moedas != 5) || (jogador4.enfrentou_chefe == false);
resultadoJogador4 == 1 ? console.log(`O valor ${resultadoJogador1} é: Verdadeiro(V)`) : console.log(`O valor ${resultadoJogador1} é: Falso(F)`);