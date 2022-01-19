import './styles.scss'

const MainButton = props => {
  const { children, className } = props
  return (
    <button type='button' className={`main-button ${className}`}>
      {children}
    </button>
  )
}

export default MainButton
