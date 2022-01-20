const UiNotification = props => {
  const { icon, text } = props
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <img src={icon} alt='' className='w-50 mx-auto mb-5' />
      <p className='text-muted'>{text}</p>
    </div>
  )
}

export default UiNotification
