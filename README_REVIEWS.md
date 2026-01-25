# Configuration des Avis Google Reviews

## 🎯 Configuration Simple

### Étape 1 : Créer un compte Elfsight (Gratuit)

1. Allez sur [https://elfsight.com/](https://elfsight.com/)
2. Créez un compte gratuit
3. Dans le dashboard, cliquez sur "Create Widget"
4. Recherchez et installez le widget **"Google Reviews"**

### Étape 2 : Configurer le Widget

1. Dans le widget, configurez votre **Google Place ID**
   - Pour trouver votre Place ID : [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Ou allez sur Google Maps, cherchez votre entreprise, l'URL contient le Place ID
2. Personnalisez le design du widget (optionnel)
3. Copiez l'**ID du widget** (ex: `abc123def456`)

### Étape 3 : Activer dans le Code

Ouvrez `src/config/reviews.ts` et modifiez :

```typescript
export const googleReviewsConfig = {
  enabled: true,  // ← Changez à true
  widgetId: "VOTRE_ID_ICI",  // ← Collez votre ID du widget
  placeId: "", // Optionnel, juste pour référence
};
```

**C'est tout !** Le widget Google Reviews s'affichera automatiquement à la place du témoignage manuel.

## 📊 Comportement

- **Si `enabled: false`** → Affiche les témoignages manuels (comme actuellement)
- **Si `enabled: true`** → Affiche le widget Google Reviews réel

Les statistiques (note moyenne, nombre d'avis) dans le Hero sont toujours utilisées depuis `reviewStats` dans `reviews.ts`. Vous pouvez les mettre à jour manuellement ou elles seront automatiquement mises à jour par le widget.

## 🔧 Modifier les Statistiques Manuellement

Si vous voulez garder les statistiques manuelles même avec Google Reviews activé, modifiez dans `src/config/reviews.ts` :

```typescript
export const reviewStats = {
  averageRating: 4.9,  // Votre note moyenne
  totalReviews: 127,    // Nombre total d'avis
};
```

