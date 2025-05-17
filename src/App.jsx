import { LessonComponent } from "./components/lessonComponent.jsx";
import { LessonJSX } from "./components/lessonJSX.jsx";
import { LessonProps, LessonProps2 } from "./components/lessonProps.jsx";

function App() {
  const product_Id = 1001;

  return (
    <>
      <LessonComponent />
      <LessonJSX />

      <LessonProps name=": Samsung" product_Id={product_Id} />
      <LessonProps2 name=": Dell" product_Id={63} />
    </>
  );
}

export default App;
