"use client"

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const FaqStackedCards = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const faqs = [
    {
      id: 1,
      question: "How does WealthBuddy work?",
      answer: "Our AI analyzes your financial goals and creates personalized investment strategies. Simply answer a few questions, and we'll build a portfolio tailored to your needs.",
      color: "#1A73E8"
    },
    {
      id: 2,
      question: "Is my money safe with WealthBuddy?",
      answer: "Yes! We use bank-level encryption and partner with regulated financial institutions. Your investments are protected and insured up to applicable limits.",
      color: "#22D3EE"
    },
    {
      id: 3,
      question: "What are the fees and charges?",
      answer: "Starter plan is free for portfolios up to ₹1L. Premium is ₹999/month with no hidden fees. We believe in transparent, straightforward pricing.",
      color: "#10B981"
    },
    {
      id: 4,
      question: "Can I withdraw my money anytime?",
      answer: "Absolutely! Your money is always accessible. Withdrawals typically process within 2-3 business days, depending on your investment type.",
      color: "#7367F0"
    },
    {
      id: 5,
      question: "What makes WealthBuddy different?",
      answer: "We combine AI-powered automation with personalized strategies. Unlike traditional advisors, we're available 24/7 and continuously optimize your portfolio based on market conditions.",
      color: "#F59E0B"
    }
  ];

  return (
    <div className="relative max-w-[700px] w-full mx-auto min-h-[600px] flex items-center justify-center px-4">
      <div className="relative max-w-[400px] w-full p-4 rounded-[25px]">
        {faqs.map((item, index) => (
          <div 
            key={item.id} 
            className={cn(
              "relative w-full p-4 sm:p-[15px] border-2 border-border rounded-[25px] flex items-start justify-between mb-2.5 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] bg-card shadow-[0px_5px_10px_rgba(32,28,28,0.3)]",
              index === 0 && !isExpanded && "z-[4] translate-y-[300%] scale-95",
              index === 1 && !isExpanded && "z-[3] translate-y-[200%] scale-90",
              index === 2 && !isExpanded && "z-[2] translate-y-[100%] scale-[0.85]",
              index === 3 && !isExpanded && "z-[1] translate-y-[0%] scale-[0.80]",
              index === 4 && !isExpanded && "z-[0] -translate-y-[100%] scale-[0.75]",
              isExpanded && "transform-none"
            )}
          >
            <div className="relative flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0 flex-1">
              <span 
                className="relative w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-white font-bold text-lg">?</span>
              </span>
              <div className="relative sm:ml-2.5 flex-1">
                <h3 className="relative m-0 text-base font-medium text-foreground mb-1.5">
                  {item.question}
                </h3>
                <p className={cn(
                  "relative text-muted-foreground text-sm transition-all duration-300 overflow-hidden",
                  isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="relative flex items-center justify-center mt-2.5">
          <button 
            className={cn(
              "relative py-2.5 px-10 pr-10 bg-card rounded-[20px] border-0 shadow-[0px_3px_3.5px_rgba(119,113,113,0.5)] text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0px_5px_5px_rgba(119,113,113,0.5)]",
              "after:absolute after:content-[''] after:border-t-2 after:border-l-2 after:border-foreground after:w-[7px] after:h-[7px] after:right-[23px] after:transition-all after:duration-300",
              isExpanded ? "after:rotate-45 after:top-[17px]" : "after:rotate-[225deg] after:top-[12px]"
            )}
            onClick={toggleExpand}
          >
            {isExpanded ? "Show Less" : "Show All FAQs"}
          </button>
        </div>
      </div>
    </div>
  );
};
