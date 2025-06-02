"use client";

import HeaderOfAbout from "../compenets/about/HearderOfAbout";
import BodyOfAbout from "../compenets/about/BodyOfAbout";
import { FeedbackProvider } from "../FeedbackContext";

export default function About() {
  return (
    <div>
      <HeaderOfAbout />
      <FeedbackProvider>
        <BodyOfAbout />
      </FeedbackProvider>
    </div>
  );
}
