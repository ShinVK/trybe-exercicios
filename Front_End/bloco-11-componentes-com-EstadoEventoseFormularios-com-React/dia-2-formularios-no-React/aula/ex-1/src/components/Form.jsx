import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor='name'>
          Nome:
          <input type='text' name='name' id='name' maxLength={40} />
        </label>
      </form>
    );
  }
}

export default Form;
