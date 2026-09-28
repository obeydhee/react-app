import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import Calculator from './components/Calculator'
import ListGroup from './components/ListGroup'

const cities = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

function App() {
  const [alertVisible, setAlertVisible] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  return (
    <div className="container py-4" style={{ maxWidth: 720 }}>
      <h1 className="mb-4">React + TypeScript + Bootstrap</h1>

      <section className="mb-5">
        <h2 className="h5">Alert &amp; Button</h2>
        {alertVisible && (
          <Alert variant="info" onClose={() => setAlertVisible(false)}>
            Hello! This alert was opened by the button below.
          </Alert>
        )}
        <Button onClick={() => setAlertVisible(true)} disabled={alertVisible}>
          Show alert
        </Button>
      </section>

      <section className="mb-5">
        <ListGroup
          heading="Cities"
          items={cities}
          onSelectItem={setSelectedCity}
        />
        {selectedCity && (
          <p className="mt-2 mb-0">
            Selected: <strong>{selectedCity}</strong>
          </p>
        )}
      </section>

      <section>
        <Calculator />
      </section>
    </div>
  )
}

export default App
