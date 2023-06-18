import './search-box.styles.css';

const SearchBox =(props)=> {
    const {onChangeHandler} = props;
    const {className} = props;
    const {placeholder} = props;
    return (
        <input 
            className={`search-box ${className}`} 
            type='search' 
            placeholder={placeholder} 
            onChange={onChangeHandler}
        /> 
    )
}
export default SearchBox;