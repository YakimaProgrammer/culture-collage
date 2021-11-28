import { ProjectTile } from "../ProjectTile";
import { CultureCollage } from "../CultureCollage";
import { Linear } from "../Linear";
import { BackButton } from "../BackButton";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import style from "./index.module.css";
import sharedStyle from "../shared.module.css";
import crazed from "../CultureCollage/resources/crazed.jpg";
import lockers from "../Linear/resources/lockers.jpg";

function ProjectList() {
  return (
    <div>
      <h1 className={sharedStyle.title}>Photography 101</h1>
      <div className={style.projectContainer}>
        <Link to="culture-collage">          
          <ProjectTile 
            img={crazed}
            description="Culture Collage" 
          />
        </Link>

        <Link to="linear">          
          <ProjectTile 
            img={lockers}
            description="Linear" 
          />
        </Link>
      </div>
    </div>
  )
}

function Error404() {
  return (
    <h1 className={sharedStyle.title}>Error 404: Not found</h1>
  )
}

export function App() {
  return (
    <div className={style.overrideLinkStyle}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BackButton />
        <Routes>
          <Route path="/culture-collage" element={<CultureCollage />} />
          <Route path="/Linear" element={<Linear />} />
          <Route path="" element={<ProjectList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}