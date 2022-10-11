
import Home from './screens/Home';
import './style/common.css'
import './style/small-device.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;


/*

  <div className="mb-2">
                        {['up'].map((direction) => (
                            <DropdownButton
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Drop ${direction} `}
                                className='xd' >
                                <Dropdown.Item eventKey="1">
                                   <EmojiPicker
                                  theme='dark'
                                  onEmojiClick={handleEmojiClick}
                                  height={450}
                                  width={300}
                                  style={{ backgroundColor: 'transparent' }}
                            />
                                </Dropdown.Item>
                            </DropdownButton>
                        ))}
                    </div>

* */