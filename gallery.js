
document.addEventListener('load', function() {
  console.log("hello")
  // Figure out the screen width of user
  const screenWidth = window.screen.width
  console.log("screen width:", typeof window.screen.width)
  // Select all rows
  const rows = document.querySelectorAll('.gallery .row')
  // For each row, grab each image, find image width in % relative to screen width
  for(let i = 0; i<rows.length; i++){
    const columns = rows[i].children
    console.log("rows:", rows[i].children)
    for(let j = 0; j<columns.length; j++){
      let imageWidth = screenWidth/columns[j].children[0].offsetWidth
      console.log("image width:", typeof columns[j].children[0].offsetWidth)
      // Set each image width to be that %
      columns[j].style.width = `${10*imageWidth}%`
      // Set Height relatively to new width to fit screen width
    }
  }
  
})