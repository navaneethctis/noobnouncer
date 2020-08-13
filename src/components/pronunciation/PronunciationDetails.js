import React from 'react';

export default ({ pronunciation }) => {
  return (
    <div className='mt-6'>
      <h2 className='title is-1'>{pronunciation.mw}</h2>
      <audio
        className='not-focusable'
        controls
        src={`https://media.merriam-webster.com/audio/prons/en/us/ogg/${pronunciation.sound.audio[0]}/${pronunciation.sound.audio}.ogg`}
      />
    </div>
  );
};
