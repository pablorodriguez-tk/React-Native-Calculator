import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="X" color="#FF9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" color="#FF9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" color="#FF9427" />
      </View>
      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="0" ancho />
        <ButtonCalc text="." />
        <ButtonCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};
