import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      {/* Header */}
      <div className="px-4 sm:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg gradient-card-header flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-foreground leading-tight">BidSphere</h3>
            <p className="text-xs text-primary-foreground/60 leading-tight">Centralized marketplace<br />for BD services</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 px-4 sm:px-8 pb-12">
        {/* Left Side */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent leading-tight mb-4">
            BD Services<br />Marketplace
          </h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg">
            Upload your RFPs, and place orders with confidence.
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden">
          <div className="gradient-card-header px-8 py-6">
            <h2 className="text-2xl font-bold text-primary-foreground">Log in</h2>
          </div>
          <form onSubmit={handleLogin} className="px-8 py-8 space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground">Enter Your Employee ID</label>
              <Input
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="mt-2 border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-glow"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Enter your Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-glow"
                placeholder=""
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                  Remember Me?
                </label>
              </div>
              <button type="button" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Forget Password?
              </button>
            </div>

            <div className="flex flex-col items-center gap-3 pt-2">
              <Button type="submit" className="gradient-button text-primary-foreground rounded-full px-12 py-2.5 hover:opacity-90 transition-opacity">
                Log In
              </Button>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button type="button" className="text-purple-glow hover:underline">Register</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
