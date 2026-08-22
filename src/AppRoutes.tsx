import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Offer from "./pages/Offer";
import Privacy from "./pages/Privacy";
import ServicePage from "./pages/ServicePage";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/uslugi/:slug" element={<ServicePage />} />
      <Route path="/ceny" element={<Prices />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
