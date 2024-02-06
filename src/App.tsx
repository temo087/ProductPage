import { useState } from "react"


function App() {

const [menu,setMenu] = useState(true)
  return (
    <>
<header className="w-[100%] h-[50px]">
  <button onClick={()=> {
setMenu(!menu)
{menu? "./public/icon-menu.svg" : "./public/icon-closed.svg"}
  }}></button>
</header>
    </>
  )
}

export default App
