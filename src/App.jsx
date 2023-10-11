import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="buttonStyle" onClick={() => console.log("clicked")}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat a velit doloribus mollitia quae officiis vel nobis eius iure assumenda ad dolorem, magnam quibusdam aliquam provident aspernatur. Fugit reprehenderit rerum deserunt. Optio debitis ratione molestiae amet architecto harum sit.</p>
        </Modal>
      </div>

      <div className="contentStyle">Other Content</div>
    </>
  );
}

export default App;
