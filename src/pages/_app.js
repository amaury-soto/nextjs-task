import "../styles/globals.css";
import { TaskProvider } from "../context/TaskContext";

function App({ Component, pageProps }) {
  return (
    <>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </>
  );
}
export default App
