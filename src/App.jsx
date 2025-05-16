import { LessonComponent } from "./components/lessonComponent.jsx";
import { LessonJSX } from "./components/lessonJSX.jsx";
import { LessonProps } from "./components/lessonProps.jsx";
function App() {
  let product_Id = 1001

  return (
    <>
      <LessonComponent />
      <LessonJSX />
      <LessonProps name="Samsuag" product_Id={product_Id} />
    </>
  )
}

export default App
