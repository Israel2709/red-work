import { Form } from 'reactstrap'
import Fields from '../Fields'
import MainButton from '../MainButton'

const LoginForm = props => {
  const { handlers, formConfig } = props
  return (
    <>
      <Form className='mb-3'>
        {
          formConfig.fields.map(( field, index) => {
            return (
              <Fields 
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
              />
            )
          })
        }
      </Form>
      {/* { formConfig.buttons && <div className='d-flex justify-content-between w-100'>
        {
          formConfig.buttons.map(( button, index) => {
            return(
              <MainButton key={index}>
                {
                  button.label
                }
              </MainButton>
            )
          })
        }
      </div>} */}
      <MainButton className='mb-3'>
        <span
          className='underline'
          onClick={handlers.requestPasswordRecovery}
        >
          ¿Olvidaste tu contraseña?
        </span>{' '}
      </MainButton>
      <MainButton>Ingresar</MainButton>
    </>
  )
}

export default LoginForm
