import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Tagline } from "./components/tagline.jsx";
import { EventDetails } from "./components/Event.jsx";
import { EventAgenda } from "./components/agenda.jsx";
// import {FeedbackForm} from "./components/feebackForm.jsx"
// import {FeedbackForm} from "./components/feedBackForm.jsx"
import FeedbackForm from "./components/feedBackForm.jsx";
import TeamMembers from "./components/team.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tagline />
    <EventDetails />
    <EventAgenda />
    {/* <FeedbackForm /> */}
    <TeamMembers />
    <FeedbackForm />
  </StrictMode>
);
