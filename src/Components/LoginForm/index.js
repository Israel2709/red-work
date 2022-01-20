import { Form, FormGroup, Input } from 'reactstrap'
import MainButton from '../MainButton'

const LoginForm = props => {
  const { handlers } = props
  return (
    <>
      <Form className='mb-3'>
        <FormGroup className='d-flex flex-column'>
          <Input
            name='email'
            placeholder='Ingresa un correo (hotmail, gmail, yahoo, etc.)'
          />
        </FormGroup>
        <FormGroup>
          <Input name='password' placeholder='Ingresa tu contraseña' />
        </FormGroup>
      </Form>
      <div className='d-flex justify-content-between w-100'>
        <MainButton>
          <span
            className='underline'
            onClick={handlers.requestPasswordRecovery}
          >
            ¿Olvidaste tu contraseña?
          </span>{' '}
        </MainButton>
        <MainButton>Ingresar</MainButton>
      </div>
    </>
  )
}

export default LoginForm
