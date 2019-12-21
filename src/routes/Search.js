import React from 'react'

function SearchTry({location}) {
  return (
    <div>
      {new URLSearchParams(location.search).get('keyword')}search
    </div>
  )
}

export default SearchTry
