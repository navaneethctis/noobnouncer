import React, { useState } from 'react';
import { connect } from 'react-redux';

import { findPronunciation } from '../../actions/pronunciation';

const PronunciationSearchBar = ({ findPronunciation }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    findPronunciation(term);

    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='field has-addons'>
        <div className='control' style={{ flexGrow: '1' }}>
          <input
            autoComplete='off'
            className='input'
            onChange={event => setTerm(event.target.value)}
            placeholder='Term'
            type='text'
            value={term}
          />
        </div>
        <div className='control'>
          <button className='button is-info'>
            <span className='icon'>
              <i className='fas fa-search' />
            </span>
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default connect(null, { findPronunciation })(PronunciationSearchBar);
