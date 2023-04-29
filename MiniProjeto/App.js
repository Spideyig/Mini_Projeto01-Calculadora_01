import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {


  function calculator() {
    const splitNumbers = numAtual.split(' ')
    const operator = splitNumbers[1]
    const firstNum = parseFloat(splitNumbers[0])
    const lastNum = parseFloat(splitNumbers[2])

    
    switch (operator) {
      
      case '+':
        setNumAtual((firstNum + lastNum).toString())
      return

      case '-':
        setNumAtual((firstNum - lastNum).toString())
      return

      case '*':
        setNumAtual((firstNum * lastNum).toString())
      return

      case '/':
        setNumAtual((firstNum / lastNum).toString())
      return

      case 'MOD':
        setNumAtual((firstNum % lastNum).toString())
      return

      case '²':
        setNumAtual((Math.pow(firstNum,2)).toString())
      return

      case '³':
        setNumAtual((Math.pow(firstNum,3)).toString())
      return

      case '^*':
        setNumAtual((Math.pow(firstNum, lastNum)).toString())
      return

    }
  }
  const [numAtual, setNumAtual] = useState("")
  const [ultimoNum, setUltimoNum] = useState("")

  const botoes = ['LIMPAR', 'DEL', 'MOD', '','³', '²','^*','/', 7, 8, 9, "*", 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '=',]
   
  function handleInput(buttonPressed) {
    console.log(buttonPressed) 
    if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" | buttonPressed === "MOD"
    | buttonPressed === '²' | buttonPressed === '³' | buttonPressed === '^*' ) {
      setNumAtual(numAtual + " " + buttonPressed + " ")
      return
    }
    switch (buttonPressed) {

      case 'DEL':
        setNumAtual(numAtual.substring(0, (numAtual.length - 1)))
      return

      case 'LIMPAR': 
        setUltimoNum("")
        setNumAtual("")
      return

      case '=':
        setUltimoNum(numAtual + " = ")
        calculator()
      return

      case '+/-':
        setNumAtual((-1 * numAtual).toString())
      return
    }

    setNumAtual(numAtual + buttonPressed)
  }

  return (
    <View style={estilo.caixa}>

      <View style={estilo.resultados}>
        <Text style={estilo.historico}>{ultimoNum}</Text>
        <Text style={estilo.saida}>{numAtual}</Text>
      </View>

      <View style={estilo.botoes}>

        {botoes.map((button) =>
          button === '=' ? 
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[estilo.button, { backgroundColor: '#092991' }]}>
              <Text style={[estilo.textoBotao, { color: "white", fontSize: 40 }]}>{button}</Text>
            </TouchableOpacity>
            : 
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={estilo.button}>
              <Text style={[estilo.textoBotao, { color: typeof (button) === 'number' ? 'white' : 'white' }]}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}


const estilo = StyleSheet.create({
  caixa: {
    flex: 1,
  },
  resultados: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#092991"
  },
  saida: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
    textAlign: "right"
  },
  historico: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#0489d6',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textoBotao: {
    color: "yellow",
    fontSize: 24,
  }
});