import { useState, useRef } from "react";
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
          <LeftPanel setOpen={setOpen} open={open} formRef={formRef} />
        </div>

        <div className={`rightPanelWrapper ${open ? 'open' : ''}`} ref={formRef}>
          { open ? <Form setOpen={setOpen} /> : <ContentPanel /> }
        </div>
      </section>
    </main>
  );
}

export default App;