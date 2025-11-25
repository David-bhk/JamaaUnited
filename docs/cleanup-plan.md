# Plan de nettoyage visuel & contenu (Novembre 2025)

## 1. Contexte
- Jamaa United est encore en phase de lancement et n'a pas encore branché le CMS prévu pour alimenter les programmes, domaines d'impact et fiches d'équipe.
- Plusieurs sections affichent encore des photos génériques et des contenus présentés comme opérationnels alors qu'ils ne le sont pas.
- Objectif : garantir que chaque page reflète fidèlement l'état réel du projet et préparer le terrain pour l'intégration du CMS.

## 2. Périmètre inclus
| Section | Problème actuel | Résultat attendu |
| --- | --- | --- |
| Accueil – `HeroSection.jsx` | Carrousel d'images Unsplash, stats "0" présentées comme réelles | Fond abstrait, message unique, stats masquées ou marquées "à venir" |
| Activités – `pages/activities` | Listes de programmes/initiatives remplies en dur alors qu'elles devraient venir du CMS | Données externalisées avec flag `isPreview`, message "CMS en préparation" + CTA intérêt |
| Kouz Program Section | Texte + chiffres présentés comme acquis | Section présentée comme concept avec objectifs 2025 |
| Domaines d'impact – `impact-domains` | Fiches complètes + modale détaillée basées sur données fictives | Cartes sans photo, bandeau "en validation", modale simplifiée ou désactivée |
| Page Équipe | Photos & bios complètes alors que l'équipe n'est pas encore annoncée | Cartes avec monogrammes/silhouettes + message "équipe en constitution" |
| À propos – Hero & Timeline | Photos stock + métriques inventées | Frise textuelle/illustrée abstraite, hero graphique |

_Hors périmètre_: intégration CMS, nouvelles pages, refonte complète de la charte.

## 3. Approche sectionnelle
### Accueil
- Retirer le slider et utiliser un fond gradient + motif.
- Remplacer les compteurs par une mention "indicateurs publiés après le lancement".

### Activités
- Déplacer `formationPrograms` et `charitableInitiatives` dans `src/content/activities.js`.
- Ajouter un champ `isPreview` et afficher un bandeau "Programmes publiés via CMS bientôt" quand true.
- Kouz : convertir les chiffres en objectifs et clarifier que ce sont des projections.

### Domaines d'impact
- Nettoyer les données (plus d'URL d'image).
- Introduire un badge "Fiche conceptuelle" et option pour désactiver la modale tant que le CMS n'est pas prêt.

### Équipe
- Remplacer les photos par monogrammes générés (comme CommunityStories).
- Option : n'afficher que 3 cartes "poste à pourvoir" + CTA candidature.

### À propos
- Timeline text-only avec capsules "Étape clé" et "Impact".
- Hero sans photo, réutilisation des patterns graphiques existants.

## 4. Plan d'exécution
1. **Étape 1 – Accueil** : refonte hero + stats.
2. **Étape 2 – Activités** : extraction des données, bandeau CMS, Kouz conceptuel.
3. **Étape 3 – Domaines d'impact** : data nettoyée, badges "en validation", modale ajustée.
4. **Étape 4 – Équipe & À propos** : monogrammes, timeline textuelle.
5. **Étape finale** : `npm run build` + QA visuelle.

## 5. Critères d'acceptation
- Aucune URL vers Unsplash/Pexels/Pixabay ou avatars randomuser dans le code.
- Les sections sans données finales affichent explicitement leur statut (bandeau, badge, texte).
- Le projet compile via `npm run build`.
- UX cohérente avec la palette Équipe déjà généralisée.

## 6. Suivi & prochaines étapes
- Après ce nettoyage, préparer un ticket "Intégration CMS" décrivant schéma des collections et points d'accroche.
- Maintenir ce document à jour au fur et à mesure des étapes validées.
