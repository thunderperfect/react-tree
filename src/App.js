import TreeModel from "tree-model";
import ReactJson from "react-json-view";
// import { useState } from "react";
let tree = new TreeModel();
let root = tree.parse({
  id: 1,
  name: "test 1",
  children: [
    {
      id: 11,
      name: "test 11",
      children: [{ id: 111, name: "test 111" }]
    },
    {
      id: 12,
      name: "test 12",
      children: [
        { id: 121, name: "test 121" },
        { id: 122, name: "test 122" }
      ]
    },
    {
      id: 13,
      name: "test 13"
    }
  ]
});
export default function App() {
  //const [treeModel, setTreeModel] = useState(root);

  const testMe = () => {
    root.walk({ strategy: "breadth" }, function (node) {
      // Halt the traversal by returning false
      if (node.model.id === 121) {
        console.log("here");
        node.model.name = "test";
        return false;
      }
    });
  };

  return (
    <>
      <ReactJson src={root} />
      <button onClick={testMe}>test me </button>
    </>
  );
}
