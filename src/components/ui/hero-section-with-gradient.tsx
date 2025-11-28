"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroSection_05Props {
  onStartInvesting?: () => void;
  onWatchDemo?: () => void;
}

export default function HeroSection_05({ onStartInvesting, onWatchDemo }: HeroSection_05Props = {}) {
  const gradientRef = useRef<HTMLDivElement>(null);

  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  };

  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="p-6 overflow-hidden rounded-xl pointer-events-none">
        <div className="relative w-full">

        <div className="pt-4 pb-10 sm:pt-6 sm:pb-12 text-center">
            <div className="relative max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-200 font-bold tracking-tight">
                Grow Your Wealth with Intelligent Investing
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                WealthBuddy uses advanced AI to create personalized investment strategies tailored to your financial goals. 
                Start building your financial future today with autonomous portfolio management.
            </p>
            <AnimatedGroup
                variants={{
                container: {
                    visible: {
                    transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                    },
                    },
                },
                ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row pointer-events-auto"
            >
                <div key={1} className="bg-foreground/10 rounded-[14px] border p-0.5">
                <Button size="lg" className="rounded-xl px-5 text-base" onClick={onStartInvesting}>
                    <span className="text-nowrap">Start Investing Free</span>
                </Button>
                </div>
                <div
                key={2}
                className="bg-foreground/10 rounded-[14px] border p-0.5"
                >
                <Button
                    size="lg"
                    className="rounded-xl px-5 text-base bg-white text-black hover:bg-black hover:text-white"
                    onClick={onWatchDemo}
                >
                    <span className="text-nowrap">Watch Demo</span>
                </Button>
                </div>
            </AnimatedGroup>
            </div>
        </div>

        <AnimatedGroup
            variants={{
            container: {
                visible: {
                transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                },
                },
            },
            ...transitionVariants,
            }}
            className="pointer-events-auto"
        >
            <div className="relative overflow-hidden px-2">
            <div
                aria-hidden
                className="bg-gradient-to-b from-background to-background absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="inset-shadow-2xs max-h-[40vh] ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-t-2xl border border-gray-50 border-b-0 p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/48d55d5a-2e47-4e03-81cd-d95cf752d2e4/generated_images/modern-fintech-investment-dashboard-ui-m-d535c271-20251126164456.jpg"
                    alt="WealthBuddy Dashboard"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            </div>
        </AnimatedGroup>
        </div>    
        <BrandsGrid />
    </div>
  );
}


export const BrandsGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
      const brands = [
        {
          name: "NSE",
          logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/48d55d5a-2e47-4e03-81cd-d95cf752d2e4/generated_images/nse-national-stock-exchange-of-india-off-6bf6c44f-20251126155018.jpg",
        },
        {
          name: "BSE",
          logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/48d55d5a-2e47-4e03-81cd-d95cf752d2e4/generated_images/bse-bombay-stock-exchange-official-logo--38a4575b-20251126155018.jpg",
        },
        {
          name: "SEBI",
          logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/48d55d5a-2e47-4e03-81cd-d95cf752d2e4/generated_images/sebi-securities-and-exchange-board-of-in-3b855b8e-20251126155018.jpg",
        },
        {
          name: "HDFC Bank",
          logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/48d55d5a-2e47-4e03-81cd-d95cf752d2e4/generated_images/hdfc-bank-official-logo-blue-and-red-col-e936905a-20251126155018.jpg",
        },
        {
          name: "ICICI Bank",
          logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/48d55d5a-2e47-4e03-81cd-d95cf752d2e4/generated_images/icici-bank-official-logo-orange-and-brow-9b6e2aa2-20251126155018.jpg",
        },
        {
          name: "SBI",
          logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/48d55d5a-2e47-4e03-81cd-d95cf752d2e4/generated_images/sbi-state-bank-of-india-official-logo-bl-63fea8d8-20251126155018.jpg",
        },
      ];
  
      return (
        <div ref={ref} className={cn("py-8", className)} {...props}>
          <div className="max-w-5xl mx-auto px-4">  
            <div className="max-w-xs mx-auto grid grid-cols-2 items-center md:grid-cols-3 md:max-w-lg lg:grid-cols-6 lg:max-w-3xl">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center justify-center p-4">
                  <div className="relative h-[48px] w-full">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  );

  BrandsGrid.displayName = "BrandsGrid";

type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  },
  'blur-slide': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)', y: 20 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 8 },
      },
    },
  },
};

export function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}