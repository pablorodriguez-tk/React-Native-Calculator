import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    //does not accept double zero
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal point
      if (textNumber === '.') {
        return setNumber(number + textNumber);
      }

      // evaluate if it is another zero and there is a point
      if (textNumber === '0' && number.includes('.')) {
        return setNumber(number + textNumber);
      }

      // evaluate if it is different from zero and does not have a point
      if (textNumber !== '0' && !number.includes('.')) {
        return setNumber(textNumber);
      }

      // Avoid 0000.0
      if (textNumber === '0' && !number.includes('.')) {
        return setNumber(number);
      }
    }
    setNumber(number + textNumber);
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {};

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.result}>
        {number}
      </Text>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={clean} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={clean} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={clean} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={clean} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="0" ancho action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
