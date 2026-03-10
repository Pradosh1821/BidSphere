import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

const steps = ["Enter RFP Details", "Upload Documents", "Generate & Track"];

const RFPDetails = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(1);
  const [wiseId, setWiseId] = useState("");
  const [rfpTitle, setRfpTitle] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [domain, setDomain] = useState("");
  const [scope, setScope] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                    i + 1 === currentStep
                      ? "gradient-button text-primary-foreground"
                      : i + 1 < currentStep
                      ? "bg-green-stat text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-xs text-muted-foreground mt-1 text-center max-w-[100px]">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-16 sm:w-24 h-0.5 bg-border mb-5" />
              )}
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-primary mb-2">RFP Details</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Validate your Wise-ID to auto-populate the required details
        </p>

        {/* Main Content */}
        <div className="border-2 border-primary/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Upload + Wise-ID */}
            <div className="flex-1 space-y-6">
              {/* Upload Area */}
              <div className="gradient-card-header rounded-xl p-6">
                <div className="bg-card/90 rounded-xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-border">
                  <Upload className="w-8 h-8 text-muted-foreground mb-3" />
                  <p className="font-medium text-foreground mb-1">Drag & drop your files here or</p>
                  <p className="text-xs text-muted-foreground mb-4">Supports pdf, docx, txt upto 20 mb</p>
                  <Button className="gradient-button text-primary-foreground rounded-full px-6 hover:opacity-90">
                    click to browse
                  </Button>
                </div>
              </div>

              {/* Wise-ID */}
              <div className="bg-navy rounded-xl p-5">
                <h3 className="font-bold text-primary-foreground mb-1">Wise-ID</h3>
                <p className="text-xs text-primary-foreground/60 mb-3">Enter the official WISE-ID and press Validate</p>
                <Input
                  value={wiseId}
                  onChange={(e) => setWiseId(e.target.value)}
                  placeholder="xxxx14556xxx"
                  className="bg-navy-light border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 mb-3"
                />
                <Button className="gradient-button text-primary-foreground rounded-full px-6 hover:opacity-90">
                  Validate
                </Button>
              </div>
            </div>

            {/* Right: Auto-populated Details */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-6 text-center">
                The following details are auto-populated
              </h3>
              <div className="space-y-5">
                {[
                  { label: "RFP Title:", value: rfpTitle, setter: setRfpTitle, placeholder: "Travel RFP" },
                  { label: "Customer Name:", value: customerName, setter: setCustomerName, placeholder: "Mikel Modhusudon" },
                  { label: "Domain:", value: domain, setter: setDomain, placeholder: "Travel" },
                  { label: "Scope:", value: scope, setter: setScope, placeholder: "Support Proposal" },
                ].map((field, i) => (
                  <div key={i} className="flex items-center gap-3 border border-primary/30 rounded-lg p-3">
                    <span className="text-sm font-bold text-foreground whitespace-nowrap min-w-[110px]">{field.label}</span>
                    <Input
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      placeholder={field.placeholder}
                      className="border-0 p-0 h-auto focus-visible:ring-0 text-sm text-muted-foreground"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-border">
            <Button variant="outline" onClick={() => navigate("/home")} className="rounded-full px-8">
              Cancel
            </Button>
            <Button className="gradient-button text-primary-foreground rounded-full px-8 hover:opacity-90">
              Continue to Generate →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFPDetails;
