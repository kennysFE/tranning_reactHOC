import React from 'react'

export default function CreateProduct() {
  return (
     <form>
          <div className="form-group">
            <p>Id</p>
            <input className='form-control' name='id' id="id" />
          </div>
          <div className="form-group">
            <p>name</p>
            <input className='form-control' name='name' id="name" />
          </div>
          <div className="form-group">
            <p>price</p>
            <input className='form-control' name='price' id="price" />
          </div>
          <button className='btn btn-success'>Create</button>
        </form>
      
  )
}
