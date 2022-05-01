import { useState, useRef } from "react";
import Fade from 'react-reveal/Fade';
import Form from "./components/Forms/Form";
import ContentPanel from "./components/Panels/ContentPanel";
import LeftPanel from "./components/Panels/LeftPanel";

function App() {
  const [open, setOpen] = useState(false);
  const formRef = useRef();

  return (
    <main>
      <section className="mainWrapper">
        <div className="leftPanelWrapper">
          <Fade left>
            <LeftPanel setOpen={setOpen} open={open} formRef={formRef} />
          </Fade>
        </div>

        <div className={`rightPanelWrapper`} ref={formRef}>
          <div>
            <ContentPanel open={open} />
          </div>
          <Form /> 
        </div>
      </section>
    </main>
  );
}

export default App;