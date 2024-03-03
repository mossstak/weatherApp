// eslint-disable-next-line react/prop-types
const WeatherInput = ({value, onChange}) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} className="p-2 rounded-xl "/>
    </div>
  )
}

export default WeatherInput
