import menus from "./data";
import MenuList from "./MenuList";

export default function TreeView({menus = []}){
    return <div className="tree-view-container">
        <MenuList list={menus} />
    </div>
}