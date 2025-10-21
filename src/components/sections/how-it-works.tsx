import {
  ArrowRight,
  BarChart,
  BrainCircuit,
  FileText,
  GraduationCap,
  Lightbulb,
  Link2,
  List,
  MessageCircle,
  PenSquare,
  MoreHorizontal,
  Trophy,
} from "lucide-react";

const FeatureButton = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-3 text-center bg-white shadow-md rounded-2xl border border-border/80 h-full">
    <div className="text-accent-blue">{icon}</div>
    <span className="text-sm font-medium text-text-primary">{text}</span>
  </div>
);

const ResourceItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 p-3 bg-white shadow-md rounded-2xl border border-border/80">
    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-accent-blue flex-shrink-0">
      {icon}
    </div>
    <span className="text-sm font-medium text-text-primary">{text}</span>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center space-y-6 mb-12">
          <div className="w-48 h-[2px] bg-gray-600 mx-auto"></div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1 text-sm font-medium text-text-secondary shadow-sm">
            <Lightbulb className="h-4 w-4 text-text-tertiary" />
            <span>How It Works</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-tight">
            Put proof between <br className="sm:hidden" />
            <span className="relative inline-block">
              <span className="text-text-primary">
                interviews and offers
              </span>
              <span className="absolute -bottom-2.5 left-0 right-0 h-1 bg-[var(--color-accent-blue)] rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto !mt-8">
            TrustCollab slots in right after interviews, giving you a live sandbox trial so every hiring decision is backed by proof, not promises.
          </p>

          <div className="pt-4">
            <a
              href={"https://forms.gle/4swXfsf4X4hQvrhj6"}
              className="inline-flex items-center gap-2 font-semibold text-text-primary hover:text-accent-blue transition-colors duration-200"
            >
              ⚡ Validate Your Next Hire
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl bg-card shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 space-y-6 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
                01
              </div>
              <h3 className="text-2xl font-bold text-text-primary leading-tight pt-1 md:pt-0">Interview as usual</h3>
            </div>
            <p className="text-text-secondary">
              Shortlist who sounds great.
            </p>
             <div className="grid grid-cols-2 gap-3 mt-4">
              <FeatureButton icon={<BarChart className="w-5 h-5" />} text="Role expectations" />
              <FeatureButton icon={<GraduationCap className="w-5 h-5" />} text="Team signals" />
              <FeatureButton icon={<Trophy className="w-5 h-5" />} text="Must-have skills" />
              <FeatureButton icon={<MoreHorizontal className="w-5 h-5" />} text="Risk flags" />
              <FeatureButton icon={<PenSquare className="w-5 h-5" />} text="Interview notes" />
            </div>
          </div>

          <div className="rounded-3xl bg-card shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 space-y-6 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
                02
              </div>
              <h3 className="text-2xl font-bold text-text-primary leading-tight pt-1 md:pt-0">Launch a sandbox trial</h3>
            </div>
            <p className="text-text-secondary">
              Real task, timed, observed by AI co-pilot.
            </p>
                        <div className="bg-[#03A2E9] text-white rounded-2xl rounded-br-none p-4 mt-4">
              <p className="text-white">Please begin Rachel's interview at 3pm local time.</p>
            </div>
            <div className="bg-[#E5E5EA] text-text-primary rounded-2xl rounded-bl-none p-4 mt-4">
              <p className="text-text-primary">Starting Rachel's 3-day trial interview now.
                 I'll assess her collaboration skills, communication style, and final deliverable quality.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-card shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 space-y-6 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
                03
              </div>
              <h3 className="text-2xl font-bold text-text-primary leading-tight pt-1 md:pt-0">Get instant validation</h3>
            </div>
            <p className="text-text-secondary">
              Objective performance score and behavioral insights — no bias, no guessing.
            </p>
            <div className="space-y-3 mt-4">
              <ResourceItem icon={<List className="w-5 h-5" />} text="Objective performance score" />
              <ResourceItem icon={<FileText className="w-5 h-5" />} text="Behavioral breakdown" />
              <ResourceItem icon={<Link2 className="w-5 h-5" />} text="Shareable highlight reels" />
              <ResourceItem icon={<MessageCircle className="w-5 h-5" />} text="Actionable next steps" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
