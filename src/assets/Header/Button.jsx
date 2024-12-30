function Button(prop) {
  return (
    <>
      <button type="submit" onClick={prop.fn} className={`mx-1 ${prop.className}`}>{prop.name}</button>
    </>
  )
}

export default Button
