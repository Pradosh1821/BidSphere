import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Video, Layers, HelpCircle } from "lucide-react";
import announcementImg from "@/assets/announcement-illustration.png";

const services = [
  {
    title: "Template Generation Support",
    description: "Generate your capability deck with template-driven consistency and seamless brand alignment.",
    rating: 4.7,
    reviews: 198,
    icon: <BarChart3 className="w-16 h-16 text-purple-glow" />,
    route: null,
  },
  {
    title: "RFP Response",
    description: "Deliver crisp RFP responses with AI drafting, compliance checks, and polished formatting.",
    rating: 4.8,
    reviews: 426,
    icon: <FileText className="w-16 h-16 text-purple-glow" />,
    route: "/rfp-details",
  },
  {
    title: "Video Generation",
    description: "Generate engaging videos through clear data capture, strong storytelling, and clean design.",
    rating: 4.6,
    reviews: 142,
    icon: <Video className="w-16 h-16 text-purple-glow" />,
    route: null,
  },
  {
    title: "Agentic Visual Upliftment",
    description: "Deliver crisp RFP responses with AI drafting, compliance checks, and polished formatting.",
    rating: 4.8,
    reviews: 426,
    icon: <Layers className="w-16 h-16 text-purple-glow" />,
    route: null,
  },
  {
    title: "RFI Questions",
    description: "Deliver crisp RFP responses with AI drafting, compliance checks, and polished formatting.",
    rating: 4.8,
    reviews: 426,
    icon: <HelpCircle className="w-16 h-16 text-purple-glow" />,
    route: null,
  },
];

const stats = [
  { value: 376, label: "Template Generation", color: "text-primary" },
  { value: 868, label: "RFP response", color: "text-primary" },
  { value: 336, label: "Video Generation", color: "text-primary" },
  { value: 376, label: "Template Generation", color: "text-primary" },
  { value: 376, label: "Template Generation", color: "text-primary" },
  { value: 376, label: "Template Generation", color: "text-primary" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero px-4 sm:px-8 pb-16 -mt-[1px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent leading-tight mb-4">
              Explore Premium<br />BD Services
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg">
              Upload your RFPs, and place orders<br />with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Announcement + Stats Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Announcement Card */}
          <div className="flex-1 bg-card rounded-xl border border-primary/15 shadow-sm p-5 flex items-center gap-5">
            <img
              src={announcementImg}
              alt="Announcement illustration"
              className="w-28 h-28 object-contain flex-shrink-0 rounded-lg"
            />
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Announcement</h3>
              <p className="font-semibold text-foreground text-sm mb-1">More features added</p>
              <p className="text-sm text-muted-foreground mb-3">
                Agentic Visual Upliftment is now updated with AI drafting, compliance checks, and polished formatting
              </p>
              <Button className="gradient-button text-primary-foreground text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity font-medium">
                Generate now
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="gradient-hero rounded-xl border border-primary/20 shadow-sm p-5 grid grid-cols-3 gap-3 w-full lg:w-auto lg:min-w-[360px]">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-2 p-2">
                <div className="w-1 h-full bg-accent rounded-full flex-shrink-0 min-h-[40px]" />
                <div>
                  <div className={`text-2xl font-bold text-primary-foreground`}>{stat.value}</div>
                  <div className="text-xs text-primary-foreground/70 leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hello Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Hello</h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-4xl">
          The site offers a curated suite of premium <strong>Business Development services</strong>, ranging from{" "}
          <strong>template generation</strong> and <strong>brand-aligned document</strong> support to{" "}
          <strong>RFP responses</strong>, <strong>video creation</strong>, and <strong>visual design enhancement</strong>.
          It also provides specialized assistance for RFI questions, ensuring consistency, compliance, and high-quality
          presentation across all deliverables.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              description={service.description}
              rating={service.rating}
              reviews={service.reviews}
              icon={service.icon}
              onGenerate={() => service.route ? navigate(service.route) : null}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
