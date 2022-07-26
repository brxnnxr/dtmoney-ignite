import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="bcmoney" />
        <button
          type="button"
          onClick={onOpenNewTransactionModal} //qnd clicar no botao vai abrir o modal
        >
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
