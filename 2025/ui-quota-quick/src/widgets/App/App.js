import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Card } from '../../entities/'

import styles from './App.module.scss'

const data = [
  {
    id: 0,
    title: 'Restourant May',
    description: 'Some many description May',
    person: 2,
    sum: 200
  },
  {
    id: 1,
    title: 'Restourant Today',
    description: 'Some many description Today',
    person: 3,
    sum: 30
  },
  {
    id: 2,
    title: 'Cafe Tomorrow',
    description: 'Some many description Cafe Tomorrow',
    person: 1,
    sum: 1
  },
  {
    id: 3,
    title: 'Coffee shop',
    description: 'Some many description Coffee shop',
    person: 1,
    sum: 15
  },
  {
    id: 4,
    title: 'Magazine',
    description: 'Some many description Magazine',
    person: 5,
    sum: 370
  }
]

const storage = []

const variants = {
  open: { width: '80%', opacity: 1 },
  closed: { width: "20%", opacity: 0 },
}

const variantsBtnAddToStorge = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
}

export const App = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [openStorage, setOpenStorage] = useState(false)
  const [chooseProduct, setChooseProduct] = useState([])
  const [name, setName] = useState('')
  
  const nameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  console.log(chooseProduct)
  
  const chooseProductHandler = (item) => {
    setChooseProduct((prevState) => [...prevState, item])
  }

  const addToStorageHandler = () => {
    // удаление выбранных из data
    chooseProduct.forEach((product) => {
      data.forEach((item) => {
        if (item.id === product.id) {
          const index = data.indexOf(item)
          storage.push(item)
          data.splice(index, 1)
        }
      })
    })

    clearHandler()
  }

  // очистка
  const clearHandler = () => {
    setChooseProduct([])
    setName('')
  }

  const creatingHandler = () => {
    if (isCreating) setName('')

    setIsCreating((prevState) => !prevState)
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <AnimatePresence initial={false}>
            {isCreating && (
              <motion.div
                animate={isCreating ? "open" : "closed"}
                variants={variants}
                initial={"open"}
                exit={"closed"}
                transition={{
                  duration: .5,
                }}
              >
                <h4>Enter name:</h4>
                <input
                  className={styles.input}
                  value={name}
                  type="text"
                  placeholder="Name"
                  onChange={nameHandler}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            className={`${styles.neonButton} ${isCreating ? styles.active : '' }`}
            onClick={() => creatingHandler()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </button>
        </div>
        
        <button
          className={`${styles.neonButton} ${styles.storageButton} ${openStorage ? styles.active : '' }`}
          onClick={() => setOpenStorage((prevState) => !prevState)}
          disabled={!storage.length}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </header>
      <main className={styles.main}>
        <AnimatePresence initial={false}>
          {(chooseProduct.length && name.length) && (
            <motion.button
              className={`${styles.neonButton} ${styles.setAddToStorageButton}`}
              onClick={() => addToStorageHandler()}
              disabled={!name.length}
              animate={chooseProduct.length ? "show" : "hidden"}
              variants={variantsBtnAddToStorge}
              initial={"open"}
              exit={"closed"}
              transition={{
                duration: .8,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
          </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!openStorage ? (
            <motion.div
              className={styles.wrapperCards}
              animate={{ opacity: 1 }}
              exit={"hidden"}
              transition={{
                duration: 1,
              }}
            >
              {data.map((item) => (
                <div key={item.id} className={styles.mainCard}>
                  <input
                    type='checkbox'
                    onChange={() => chooseProductHandler(item)}
                    disabled={!name.length}
                  />
                  <Card data={item} />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className={styles.wrapperCards}
              animate={{ opacity: 1 }}
              exit={"hidden"}
              transition={{
                duration: .5,
              }}
            >
              {storage.map((item) => <Card key={item.id} data={item} />)}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
