import React from 'react';

class Form extends React.Component {
  render() {
    const { name, type, maxl } = this.props;
    return (
      <form>
        <label htmlFor={name}>
          Nome:
          <input type={type} name={name} id={name} maxLength={maxl} />
        </label>
      </form>
    );
  }
}

export default Form;
