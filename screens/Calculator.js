import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import {
  BACKGROUND_COLOR,
  BUTTON_PRIMARY_COLOR,
  BUTTON_SECONDARY_COLOR,
  BUTTON_EQUALS_COLOR,
  GREY_FONT,
  HISTORY_IMAGE,
} from './common/Constant';

const styles = {
  appContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    height: '26%',
    marginTop: 25,
  },

  headerContainer: {
    width: '95%',
    height: '100%',
    alignSelf: 'center',
  },

  body: {
    width: '100%',
    height: '71%',
  },
  calculatorCells: {
    width: `${100/4}%`,
    height: 90,
  },
  calculatorCellsDouble: {
    width: `${100/2}%`,
    height: 90,
  },
  firstRow: {
   flexDirection: 'row',
   marginTop: 3,
   marginBottom: 3,
  },
  primaryButtons: {
    width: '98%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BUTTON_PRIMARY_COLOR,
  },
  primaryButtonsText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  secondRow: {
    marginBottom: 3,
    flexDirection: 'row',
  },
  secondaryButtons :{
    width: '98%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BUTTON_SECONDARY_COLOR
  },
  secondaryButtonsText: {
    fontSize: 28,
    color: 'white',
  },
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state= {
      history: [],
      primaryDisplay: '0',
      secondaryDisplay: '',
      clear: true,
    }
  }


  primaryButtons(value) {
    return(
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.primaryButtons}
          onPress={() => this.onPressHandler(value)}
        >
          <Text style={styles.primaryButtonsText}> {value} </Text>
        </TouchableHighlight>
      </View>
    );
  }

  onPressHandler(value) {
    const { primaryDisplay, clear } = this.state;
    let newValue = clear ? `${value}` : primaryDisplay.concat(' ' + value);
    this.setState({
      primaryDisplay: newValue,
      clear: false,
    })
  }

  getResult() {
    const { primaryDisplay } = this.state;
    let result = `${eval(primaryDisplay)}`;
    this.setState({
      primaryDisplay: result,
      secondaryDisplay: primaryDisplay,
    })
  }

  backPress() {
    const { clear, primaryDisplay } = this.state;
    let displayArray =  primaryDisplay.split(' ');

    if (displayArray.length === 1) {
      const result = clear
      ? `${primaryDisplay}`
      : primaryDisplay.substr(0, primaryDisplay.length - 1);
      this.setState({
        primaryDisplay: result.length === 0 ? '0' : result,
      })
    } else {
      displayArray.pop();
      const result = displayArray.join(' ');
      this.setState({
        primaryDisplay: result,
      })
    }
  }

  secondaryButtons(value) {
    return(
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
          onPress={() => this.onPressHandler(value)}
        >
          <Text style={styles.secondaryButtonsText}>{value}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  secondaryButtonsAlt(value) {
    return (
      <View style= {styles.calculatorCellsDouble}>
        <TouchableHighlight
          style={[styles.secondaryButtons, { width: '99%', alignItems: 'baseline'}]}
        >
          <Text style={[styles.secondaryButtonsText, { marginLeft: '20%'}]}>{value}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  submitButton() {
    return(
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={[styles.primaryButtons, {backgroundColor: BUTTON_EQUALS_COLOR}]}
          onPress={() => this.getResult()}
        >
          <Text style={styles.primaryButtonsText}> = </Text>
        </TouchableHighlight>
      </View>
    );
  }

  renderUpperPart() {
    return(
      <View style={styles.firstRow}>
        {this.primaryButtons('C')}
        {this.primaryButtons('+/-')}
        {this.primaryButtons('%')}
        {this.primaryButtons('÷')}
      </View>

    );
  }

  renderSecondRow() {
    return(
      <View style={styles.secondRow}>
        {this.secondaryButtons(7)}
        {this.secondaryButtons(8)}
        {this.secondaryButtons(9)}
        {this.primaryButtons('x')}
      </View>
    );
  }


  renderThirdRow() {
    return(
      <View style={styles.secondRow}>
        {this.secondaryButtons(4)}
        {this.secondaryButtons(5)}
        {this.secondaryButtons(6)}
        {this.primaryButtons('-')}
      </View>
    );
  }

  renderFourthRow() {
    return(
      <View style={styles.secondRow}>
        {this.secondaryButtons(1)}
        {this.secondaryButtons(2)}
        {this.secondaryButtons(3)}
        {this.primaryButtons('+')}
    </View>
    );
  }

  renderFifthRow() {
    return(
      <View style={styles.secondRow}>
        {this.secondaryButtonsAlt(0)}
        {this.secondaryButtons('.')}
        {this.submitButton()}
    </View>
    );
  }

  render() {
    const { primaryDisplay, secondaryDisplay } = this.state;
    return(
      <View  style={styles.appContainer}>
        <View style={styles.header}>
          {/* Header part */}
          <View style={styles.headerContainer}>
            <View style={{ width: '100%', flexDirection: 'row-reverse', marginTop: 30 }}>
              <Text style={{ fontSize: 20, color: GREY_FONT }}> {secondaryDisplay} </Text>
            </View>
            <View style={{ flexDirection: 'row-reverse' , width: '100%', marginTop: 25, marginBottom: 30}}>
                <Text style={{ fontSize: 28, color: 'white' }}> {primaryDisplay} </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%'}}>
                <Text style={{ color: 'white', fontSize: 14}}> HISTORY </Text>
              </View>
              <View style={{ width: '50%', flexDirection: 'row-reverse' }}>
                <TouchableHighlight
                  onPress={() => this.backPress()}
                >
                  <Image source={HISTORY_IMAGE} style={{ width: 30, height: 18 }} />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>

        {/* Body part */}
        <View style={styles.body}>
          {this.renderUpperPart()}

          {/* Second part */}
          {this.renderSecondRow()}

          {/* third part */}
          {this.renderThirdRow()}

          {/* fourth part */}
          {this.renderFourthRow()}

          {/* fifth part */}
          {this.renderFifthRow()}

        </View>

      </View>
    );
  }
}

export default Calculator;
