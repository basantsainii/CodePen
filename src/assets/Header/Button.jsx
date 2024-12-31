function Button(prop) {
  return (
    <>
    
    <button type="submit"  className={`mx-1  ${prop.className}`} value={prop.name} >{prop.name}</button>
    
      
    </>
  )
}

export default Button
