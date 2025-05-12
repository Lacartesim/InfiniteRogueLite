// js/main.js

// Attendre que le DOM (la structure HTML) soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is fully loaded.');

    // --- Votre logique de démarrage du jeu ici ---

    // Exemple : Afficher l'écran du menu au démarrage
    // Assurez-vous que les fonctions ou objets nécessaires (comme MenuManager) sont définis
    // dans les scripts précédents (menu.js) et sont accessibles globalement ou via un pattern de module.

    // Pour l'instant, nous allons juste modifier le style pour afficher le menu
    // Les scripts js/menu.js, js/game.js, etc. devraient définir des fonctions pour gérer ça.

    // Pseudocode (logique réelle à implémenter dans menu.js)
    // const menuManager = new MenuManager();
    // menuManager.showMenu();

    // Solution simple pour commencer : Assurez-vous que l'écran du menu est visible
    const menuScreen = document.getElementById('menu-screen');
    if (menuScreen) {
        menuScreen.style.display = 'flex'; // Affiche l'écran du menu
        // Remplir le menu avec des boutons (sera fait par menu.js)
        // Nous allons le faire ici temporairement pour le tester
        menuScreen.innerHTML = `
            <h1>Infinite Rogue Lite</h1>
            <button class="menu-button" id="play-button">Play</button>
            <button class="menu-button" id="load-button">Load</button>
            <button class="menu-button" id="settings-button">Settings</button>
            <button class="menu-button" id="quit-button">Quit</button>
        `;

        // Ajouter des écouteurs d'événements (sera fait par menu.js)
        document.getElementById('play-button').addEventListener('click', () => {
            console.log('Play button clicked!');
            // Logique pour lancer le jeu (sera dans game.js ou main.js)
            // Exemple : cacher le menu et afficher l'écran de jeu
            menuScreen.style.display = 'none';
            document.getElementById('gameplay-screen').style.display = 'block'; // Ou 'flex' selon votre layout
            // Lancer la logique du jeu...
        });

        // Ajoutez des écouteurs similaires pour les autres boutons (Load, Settings, Quit)
    } else {
        console.error('Menu screen element not found!');
    }


    console.log('Main script finished.');
});

// Note: La logique réelle de chaque bouton et de la gestion des écrans sera déplacée
// dans les fichiers js/menu.js et js/game.js par la suite pour une meilleure organisation.