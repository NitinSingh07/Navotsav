import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Tagline } from "./components/tagline.jsx";
import { EventAgenda } from "./components/agenda.jsx";

import FeedbackForm from "./components/feedBackForm.jsx";
import TeamMembers from "./components/team.jsx";
import { EventDetails } from "./components/Events.jsx";
import Footer from "./components/footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tagline />
    <EventDetails />
    <EventAgenda />
    <TeamMembers />
    <FeedbackForm />
    <Footer />
  </StrictMode>
);
