import { Toaster } from "react-hot-toast";
import RouterConfig from "../config/router/RouterConfig";

const App = () => {
  return (
    <div className="font-Poppins">
      <p>HEY</p>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <RouterConfig />
    </div>
  );
};

export default App;
