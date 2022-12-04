const FilterButton = (props) => {
  return (
    <button type="button" className="filter-btn" onClick={props.filter}>
      {props.type}
    </button>
  );
};

export default FilterButton;
