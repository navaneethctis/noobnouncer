import React from 'react';

export default ({ findPronunciation, history }) => (
  <div className='columns is-multiline mt-3'>
    {history.map(term => (
      <div className='column is-narrow' key={term}>
        <div className='box py-3'>
          <a
            className='link'
            href={`/${term}`}
            onClick={event => {
              event.preventDefault();

              findPronunciation(term);
            }}
          >
            {term}
          </a>
        </div>
      </div>
    ))}
  </div>
);
