import { Container } from "./styles";

export function TransactionsTable(){
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de sistema</td>
            <td className="deposit">R$12.000,00</td>
            <td>Recebimento</td>
            <td>15/07/2023</td>
          </tr>
          <tr>
            <td>Parcela Casa</td>
            <td className="withdraw">R$1.200,00</td>
            <td>Pagamento</td>
            <td>15/07/2023</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistema</td>
            <td className="deposit">R$12.000,00</td>
            <td>Recebimento</td>
            <td>15/07/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>

  )
}