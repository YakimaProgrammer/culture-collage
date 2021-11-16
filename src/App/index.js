import { ProjectTile } from "../ProjectTile";
import { CultureCollage } from "../CultureCollage";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import style from "./index.module.css";
import crazed from "../CultureCollage/resources/crazed.jpg";

function ProjectList() {
  return (
    <div>
      <h1 className={style.title}>Photography 101</h1>
      <div className={style.projectContainer}>
        <Link to="culture-collage">          
          <ProjectTile 
            img={crazed}
            description="Culture Collage" 
          />
        </Link>
      </div>
    </div>
  )
}

function Error404() {
  return (
    <h1 className={style.title}>Error 404: Not found</h1>
  )
}

export function App() {
  return (
    <div className={style.overrideLinkStyle}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/culture-collage" element={<CultureCollage />} />
          <Route path="" element={<ProjectList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}