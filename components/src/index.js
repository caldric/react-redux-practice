import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';

const App = () => {
  return (
    <div>
      <div className="ui container comments">
        <Comment
          author="Sam"
          date="Today at 6:00PM"
          text="Nice blog post!"
          avatar={faker.image.avatar()}
        />
        <Comment
          author="Miguel"
          date="Yesterday at 5:00PM"
          text="That's what she said!"
          avatar={faker.image.avatar()}
        />
        <Comment
          author="Robby"
          date="Today at 4:45PM"
          text="What did you say?!"
          avatar={faker.image.avatar()}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
