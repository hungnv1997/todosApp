export const ValidateFormTodo = (array) => {
  //return arr [true, false, ....]
  let arrCheck = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].type === 'name') {
      if (!array[i].value) {
        arrCheck.push(true)
      } else {
        arrCheck.push(false)
      }
    }
  }
  return arrCheck
}
