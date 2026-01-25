import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { manualReviews, reviewStats, googleReviewsConfig, Review } from "@/config/reviews";

interface ReviewsWidgetProps {
  showStats?: boolean;
  maxReviews?: number;
}

const ReviewsWidget = ({ showStats = true, maxReviews = 1 }: ReviewsWidgetProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState(reviewStats);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Si Google Reviews est activé avec un widget (Elfsight, etc.)
    if (googleReviewsConfig.enabled && googleReviewsConfig.widgetId) {
      // Le widget sera chargé via le script dans index.html
      // On utilise les témoignages manuels comme fallback
      setReviews(manualReviews.slice(0, maxReviews));
    } else if (googleReviewsConfig.enabled && googleReviewsConfig.placeId) {
      // TODO: Implémenter l'intégration Google Reviews API
      // Pour l'instant, on utilise les témoignages manuels
      setReviews(manualReviews.slice(0, maxReviews));
    } else {
      // Utiliser les témoignages manuels par défaut
      setReviews(manualReviews.slice(0, maxReviews));
    }
  }, [maxReviews]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showStats && (
        <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(stats.averageRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div>
            <div className="font-semibold text-foreground">{stats.averageRating}/5</div>
            <div className="text-sm text-muted-foreground">({stats.totalReviews} avis)</div>
          </div>
        </div>
      )}

      {reviews.map((review, index) => (
        <div
          key={index}
          className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            {review.verified && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Vérifié
              </span>
            )}
          </div>
          <p className="text-muted-foreground mb-4 italic">{review.text}</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
              {review.author.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-foreground">{review.author}</div>
              {review.location && (
                <div className="text-sm text-muted-foreground">{review.location}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsWidget;

