import React from "react";
import PageWrapper from "../components/PageWrapper";

const HomePage: React.FC = () => {
    return (
        <PageWrapper>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue sur</h1>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-nav-gradient">
                        Operation Strike & Secure
                    </span>
                </h1>
                <p className="text-base md:text-lg max-w-lg mx-auto mb-6">
                    <strong>Operation Strike & Secure</strong> est un jeu de tir tactique multijoueur en ligne qui combine des éléments de furtivité et de combat à haute intensité.
                    Plongez dans des missions à haut risque, où chaque décision compte et la coopération est la clé de la victoire.
                </p>
                <p className="text-base md:text-lg max-w-lg mx-auto mb-8">
                    Que vous soyez un maître de la stratégie ou un amateur d'adrénaline, notre jeu vous offre des heures de gameplay palpitant dans des environnements variés et immersifs.
                </p>
                <a
                    href="/download"
                    className="inline-block bg-nav-gradient text-blue-background px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:from-orange-600 hover:to-yellow-500 transition-all"
                >
                    Télécharger maintenant
                </a>
            </div>
        </PageWrapper>
    );
};

export default HomePage;
