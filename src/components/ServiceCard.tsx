import { useState } from "react";
import { Check, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  onAdd: () => void;
}

const ServiceCard = ({ title, description, price, icon: Icon, features, onAdd }: ServiceCardProps) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAdd();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col p-6 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
          <Icon size={20} className="text-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <ul className="space-y-2 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check size={14} className="text-accent mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-mono text-sm font-semibold text-foreground tracking-tight">
          {price}
        </span>
        <button
          onClick={handleAdd}
          disabled={added}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-all duration-200 ${
            added
              ? "bg-accent/10 text-accent cursor-default"
              : "bg-primary text-primary-foreground hover:bg-accent"
          }`}
        >
          {added ? (
            <span className="flex items-center gap-1">
              <Check size={12} /> Added
            </span>
          ) : (
            "Add to Project"
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
