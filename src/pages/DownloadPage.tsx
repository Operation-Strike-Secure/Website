import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { Button } from "@mui/material";

const DownloadPage: React.FC = () => {
  const [isWindows, setIsWindows] = useState(false);
  const [userOS, setUserOS] = useState("");

  useEffect(() => {
    const platform = window.navigator.userAgent;
    if (platform.includes("Win")) {
      setIsWindows(true);
      setUserOS("Windows");
    } else if (platform.includes("Mac")) {
      setUserOS("MacOS");
    } else if (platform.includes("Linux")) {
      setUserOS("Linux");
    } else {
      setUserOS("Un autre système");
    }
  }, []);

  return (
      <PageWrapper>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Téléchargez Operation Strike & Secure</h1>

          {isWindows ? (
              <div>
                <p className="mb-4">Votre système : <strong>{userOS}</strong></p>
                <p className="mb-6">Cliquez sur le bouton ci-dessous pour télécharger le jeu.</p>
                <Button
                    variant="contained"
                    color="primary"
                    href="/path-to-your-zip-file.zip"
                    download
                    sx={{ backgroundColor: "#E8A382", "&:hover": { backgroundColor: "#FEE2D6" } }}
                >
                  Télécharger pour Windows
                </Button>
              </div>
          ) : (
              <div>
                <p className="mb-4">Votre système : <strong>{userOS}</strong></p>
                <p className="text-lg mb-6">
                  Le jeu n'est pas encore disponible pour <strong>{userOS}</strong>.
                  Nous travaillons activement pour le rendre disponible sur votre plateforme !
                </p>
              </div>
          )}
        </div>
      </PageWrapper>
  );
};

export default DownloadPage;