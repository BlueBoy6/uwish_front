export default function Footer() {
  return (
    <footer className="App-footer">
      <h4>Usefull links</h4>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span className="dot">&#183;</span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span className="dot">&#183;</span>
        <a
          className="App-link"
          href="https://redux-saga.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux-Saga
        </a>
      </p>
    </footer>
  );
}
