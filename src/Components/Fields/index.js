import './styles.scss'

const Fields = props => {
  const { name, placeholder, type } = props
  return (
    <div className='d-flex flex-column mb-3'>
      <input 
        className='input'
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default Fields
