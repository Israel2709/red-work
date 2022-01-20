import './styles.scss'

const RoundedSelector = props => {
  const { children = 'X', name, id, className } = props
  return (
    <div className='rounded-selector'>
      <input type='radio' id={id} name={name} />
      <label htmlFor={id} className={`${className}`}>{children}</label>
    </div>
  )
}

export default RoundedSelector
