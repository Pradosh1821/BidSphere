import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  rating: number;
  reviews: number;
  icon: React.ReactNode;
  onGenerate: () => void;
}

const ServiceCard = ({ title, description, rating, reviews, icon, onGenerate }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
      <div className="bg-navy p-6 flex items-center justify-center h-40">
        {icon}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>
        <h3 className="font-semibold text-foreground text-base mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground flex-1 mb-4">{description}</p>
        <Button
          onClick={onGenerate}
          className="gradient-button text-primary-foreground rounded-full hover:opacity-90 transition-opacity w-fit px-6"
        >
          Generate now
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
