import TreeView from "./components/TreeView"
import menus from "./components/data"
const App = () => {
  return (
    <div>
        <TreeView menus={menus}/>      
    </div>
  )
}

export default App
