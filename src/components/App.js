import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Navbar } from './layout';
import {
  PronunciationDetails,
  PronunciationHistory,
  PronunciationSearchBar
} from './pronunciation';

import { findPronunciation } from '../actions/pronunciation';

const App = ({
  findPronunciation,
  pronunciation: { history, pronunciation }
}) => {
  useEffect(() => {
    findPronunciation('violet');

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter'>
              <PronunciationSearchBar />
              <PronunciationHistory
                findPronunciation={findPronunciation}
                history={history}
              />
              {pronunciation && (
                <PronunciationDetails pronunciation={pronunciation} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapToStateToProps = ({ pronunciation }) => ({
  pronunciation
});

export default connect(mapToStateToProps, { findPronunciation })(App);
