
export const WeatherButton = (onClick, name) => {
  return (
    <div>
        <button onClick={onClick}>{name}</button>
    </div>
  )
}
