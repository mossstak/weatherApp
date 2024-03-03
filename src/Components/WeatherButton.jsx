/* eslint-disable react/prop-types */

export const WeatherButton = ({ onClick, name }) => {
  return (
    <div>
      <button
        className="outline outline-1 p-1 w-[100px] rounded-xl bg-gray-300 hover:bg-gray-100"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  )
}
