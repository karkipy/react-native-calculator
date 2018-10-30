import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { BACKGROUND_COLOR, BUTTON_PRIMARY_COLOR, BUTTON_SECONDARY_COLOR, BUTTON_EQUALS_COLOR } from './common/Constant';

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
  }

  renderUpperPart() {
    return(
      <View style={styles.firstRow}>
            <View style= {styles.calculatorCells}>
              <TouchableHighlight
                style={styles.primaryButtons}
              >
                <Text style={styles.primaryButtonsText}>C </Text>
              </TouchableHighlight>
            </View>
            <View style= {styles.calculatorCells}>
              <TouchableHighlight
                  style={styles.primaryButtons}
                >
                <Text style={styles.primaryButtonsText}>+/- </Text>
              </TouchableHighlight>
            </View>

            <View style= {styles.calculatorCells}>
              <TouchableHighlight
                  style={styles.primaryButtons}
                >
                <Text style={styles.primaryButtonsText}>% </Text>
              </TouchableHighlight>
            </View>

            <View style= {styles.calculatorCells}>
              <TouchableHighlight
                  style={styles.primaryButtons}
                >
                <Text style={styles.primaryButtonsText}> ÷ </Text>
              </TouchableHighlight>
            </View>
          </View>

    );
  }

  renderSecondRow() {
    return(
      <View style={styles.secondRow}>
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}>7</Text>
        </TouchableHighlight>
      </View>
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}>8</Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}> 9 </Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.primaryButtons}
        >
          <Text style={styles.primaryButtonsText}>x</Text>
        </TouchableHighlight>
      </View>

    </View>
    );
  }


  renderThirdRow() {
    return(
      <View style={styles.secondRow}>
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}>4</Text>
        </TouchableHighlight>
      </View>
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}>5</Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}> 6 </Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.primaryButtons}
        >
          <Text style={styles.primaryButtonsText}>-</Text>
        </TouchableHighlight>
      </View>

    </View>
    );
  }

  renderFourthRow() {
    return(
      <View style={styles.secondRow}>
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}>1</Text>
        </TouchableHighlight>
      </View>
      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}>2</Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}> 3 </Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.primaryButtons}
        >
          <Text style={styles.primaryButtonsText}>+</Text>
        </TouchableHighlight>
      </View>

    </View>
    );
  }

  renderFifthRow() {
    return(
      <View style={styles.secondRow}>
      <View style= {styles.calculatorCellsDouble}>
        <TouchableHighlight
          style={[styles.secondaryButtons, { width: '99%', alignItems: 'baseline'}]}
        >
          <Text style={[styles.secondaryButtonsText, { marginLeft: '20%'}]}>0</Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={styles.secondaryButtons}
        >
          <Text style={styles.secondaryButtonsText}> . </Text>
        </TouchableHighlight>
      </View>

      <View style= {styles.calculatorCells}>
        <TouchableHighlight
          style={[styles.primaryButtons, {backgroundColor: BUTTON_EQUALS_COLOR}]}
        >
          <Text style={styles.primaryButtonsText}> = </Text>
        </TouchableHighlight>
      </View>

    </View>
    );
  }

  render() {
    return(
      <View  style={styles.appContainer}>
        <View style={styles.header}>
          {/* Header part */}
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
