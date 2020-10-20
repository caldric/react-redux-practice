import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  const apiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Input</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        setSelected={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
