import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    buildNumber,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate,
  } = useCalculator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.result}>
        {number}
      </Text>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubstract} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>
      {/* button row */}
      <View style={styles.row}>
        <ButtonCalc text="0" ancho action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
