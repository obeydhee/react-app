import { useState } from 'react'

interface ListGroupProps {
  heading: string
  items: string[]
  onSelectItem: (item: string) => void
}

function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h2 className="h5">{heading}</h2>
      {items.length === 0 && <p className="text-muted">No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item list-group-item-action${
              selectedIndex === index ? ' active' : ''
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
