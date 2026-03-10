import { useState } from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star, Search, Share2 } from "lucide-react";

const projectStats = [
  { value: 26, label: "Template generation" },
  { value: 12, label: "RFP response" },
  { value: 17, label: "Video generation" },
  { value: 7, label: "Agentic visual upliftment" },
  { value: 0, label: "RFI Questions" },
];

const orders = [
  {
    type: "RFP response",
    title: "Kohler Managed Services RFP",
    requestId: "#56",
    date: "2nd Feb",
    status: "Ready to download",
    versions: ["V_003", "V_002"],
    rating: 4,
  },
  {
    type: "RFP response",
    title: "Sample Managed Services RFP",
    requestId: "#43",
    date: "22nd Jan",
    status: "Ready to download",
    versions: ["V_002", "V_001"],
    rating: 5,
  },
  {
    type: "RFP response",
    title: "Kohler Managed Services RFP",
    requestId: "#56",
    date: "2nd Feb",
    status: "Ready to download",
    versions: ["V_003"],
    rating: 5,
  },
];

const MyOrders = () => {
  const [activeCategory, setActiveCategory] = useState("RFP response");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Hello Hiya,</h1>

        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="flex-1 bg-card border border-primary/15 rounded-xl p-6 flex items-start gap-4">
            <div className="w-16 h-16 rounded-full gradient-card-header flex-shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">This is your personal dashboard</strong>, here you can track your
              orders, edit, download, or share them anytime. Please rate and share your feedback.
            </p>
          </div>

          <div className="gradient-hero rounded-xl p-5 text-primary-foreground lg:min-w-[420px] border border-primary/20">
            <h3 className="font-bold text-lg mb-3">Projects</h3>
            <div className="space-y-2">
              {projectStats.map((stat, i) => {
                const isActive = activeCategory === stat.label;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(stat.label)}
                    className={`w-full rounded-lg border px-3 py-2 transition-colors ${
                      isActive
                        ? "border-primary-foreground/80 bg-primary-foreground/10"
                        : "border-primary-foreground/30 hover:border-primary-foreground/60"
                    }`}
                  >
                    <div className="flex items-start gap-3 text-left">
                      <div className={`w-1 min-h-[42px] rounded-full ${isActive ? "bg-accent" : "bg-primary-foreground/35"}`} />
                      <div>
                        <div className="text-xl font-bold leading-tight">{String(stat.value).padStart(2, "0")}</div>
                        <div className="text-xs opacity-80 leading-tight">{stat.label}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-xs mt-3 opacity-70">Click on each service area to view the projects.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">{activeCategory}</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Ready to download</span>
              <span className="text-border">|</span>
            </div>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="pl-10 bg-card border-primary/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, i) => (
            <div key={i} className="bg-card border border-primary/15 rounded-xl overflow-hidden shadow-sm">
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs text-muted-foreground">{order.type}</span>
                    <h3 className="font-semibold text-foreground text-sm">{order.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">{order.date}</span>
                    <p className="text-xs text-muted-foreground">Request ID {order.requestId}</p>
                  </div>
                </div>
                <p className="text-xs text-green-stat font-medium mb-3">{order.status}</p>

                <p className="text-xs text-muted-foreground mb-2">Select Version</p>
                <div className="flex gap-3 mb-4">
                  {order.versions.map((v, vi) => (
                    <div key={vi} className="flex items-center gap-1.5">
                      <div
                        className={`w-3 h-3 rounded-full border-2 ${
                          vi === 0 ? "border-green-stat bg-green-stat" : "border-muted-foreground"
                        }`}
                      />
                      <span className="text-xs text-muted-foreground">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full text-xs px-4 border-primary/40 text-primary hover:bg-secondary hover:text-primary"
                  >
                    Track
                  </Button>
                  <Button size="sm" className="gradient-button text-primary-foreground rounded-full text-xs px-4 hover:opacity-90">
                    Download
                  </Button>
                </div>
              </div>

              <div className="border-t border-border bg-secondary/40 px-5 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">Rate this order</span>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-3.5 h-3.5 ${si < order.rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <Share2 className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2">
                  <Input placeholder="Share a feedback" className="text-xs h-8 flex-1 bg-card border-primary/20" />
                  <Button size="sm" className="gradient-button text-primary-foreground h-8 w-8 p-0 rounded-full">
                    →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
