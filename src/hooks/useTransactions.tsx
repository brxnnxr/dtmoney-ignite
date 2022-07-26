import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'> //para pegar todos do transaction e tirar id e creacteAt

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date()
    })

    const { transaction } = response.data

    setTransactions([
      ...transactions, // copiar todas as informacoes que ja ta dentro, e embaixo adiciona novas informacoes no final
      transaction //imutabilidade do react, para adicionar uma nova informaçao em um vetor,
    ])
  }

  return (
    //chave dupla para pegar um objeto dentro do javascript
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {' '}
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
   const context = useContext(TransactionsContext)

   return context;
}
