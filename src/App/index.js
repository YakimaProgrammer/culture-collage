import { ProjectTile } from "../ProjectTile";
import { CultureCollage } from "../CultureCollage";
import { Linear } from "../Linear";
import { AnimalPhotography } from "../AnimalPhotography";
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
import pondering from "../AnimalPhotography/resources/pondering.jpg";

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

        <Link to="animal-photography">          
          <ProjectTile 
            img={pondering}
            //I had to include a font-size override so that the text doesn't try to wrap
            description={<span className={style.tiny}>Animal Photography</span>} 
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
          <Route path="/linear" element={<Linear />} />
          <Route path="/animal-photography" element={<AnimalPhotography />} />
          <Route path="" element={<ProjectList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}