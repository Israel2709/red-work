import { useState } from 'react'
import { Row, Col } from 'reactstrap'
import LoginForm from '../../Components/LoginForm'
import PasswordRecovery from '../../Components/PasswordRecovery'
import RoundedSelector from '../../Components/ProfileSelector'
import UiNotification from '../../Components/UiNotification'
import profileConfig from '../../lib/profileConfig'

const Login = () => {
  const [forgottenPassword, setForgottenPassword] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [selectedProfile, setSelectedProfile ] = useState('admin')

  const requestPasswordRecovery = () => setForgottenPassword(true)

  const submitMail = () => {
    setEmailSent(true)
    setForgottenPassword(false)
    setTimeout(function () {
      setEmailSent(false)
    }, 3000)
  }

  const selectProfile = event => {
    setSelectedProfile(event.target.dataset.profileType)
  }

  return (
    <Row className='min-vh-100'>
      <Col 
        xs='12'
        md={{ offset: 6, size: 6 }}
        lg={{ offset: 7, size: 5}} 
        className='d-flex flex-column justify-content-center'
      >
        <h1 className='text-center mb-4 text-uppercase'>Login</h1>
        <div className='divider mb-4'>&nbsp;</div>
        <h2 className='bg-heading text-dark text-center mb-3'>
          Selecciona Perfil
        </h2>
        <div className='d-flex justify-content-between w-75 mx-auto mb-4'>
          <RoundedSelector 
            id='admin' 
            name='profile-selector' 
            className='border-color-green' 
            handler={selectProfile}
          >
            A
          </RoundedSelector>
          <RoundedSelector 
            id='provider' 
            name='profile-selector' 
            className='border-color-red' 
            handler={selectProfile}
          >
            Pr
          </RoundedSelector>
          <RoundedSelector 
            id='professional' 
            name='profile-selector' 
            className='border-color-yellow' 
            handler={selectProfile}
          >
            Pf
          </RoundedSelector>
          <RoundedSelector 
            id='client' 
            name='profile-selector' 
            className='border-color-orange' 
            handler={selectProfile}
          >
            C
          </RoundedSelector>
        </div>
        <div className='divider mb-4'>&nbsp;</div>
        {!forgottenPassword && !emailSent && (
          <LoginForm 
            handlers={{ requestPasswordRecovery }} 
            formConfig={profileConfig[selectedProfile].formConfig} 
          />
        )}
        {forgottenPassword && <PasswordRecovery handlers={{ submitMail }} />}
        {emailSent && (
          <UiNotification
            icon={profileConfig[selectedProfile].notificationConfig.icon}
            text='En breve recibirás un correo con tu nueva contraseña'
          />
        )}
      </Col>
    </Row>
  )
}

export default Login
