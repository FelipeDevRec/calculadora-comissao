export function calcularComissao(ticketMedio: number, vendas: number): number {
  let tier: number;

  if (ticketMedio >= 1500 && ticketMedio <= 2000) tier = 1;
  else if (ticketMedio >= 1200 && ticketMedio < 1500) tier = 2;
  else tier = 3;

  const tabela: Record<number, number[]> = {
    1: [180, 300, 480, 580, 600, 640],
    2: [180, 300, 320, 420, 580, 620],
    3: [180, 200, 280, 320, 480, 520],
  };

  let faixa: number;

  if (vendas <= 5) faixa = 0;
  else if (vendas <= 9) faixa = 1;
  else if (vendas <= 14) faixa = 2;
  else if (vendas <= 19) faixa = 3;
  else if (vendas <= 25) faixa = 4;
  else faixa = 5;

  const comissaoPorVenda = tabela[tier][faixa];
  return comissaoPorVenda * vendas;
}
