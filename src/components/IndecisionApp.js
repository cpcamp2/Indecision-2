import React from 'react';
import { connect } from 'react-redux';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header2';
import OptionModal from './OptionModal';

export class IndecisionApp extends React.Component {
  state = {
    // options: [],
    selectedOption: undefined
  };

  // handleAddOption = (option) => {
  //   if (!option) {
  //     return 'Enter valid value to add item';
  //   } else if (this.state.options.indexOf(option) > -1) {
  //     return 'This option already exists';
  //   }
  //
  //   this.setState((prevState) => ({options: prevState.options.concat(option)}));
  // };
  //
  // handleDeleteOptions = () => {
  //   this.setState(() => ({options: []}));
  // };
  //
  // handleDeleteOption = (optionToRemove) => {
  //   this.setState((prevState) => ({
  //     options: prevState.options.filter((option) => optionToRemove !== option)
  //   }));
  // };


  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}));
  };

  handleCloseModal = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  // componentDidMount() {
  //   try {
  //     const json = localStorage.getItem('options');
  //     const options = JSON.parse(json);
  //
  //     if (options) {
  //       this.setState(() => ({ options }))
  //     }
  //   } catch (e) {
  //   }
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.options.length !== this.state.options.length) {
  //     const json = JSON.stringify(this.state.options);
  //     localStorage.setItem('options', json);
  //   }
  // }
  //
  // componentWillUnmount() {
  //   console.log('componentWillUnMount');
  // }


  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        {/* <Header subtitle={subtitle} /> */}
        <div className="content-container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.options
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteOptions: () => dispatch(startResetOptions()),
  handleDeleteOption: () => dispatch(startRemoveOption(option)),
  handleAddOption: () => dispatch(startAddOption(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndecisionApp);
