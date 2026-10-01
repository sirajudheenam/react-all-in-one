// https://blog.logrocket.com/drag-and-drop-react-dnd/
// https://www.youtube.com/watch?v=Vqa9NMzF3wc - Do this instead
// Continue
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import ImageList from "./ImageList";

export default function DragDrop() {
  // Replace with set of Images

  const [images, setImages] = useState(["ABC", "DEF", "GHI"]);
  const moveImage = (dragIndex, hoverIndex) => {
    // Get the dragged element
    const draggedImage = images[dragIndex];
    /*
          - copy the dragged image before hovered element (i.e., [hoverIndex, 0, draggedImage])
          - remove the previous reference of dragged element (i.e., [dragIndex, 1])
          - here we are using this update helper method from immutability-helper package
        */
    setImages(
      update(images, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };

  // We will pass this function to ImageList and then to Image -> Quite a bit of props drilling, the code can be refactored and place all the state management in ImageList itself to avoid props drilling. It's an exercise for you :)

  return (
    <DndProvider backend={HTML5Backend}>
      <ImageList images={images} moveImage={moveImage} />
      <div>
        <h1>Drag Drop</h1>
      </div>
    </DndProvider>
  );

  // return <div>Hello Drag & Drop</div>;
}
