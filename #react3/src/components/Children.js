import React from 'react'

const Children = ({children}) => {
    console.log(children)
  return (
    <> {/* React.Fragment */}
    <div className='red'>{Children}</div>
    <div style={{color :'red'}}>인라인스타일</div>
    </>
  )
}

export default Children