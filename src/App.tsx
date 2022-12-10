import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Download from "./pages/Download";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download/" element={<Download />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
