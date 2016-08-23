import React, {PropTypes} from 'react';
import TextInput from './TextInput';

const SearchForm = () => {
  return (
    <form className="navbar-form navbar-right" role="search">
      <input type="text" className="form-control" placeholder="Search"/>
    </form>
  );
};

export default SearchForm;
