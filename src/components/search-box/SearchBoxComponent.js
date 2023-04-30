import './searchBox.style.css';

const SearchBoxComponent = (props) => {
    const { className, handleChange, placeholder} = props;
    return (
        <input
            type="search"
            className={className}
            placeholder={placeholder}
            onChange={handleChange}
      />
    )
}
export default SearchBoxComponent;
