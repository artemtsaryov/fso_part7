import { useState } from 'react'

export const useField = (type, name) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.currentTarget.value)
  }

  const reset = () => {
    setValue('')
  }

  const field = {
    type,
    name,
    value,
    onChange
  }

  Object.defineProperty(field, 'reset', {
    enumerable: false,
    value: reset
  })

  return field
}