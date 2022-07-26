import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function TransactionsTable() {
  const { transactions } = useTransactions()
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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  //biblioteca pra formatar o formato do amount
                  style: 'currency', //formato de moeda
                  currency: 'BRL' //tipo da moeda BRL
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {
                  new Intl.DateTimeFormat('pt-BR', {
                    //biblioteca pra formatar o formato da data
                    timeZone: 'UTC'
                  }).format(new Date(transaction.createAt)) //converter uma string numa data
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
