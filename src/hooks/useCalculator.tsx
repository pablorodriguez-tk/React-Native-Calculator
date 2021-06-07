import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperationRef = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
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

  const btnDelete = () => {
    if (
      number.length === 1 ||
      (number.length === 2 && number.startsWith('-'))
    ) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const changePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber('0');
  };

  const btnDivide = () => {
    changePreviousNumber();
    lastOperationRef.current = Operators.divide;
  };

  const btnMultiply = () => {
    changePreviousNumber();
    lastOperationRef.current = Operators.multiply;
  };

  const btnSubstract = () => {
    changePreviousNumber();
    lastOperationRef.current = Operators.substract;
  };

  const btnAdd = () => {
    changePreviousNumber();
    lastOperationRef.current = Operators.add;
  };

  const calculate = () => {
    if (previousNumber === '0' && number === '0') {
      return;
    }

    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperationRef.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPreviousNumber('0');
  };

  return {
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
  };
};
