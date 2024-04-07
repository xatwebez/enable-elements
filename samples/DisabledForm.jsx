import React from 'react';

class DisabledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      inputPassword: '',
      inputEmail: '',
      inputNumber: 0,
      inputCheckbox: false,
      inputRadio: '',
      selectElement: 'option1',
      textareaElement: ''
    };
  }

  render() {
    return (
      <div>
        <h2>All Form Elements with Disabled Attribute</h2>
        <form>
          <fieldset>
            <legend>Inputs</legend>
            <label htmlFor="inputText">Text Input:</label>
            <input type="text" id="inputText" name="inputText" value={this.state.inputText} disabled /><br /><br />

            <label htmlFor="inputPassword">Password Input:</label>
            <input type="password" id="inputPassword" name="inputPassword" value={this.state.inputPassword} disabled /><br /><br />

            <label htmlFor="inputEmail">Email Input:</label>
            <input type="email" id="inputEmail" name="inputEmail" value={this.state.inputEmail} disabled /><br /><br />

            <label htmlFor="inputNumber">Number Input:</label>
            <input type="number" id="inputNumber" name="inputNumber" value={this.state.inputNumber} disabled /><br /><br />

            <label htmlFor="inputCheckbox">Checkbox:</label>
            <input type="checkbox" id="inputCheckbox" name="inputCheckbox" checked={this.state.inputCheckbox} disabled /><br /><br />

            <label htmlFor="inputRadio">Radio Button:</label>
            <input type="radio" id="inputRadio1" name="inputRadio" value="radio1" checked={this.state.inputRadio === 'radio1'} disabled />
            <label htmlFor="inputRadio1">Radio 1</label>
            <input type="radio" id="inputRadio2" name="inputRadio" value="radio2" checked={this.state.inputRadio === 'radio2'} disabled />
            <label htmlFor="inputRadio2">Radio 2</label><br /><br />
          </fieldset>

          <fieldset>
            <legend>Select</legend>
            <label htmlFor="selectElement">Select:</label>
            <select id="selectElement" name="selectElement" value={this.state.selectElement} disabled>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select><br /><br />
          </fieldset>

          <fieldset>
            <legend>Textarea</legend>
            <label htmlFor="textareaElement">Textarea:</label><br />
            <textarea id="textareaElement" name="textareaElement" value={this.state.textareaElement} disabled></textarea><br /><br />
          </fieldset>

          <input type="submit" value="Submit" disabled />
          <input type="reset" value="Reset" disabled />
        </form>
      </div>
    );
  }
}

export default DisabledForm;
