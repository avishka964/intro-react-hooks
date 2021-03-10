import React, { useState } from 'react'

import Card from '../UI/Card'
import './IngredientForm.css'
import LoadingIndicator from '../UI/LoadingIndicator'

const IngredientForm = React.memo((props) => {
  const [userTitle, setUserTitle] = useState('')
  const [userAmount, setUserAmount] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddIngredient({title: userTitle, amount: userAmount})
  }

  return (
    <section className='ingredient-form'>
      <Card>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Name</label>
            <input
              type='text'
              id='title'
              value={userTitle}
              onChange={event => {
                setUserTitle(event.target.value)
              }}
              
            />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              id='amount'
              value={userAmount}
              onChange={ event => {
                setUserAmount(event.target.value)
              }
              }
            />
          </div>
          <div className='ingredient-form__actions'>
            <button type='submit'>Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  )
})

export default IngredientForm
