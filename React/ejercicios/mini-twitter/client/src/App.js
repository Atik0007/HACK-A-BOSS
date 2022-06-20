import Navbar from './component/navbar/navbar';
import Twitter from './component/twitter/Twitter';
import Modal from './component/Modal';

import './App.css';

import { useModal } from './utils/ModalContext';

function App() {
    const [modal] = useModal();
    return (
        <div className="App">
            <Navbar />
            <Twitter />
            {modal && <Modal>{modal}</Modal>}
        </div>
    );
}

export default App;
