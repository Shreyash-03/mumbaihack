"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { TrendingUp, Target, Zap } from "lucide-react";
import Image from "next/image";

// Avoid SSR hydration issues by loading react-countup on the client.
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

/** Hook: respects user's motion preferences */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/** Utility: parse a metric like "98%", "3.8x", "$1,200+", "1.5M", "€23.4k" */
function parseMetricValue(raw: string) {
  const value = (raw ?? "").toString().trim();
  const m = value.match(
    /^([^\d\-+]*?)\s*([\-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/
  );
  if (!m) {
    return { prefix: "", end: 0, suffix: value, decimals: 0 };
  }
  const [, prefix, num, suffix] = m;
  const normalized = num.replace(/,/g, "");
  const end = parseFloat(normalized);
  const decimals = (normalized.split(".")[1]?.length ?? 0);
  return {
    prefix: prefix ?? "",
    end: isNaN(end) ? 0 : end,
    suffix: suffix ?? "",
    decimals,
  };
}

/** Small component: one animated metric */
function MetricStat({
  value,
  label,
  sub,
  duration = 1.6,
}: {
  value: string;
  label: string;
  sub?: string;
  duration?: number;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const { prefix, end, suffix, decimals } = parseMetricValue(value);

  return (
    <div className="flex flex-col gap-2 text-left p-6">
      <p
        className="text-2xl font-medium text-gray-900 dark:text-white sm:text-4xl"
        aria-label={`${label} ${value}`}
      >
        {prefix}
        {reduceMotion ? (
          <span>
            {end.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
          </span>
        ) : (
          <CountUp
            end={end}
            decimals={decimals}
            duration={duration}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        )}
        {suffix}
      </p>
      <p className="font-medium text-gray-900 dark:text-white text-left">
        {label}
      </p>
      {sub ? (
        <p className="text-gray-600 dark:text-gray-400 text-left">{sub}</p>
      ) : null}
    </div>
  );
}

export default function Casestudies() {
  const caseStudies = [
    {
      id: 1,
      quote:
        "WealthBuddy transformed how I manage my investments. The AI-driven portfolio optimization helped me achieve 42% returns in just 18 months. I can finally focus on my career while my wealth grows automatically.",
      name: "Priya Sharma",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop",
      icon: TrendingUp,
      metrics: [
        { value: "42%", label: "Portfolio Returns", sub: "In 18 months" },
        { value: "₹8.5L", label: "Wealth Generated", sub: "From ₹6L initial investment" },
      ],
    },
    {
      id: 2,
      quote:
        "The goal-based planning feature is incredible. WealthBuddy helped me achieve my dream bike goal 6 months ahead of schedule with smart SIP recommendations. The clarity and tracking kept me motivated throughout.",
      name: "Rahul Patel",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop",
      icon: Target,
      metrics: [
        { value: "3.2x", label: "Goal Acceleration", sub: "Achieved 6 months early" },
        { value: "92%", label: "Success Rate", sub: "All goals on track" },
      ],
    },
    {
      id: 3,
      quote:
        "As someone who was terrified of investing, WealthBuddy made it incredibly easy. The AI advisor answers all my questions instantly, and I love seeing my emergency fund grow steadily. It's like having a personal financial expert 24/7.",
      name: "Anjali Mehta",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=500&fit=crop",
      icon: Zap,
      metrics: [
        { value: "2.5x", label: "Portfolio Growth", sub: "In 24 months" },
        { value: "100%", label: "Automation", sub: "Set and forget investing" },
      ],
    },
    {
      id: 4,
      quote:
        "I was skeptical about robo-advisors until I tried WealthBuddy. The tax optimization alone saved me ₹50,000 last year. The platform is intuitive, secure, and the automated rebalancing keeps my portfolio optimized without any effort from my side.",
      name: "Amit Singh",
      role: "Freelance Developer",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=500&fit=crop",
      icon: Zap,
      metrics: [
        { value: "156%", label: "Corpus Growth", sub: "In 4 years" },
        { value: "₹50K", label: "Tax Savings", sub: "Last year alone" },
      ],
    },
    {
      id: 5,
      quote:
        "WealthBuddy helped me retire 5 years earlier than planned. The retirement planning tools, combined with smart asset allocation, grew my corpus by 156% in 4 years. The best investment decision I ever made.",
      name: "Neha Gupta",
      role: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=500&fit=crop",
      icon: TrendingUp,
      metrics: [
        { value: "156%", label: "Corpus Growth", sub: "In 4 years" },
        { value: "5 years", label: "Retirement Acceleration", sub: "Earlier than planned" },
      ],
    },
  ];

  return (
    <section
      className="py-32 bg-background"
      aria-labelledby="case-studies-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h2
            id="case-studies-heading"
            className="text-4xl font-semibold md:text-5xl text-foreground"
          >
            Real Success Stories from WealthWise Investors
          </h2>
          <p className="text-muted-foreground">
            From portfolio growth to goal achievement—WealthWise powers investors with intelligent automation and personalized strategies.
          </p>
        </div>

        {/* Cases */}
        <div className="mt-20 flex flex-col gap-20">
          {caseStudies.map((study, idx) => {
            const reversed = idx % 2 === 1;
            const IconComponent = study.icon;
            return (
              <div
                key={study.id}
                className="grid gap-12 lg:grid-cols-3 xl:gap-24 items-center border-b border-gray-200 dark:border-gray-800 pb-12"
              >
                {/* Left: Image + Quote */}
                <div
                  className={[
                    "flex flex-col sm:flex-row gap-10 lg:col-span-2 lg:border-r lg:pr-12 xl:pr-16 text-left",
                    reversed
                      ? "lg:order-2 lg:border-r-0 lg:border-l border-gray-200 dark:border-gray-800 lg:pl-12 xl:pl-16 lg:pr-0"
                      : "border-gray-200 dark:border-gray-800",
                  ].join(" ")}
                >
                  <Image
                    src={study.image}
                    alt={`${study.name} portrait`}
                    width={300}
                    height={400}
                    className="aspect-[29/35] h-auto w-full max-w-60 rounded-2xl object-cover ring-1 ring-border hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <figure className="flex flex-col justify-between gap-8 text-left">
                    <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Investment Success Story
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                        {study.quote}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center gap-6 mt-4 text-left">
                      <div className="flex flex-col gap-1">
                        <span className="text-md font-medium text-foreground">
                          {study.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {study.role}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                </div>

                {/* Right: Metrics */}
                <div
                  className={[
                    "grid grid-cols-1 gap-10 self-center text-left",
                    reversed ? "lg:order-1" : "",
                  ].join(" ")}
                >
                  {study.metrics.map((metric, i) => (
                    <MetricStat
                      key={`${study.id}-${i}`}
                      value={metric.value}
                      label={metric.label}
                      sub={metric.sub}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}