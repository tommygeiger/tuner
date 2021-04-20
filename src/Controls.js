import { useContext } from 'react'
import { SearchContext } from './SearchContext'

function Controls() {

  const { params, setParams } = useContext(SearchContext);

  return (
    <div>
      <h3>Controls go here</h3>
    </div>
  )
}

export default Controls