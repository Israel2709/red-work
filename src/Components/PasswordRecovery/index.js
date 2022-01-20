import { Form, FormGroup, Input } from 'reactstrap'
import MainButton from '../MainButton'

const PasswordRecovery = props => {
  const { handlers } = props
  return (
    <>
      <Form className='mb-3'>
        <p className='text-muted'>
          Para recuperar tu contraseña debes ingresar tu correo dependiendo del
          perfil seleccionado
        </p>
        <FormGroup className='d-flex flex-column'>
          <Input name='email' placeholder='Ingresa tu correo' />
        </FormGroup>
      </Form>
      <MainButton className='w-25 ms-auto'>
        <span className='text-muted' onClick={handlers.submitMail}>
          Enviar
        </span>
      </MainButton>
    </>
  )
}

export default PasswordRecovery
