import React, { useState } from "react";
import { FaIgloo } from "react-icons/fa";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [pay, setPay] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount || !pay) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    } else if(!pay){
      alert('Informe a forma de pagamento')
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      pay: pay,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);
    setPay("")
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            step="00.01"
            min="0"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label> Forma de Pagamento</C.Label>
          <C.Input
            value={pay}
            type="text"
            onChange={(e) => setPay(e.target.value)}
          />
        </C.InputContent>
        
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
