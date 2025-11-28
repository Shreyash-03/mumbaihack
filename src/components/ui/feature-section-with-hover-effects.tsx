import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconChartLine,
  IconTarget,
  IconShieldLock,
  IconSparkles,
  IconBolt,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Smart Portfolio Management",
      description:
        "AI-driven portfolio optimization that automatically rebalances based on market conditions and your risk profile.",
      icon: <IconChartLine />,
    },
    {
      title: "Goal-Based Planning",
      description:
        "Set specific financial goals and get personalized investment strategies with clear timelines and milestones.",
      icon: <IconTarget />,
    },
    {
      title: "Bank-Grade Security",
      description:
        "Your data is protected with 256-bit encryption and multi-factor authentication for complete peace of mind.",
      icon: <IconShieldLock />,
    },
    {
      title: "Real-Time Analytics",
      description: "Track your investments with live market data, detailed performance metrics, and insightful visualizations.",
      icon: <IconCloud />,
    },
    {
      title: "Automated Investing",
      description:
        "Set up recurring investments with SIP automation and let our AI handle the rest while you focus on life.",
      icon: <IconBolt />,
    },
    {
      title: "AI Advisory",
      description:
        "Get instant answers and personalized recommendations from our intelligent financial advisor chatbot.",
      icon: <IconSparkles />,
    },
    {
      title: "Smart Rebalancing",
      description:
        "Automatic portfolio rebalancing ensures your investments stay aligned with your goals and risk tolerance.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team and AI assistants are available around the clock to help you succeed.",
      icon: <IconHelp />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
