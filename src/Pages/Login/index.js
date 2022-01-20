import { useState } from 'react'
import { Row, Col } from 'reactstrap'
import LoginForm from '../../Components/LoginForm'
import PasswordRecovery from '../../Components/PasswordRecovery'
import RoundedSelector from '../../Components/ProfileSelector'
import UiNotification from '../../Components/UiNotification'
import emailIcon from '../../assets/orange-email.png'

const Login = () => {
  const [forgottenPassword, setForgottenPassword] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const requestPasswordRecovery = () => setForgottenPassword(true)

  const submitMail = () => {
    setEmailSent(true)
    setForgottenPassword(false)
    setTimeout(function () {
      setEmailSent(false)
    }, 3000)
  }
  return (
    <Row className='min-vh-100 bg-hex'>
      <Col xs='12' className='d-flex flex-column justify-content-center'>
        <h1 className='text-center mb-5 text-uppercase'>Login</h1>
        <div className='divider mb-5'>&nbsp;</div>
        <h2 className='bg-heading text-dark text-center mb-3'>
          Selecciona Perfil
        </h2>
        <div className='d-flex justify-content-between w-75 mx-auto mb-5'>
          <RoundedSelector id='a' name='profile-selector'>
            A
          </RoundedSelector>
          <RoundedSelector id='pr' name='profile-selector'>
            Pr
          </RoundedSelector>
          <RoundedSelector id='pf' name='profile-selector'>
            Pf
          </RoundedSelector>
          <RoundedSelector id='c' name='profile-selector'>
            C
          </RoundedSelector>
        </div>
        <div className='divider mb-5'>&nbsp;</div>
        {!forgottenPassword && !emailSent && (
          <LoginForm handlers={{ requestPasswordRecovery }} />
        )}
        {forgottenPassword && <PasswordRecovery handlers={{ submitMail }} />}
        {emailSent && (
          <UiNotification
            icon={emailIcon}
            text='En breve recibirás un correo con tu nueva contraseña'
          />
        )}
      </Col>
    </Row>
  )
}

export default Login
