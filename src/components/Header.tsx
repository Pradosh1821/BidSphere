import { Link, useNavigate } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showNav?: boolean;
}

const Header = ({ showNav = true }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="gradient-hero px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg gradient-card-header flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-foreground leading-tight">BidSphere</h3>
            <p className="text-xs text-primary-foreground/60 leading-tight">Centralized marketplace<br />for BD services</p>
          </div>
        </Link>

        {showNav && (
          <nav className="flex items-center gap-4 sm:gap-8">
            <Link to="/home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base">
              Home
            </Link>
            <Link to="/my-orders" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base">
              My Order
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="rounded-full border-primary-foreground/40 text-foreground bg-primary-foreground hover:bg-primary-foreground/90 px-5"
            >
              Log out
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
