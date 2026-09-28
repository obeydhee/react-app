import { useState } from 'react'
import Alert from './Alert'
import Button from './Button'

type Operation = '+' | '-' | '×' | '÷'

const operations: Operation[] = ['+', '-', '×', '÷']

function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '×':
      return a * b
    case '÷':
      return a / b
  }
}

function Calculator() {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const run = (op: Operation) => {
    const a = Number(first)
    const b = Number(second)
    if (first.trim() === '' || second.trim() === '' || isNaN(a) || isNaN(b)) {
      setResult(null)
      setError('Please enter two valid numbers.')
      return
    }
    if (op === '÷' && b === 0) {
      setResult(null)
      setError('Cannot divide by zero.')
      return
    }
    setError(null)
    setResult(`${a} ${op} ${b} = ${calculate(a, b, op)}`)
  }

  const reset = () => {
    setFirst('')
    setSecond('')
    setResult(null)
    setError(null)
  }

  return (
    <>
      <h2 className="h5">Calculator</h2>
      <div className="row g-2 mb-3">
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="First number"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Second number"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {operations.map((op) => (
          <Button key={op} onClick={() => run(op)}>
            {op}
          </Button>
        ))}
        <Button variant="secondary" outline onClick={reset}>
          Clear
        </Button>
      </div>
      {error && (
        <Alert variant="danger" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      {result && (
        <Alert variant="success" onClose={() => setResult(null)}>
          {result}
        </Alert>
      )}
    </>
  )
}

export default Calculator
