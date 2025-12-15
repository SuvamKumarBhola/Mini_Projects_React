import { useState } from "react"
import data from "./data"

export default function Accordian() {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelect, setEnableMultiSelect] = useState(false)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelector(id) {
    setSelected(id === selected ? null : id)
  }

  function handleMultiSelector(id) {
    setMultiple((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  console.log(selected);
  return (
    <div style={styles.wrapper}>
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        {enableMultiSelect ? "Disable" : "Enable"} Multi Selection
      </button>

      <div style={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isSingleOpen = selected === dataItem.id
            const isMultiOpen = multiple.includes(dataItem.id)
            const isOpen = enableMultiSelect ? isMultiOpen : isSingleOpen

            return (
              <div style={styles.accordianItem} key={dataItem.id}>
                <div
                  onClick={() =>
                    enableMultiSelect
                      ? handleMultiSelector(dataItem.id)
                      : handleSingleSelector(dataItem.id)
                  }
                  style={styles.title}
                >
                  <h3 style={styles.question}>{dataItem.question}</h3>
                  <span style={styles.icon}>{isOpen ? "-" : "+"}</span>
                </div>

                {isOpen && (
                  <div style={styles.answer}>{dataItem.answer}</div>
                )}
              </div>
            )
          })
        ) : (
          <div style={styles.noData}>No Data Found</div>
        )}
      </div>
    </div> 
  )
}


const styles = {
  wrapper: {
    minHeight: '100vh',
    minwidth: '100vw',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    flexDirection: 'column',
    gap: '15px'
  },
  accordian: {
    width: '100%',
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  accordianItem: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 25px',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'background-color 0.2s'
  },
  question: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    flex: 1
  },
  icon: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#667eea',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px'
  },
  answer: {
    padding: '0 25px 20px 25px',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    animation: 'fadeIn 0.3s ease-in'
  },
  noData: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'white',
    padding: '40px'
  }
}