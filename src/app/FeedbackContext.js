"use client";

import { createContext, useState } from "react";

export const feedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedbacks, setfeedbacks] = useState([
    {
      id: 1,
      image: "/image/perfume/rebert-removebg-preview.png",
      detailsOfFeedback:
        "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Ahmad Jomhawi",
      job: "Full-Stack Developer",
    },
    {
      id: 2,
      image: "/image/perfume/DOLCE-removebg-preview.png",
      detailsOfFeedback:
        "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Ahmad Jomhawi",
      job: "Full-Stack Developer",
    },
    {
      id: 3,
      image: "/image/perfume/YOU-removebg-preview.png",
      detailsOfFeedback:
        "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Ahmad Jomhawi",
      job: "Full-Stack Developer",
    },
    {
      id: 4,
      image: "/image/perfume/blue_chanel-removebg-preview.png",
      detailsOfFeedback:
        "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Ahmad Jomhawi",
      job: "Full-Stack Developer",
    },
  ]);

  return (
    <feedbackContext.Provider value={feedbacks}>
      {children}
    </feedbackContext.Provider>
  );
}
