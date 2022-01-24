import emailOrangeIcon from '../assets/orange-email.png'
import emailRedIcon from '../assets/red-email.png'
import emailGreenIcon from '../assets/green-email.png'
import emailYellowIcon from '../assets/yellow-email.png'

const profileConfig = {
  admin:{
    label:'admin',
    notificationConfig:{
      text:'En breve recibirás un correo con tu nueva contraseña',
      icon:emailGreenIcon,
    },
    formConfig:{
      fields:[
        {
          name: 'email',
          placeholder: 'Ingresa tu correo de redwork',
          handler: 'redwork',
          type:'email'
        },
        {
          name: 'password',
          placeholder: 'Ingresa tu contraseña',
          handler: 'redwork',
          type:'password'
        }
      ],
      buttons:[
        {
          label: <span className='underline'>
            ¿Olvidaste tu contraseña?
          </span>,
          handler: 'requestPasswordRecovery',
        },
        {
          label: 'Ingresar',
          handler: 'login'
        }

      ]
    }
  },
  provider:{
    label:'proveedor',
    notificationConfig:{
      text:'En breve recibirás un correo con tu nueva contraseña',
      icon:emailRedIcon,
    },
    formConfig:{
      fields:[
        {
          name: 'email',
          placeholder: 'Ingresa tu correo de redwork',
          type:'email'
        },
        {
          name: 'password',
          placeholder: 'Ingresa tu contraseña',
          type:'password'
        }
      ],
      buttons:[
        {
          label: <span className='underline'>
            ¿Olvidaste tu contraseña?
          </span>,
        },{
          label: 'Ingresar',
        }
      ]
    }
  },
  professional:{
    label:'profesional',
    notificationConfig:{
      text:'En breve recibirás un correo con tu nueva contraseña',
      icon:emailYellowIcon,
    },
    formConfig:{
      fields:[
        {
          name: 'email',
          placeholder: 'Ingresa tu correo de redwork',
          type:'email'
        },
        {
          name: 'password',
          placeholder: 'Ingresa tu contraseña',
          type:'password'
        }
      ],
      buttons:[
        {
          label: <span className='underline'>
            ¿Olvidaste tu contraseña?
          </span>,
        },{
          label: 'Ingresar',
        }
      ]
    }
  },
  client:{
    label:'cliente',
    notificationConfig:{
      text:'En breve recibirás un correo con tu nueva contraseña',
      icon:emailOrangeIcon,
    },
    formConfig:{
      fields:[
        {
          name: 'email',
          placeholder: 'Ingresa un correo (hotmail, gmail, yahoo, etc)',
          type:'email'
        },
        {
          name: 'password',
          placeholder: 'Ingresa tu contraseña',
          type:'password'
        }
      ],
      buttons:[
        {
          label: <span className='underline'>
            ¿Olvidaste tu contraseña?
          </span>,
        },{
          label: 'Ingresar',
        }
      ]
    }
  }
}

export default profileConfig
