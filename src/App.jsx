import InteractiveAudit from "./pages/InteractiveAudit";
import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuditSimulator from "./pages/AuditSimulator";

function App() {

  return (

    <Routes>
<Route
  path="/interactive-ai-audit"
  element={<InteractiveAudit />}
/>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/ai-audit-simulator"
        element={<AuditSimulator />}
      />

    </Routes>

  );
}

export default App;