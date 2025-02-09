"use client";

export const NoteForm = () => {
  const loggedIn = false;

  const author = loggedIn ? "loggedIn" : "";
  return <>{author}</>;
};
