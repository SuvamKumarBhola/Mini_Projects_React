import PropTypes from 'prop-types';

const DropDown = (props) =>{
    const {name, lable, defaultValue, register, errorMessage, options } = props;

    return(
    <div className='select-container'>
        <lable htmlFor={name}>{lable}</lable>
        <select className='select-field peer' defaultValue={defaultValue} name={name} id={name} {...register(name)}>
            {options.map(option=>(
                <options key={option.value} value={option.value} disabled={option.disabled}>{option.label}</options>
            ))}
        </select>
        <span className='error'>{errorMessage}</span>
    </div>        
    );

}
DropDown.PropTypes = {
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    register: PropTypes.func,
    errorMessage: PropTypes.string,
    options: PropTypes.array
}

export default DropDown;