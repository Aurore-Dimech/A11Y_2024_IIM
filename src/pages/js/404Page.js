import React, { useEffect } from "react";

const NotFoundPage = () => {

  useEffect(() => {
    document.title = "Page introuvable | Bibliothèques de Nice"
  }, [])

  return (
    <main role="main">
      <h1>Page introuvable</h1>
    </main>
  );
};

export default NotFoundPage;
