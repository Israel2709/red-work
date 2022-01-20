import { Row, Col, FormGroup, Form, Input, Button } from 'reactstrap'
import MainButton from '../../Components/MainButton'
import RoundedSelector from '../../Components/ProfileSelector'

const Login = () => {
  return (
    <Row className='min-vh-100 bg-hex'>
      <Col xs='12' className='d-flex flex-column justify-content-center'>
        <h1 className='text-center mb-5 text-uppercase'>Login</h1>
        <div className='divider mb-5'>&nbsp;</div>
        <h2 className='bg-heading text-dark text-center mb-3'>
          Selecciona Perfil
        </h2>
        <div className='d-flex justify-content-between w-75 mx-auto mb-5'>
          <RoundedSelector id='a' name='profile-selector' className='border-color-green'>
            A
          </RoundedSelector>
          <RoundedSelector id='pr' name='profile-selector' className='border-color-red'>
            Pr
          </RoundedSelector>
          <RoundedSelector id='pf' name='profile-selector' className='border-color-yellow'>
            Pf
          </RoundedSelector>
          <RoundedSelector id='c' name='profile-selector' className='border-color-orange'>
            C
          </RoundedSelector>
        </div>
        <div className='divider mb-5'>&nbsp;</div>
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
          <MainButton className='w-75 mx-auto'>Ingresar</MainButton>
        </Form>
        <MainButton className='w-75 mx-auto'>
          <a href=''>¿Olvidaste tu contraseña?</a>{' '}
        </MainButton>
      </Col>
    </Row>
  )
}

export default Login
