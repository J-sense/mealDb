import React from 'react'

const Meal = ({meal}) => {
    const { strDrinkThumb,strDrink,strInstructionsDE
    } =meal
    console.log(strDrinkThumb)

  return (
    <div>
       <div className="card bg-base-100 md:w-80  shadow">
          <figure>
            <img
              src={strDrinkThumb}
              className='w-full h-full contain'
              alt="contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold text-zinc-950">{strDrink}</h2>
            <p className='text-sm'>{strInstructionsDE?.substring(1, 50)}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-outline btn-secondary">Secondary</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Meal
