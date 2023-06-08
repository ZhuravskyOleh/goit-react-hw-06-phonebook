import PropTypes from 'prop-types';
import { SearchWrapp, Input, SearchLabel } from './Filter.styled';



export const  Filter= ({ handlerChangeFilter, value }) => {
  return (
    <SearchWrapp>
      <SearchLabel htmlFor="filter">Find contacts by name:</SearchLabel>
      <Input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerChangeFilter}
        value={value}
      />
    </SearchWrapp>
  );
}

Filter.propTypes = {
  handlerChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


