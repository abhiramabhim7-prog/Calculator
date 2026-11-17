import React, { useState } from 'react'

// function Calculator() {
//   const [num1, setNum1] = useState("")
//   const [num2, setNum2] = useState("")
//   const [result, setResult] = useState("")

//   return (
//     <div className='main'>
//       <div className="">
//         <div className="sec">
//           <input
//             type="number"
//             onChange={(e) => setNum1(Number(e.target.value))}
//           />

//           <input
//             type="number"
//             onChange={(e) => setNum2(Number(e.target.value))}
//           />


//         </div>

//         <br />
//         <div className="but">

//           <button onClick={() => setResult(num1 + num2)}>+</button>
//           <button onClick={() => setResult(num1 - num2)}>-</button>
//           <button onClick={() => setResult(num1 * num2)}>*</button>
//           <button onClick={() => setResult(num2 !== 0 ? num1 / num2 : "cannot divide by zero")}>/</button>

//         </div>
//         <h2>Result: {result}</h2>
//       </div>

//     </div>
//   )
// }

// export default Calculator

function Calculator() {

  const [input, setInput] = useState("")
  const [num1, setNum1] = useState("0")
  const [op, setOp] = useState("")

  const calculate = () => {
    const num2 = Number(input);

    if (op === "+") setInput(Number(num1 + num2))
    if (op === "-") setInput(Number(num1 - num2))
    if (op === "*") setInput(Number(num1 * num2))
    if (op === "/") {
      setInput(num2 !== 0 ? Number(num1 / num2) : "error")
    }
  }

  return (

    <div className="main">

      <div className="btns">
      <input value={input} />

        <div className="key">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (

            <button key={n} onClick={() => setInput(input + n)}>
              {n}
            </button>

          ))}
        </div>


        <div className="sim">
          {["+", "-", "*", "/"].map((o) => (
            <button key={o} onClick={() => {
              setNum1(Number(input))
              setOp(o)
              setInput("")
            }}>{o}</button>
          ))}

          <button onClick={calculate}>=</button>

          <button onClick={() => {
            setInput("")
            setNum1("o")
            setOp("")
          }}>c</button>
        </div>

      </div>

    </div>

  )

}
export default Calculator