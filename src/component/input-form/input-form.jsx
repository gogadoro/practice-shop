import './input-form.scss';

const InputForm = ({ label, ...otherPorps }) => {
  return (
    <div className='group'>
      <input 
        className='form-input' 
        {...otherPorps}>
      </input>
      {label && (
        <label 
          className={`${
            otherPorps.value.length ? 'shrink' : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default InputForm;