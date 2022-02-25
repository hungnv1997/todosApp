import React from 'react'

export const BulkActions = () => {
  return (
    <div className="todosList--bulkAction w-100 d-flex flex-row justify-content-between align-items-center border-top border-dark">
      <div>
        <p className="m-0 mx-3">Bulk Action:</p>
      </div>
      <div>
        <button className="btn btn-primary px-4">Done</button>
        <button className="btn btn-danger mx-2">Remove</button>
      </div>
    </div>
  )
}

export default BulkActions
