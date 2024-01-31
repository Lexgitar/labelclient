import { useState } from 'react'

import Select from 'react-select'

const options = [
    { value: 'metal', label: 'Metal' },
    { value: 'pop', label: 'Pop' },
    { value: 'rap', label: 'Rap' }
  ]

const SelectGenre = () => {
    const [userChoice, setUserChoice] = useState("")
  return (
    <>Select genre
    <Select className='alex' options={options}
    onChange={(choice) => setUserChoice(choice.value)}
    />
    choice: {userChoice}
    <br />
    </>
    
  )
}

export default SelectGenre