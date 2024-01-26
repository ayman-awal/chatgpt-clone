
function App() {

  const getMessages = async () =>  {
    console.log("Clicked");

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: "Hello how are you"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    console.log("here");

    try {
      console.log('in');
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json();
      console.log(data);
      console.log('out');
      // console.log(data); 
    } catch (error) {
        console.error(error)
    }
  }



  return (
    <div className="App flex">
      <div className="sidebar flex flex-column justify-between">
          <button>New chat +</button>
          <ul className="history">
            <li>sss</li>
          </ul>
          <nav>
            <p>Made by Ayman</p>
          </nav>
      </div>

      <div className="main flex flex-column justify-between align-center text-center">
        <h1>ChatGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section flex flex-column justify-center align-center">
          <div className="input-container flex">
            <input />
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
