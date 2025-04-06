
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lipolise from "./pages/Lipolise";
import SistemaLinfatico from "./pages/SistemaLinfatico";
import Eletroterapia from "./pages/Eletroterapia";
import Exame from "./pages/Exame";
import Envelhecimento from "./pages/Envelhecimento";
import Discromias from "./pages/Discromias";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lipolise" element={<Lipolise />} />
          <Route path="/sistema-linfatico" element={<SistemaLinfatico />} />
          <Route path="/eletroterapia" element={<Eletroterapia />} />
          <Route path="/exame" element={<Exame />} />
          <Route path="/envelhecimento" element={<Envelhecimento />} />
          <Route path="/discromias" element={<Discromias />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
