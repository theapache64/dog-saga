import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import logo from './logo.svg';
import { FETCH_DOG_REQUEST } from './reducers/DogReducer';

interface Props {
  fetchDog: () => void;
  dog: any
}

class App extends React.Component<Props> {
  public render() {

    const { dog } = this.props;
    console.log('Dog is ', dog);
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog != null ? dog.dog : logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>
        <br />
        <button onClick={this.onFetchDogClicked}>FETCH DOG</button>
      </div>
    );
  }

  private onFetchDogClicked = () => {
    this.props.fetchDog();
  }
}

const mapStateToProps = (state: any) => ({
  dog: state.dogReducer.dog
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchDog: () => dispatch({ type: FETCH_DOG_REQUEST })
})

export const app = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
