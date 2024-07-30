
const Inputs: React.FC<InputProps> = ({ id, placeholder, type, isRequired }) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor={id}>{placeholder}</label>
      <input type={type} className="form-control" name={id} id={id} required={isRequired}/>
    </div>
  )
}

export default Inputs;