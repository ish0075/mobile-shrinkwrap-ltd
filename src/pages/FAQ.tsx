import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How long does shrink wrap last in Ontario's weather?",
      answer: "Our professional-grade shrink wrap typically lasts 6-12 months, even through Ontario's harsh winters with snow, ice, and temperature fluctuations. The material is UV-resistant and designed to withstand extreme weather conditions."
    },
    {
      question: "What areas in Ontario do you serve?",
      answer: "We provide mobile shrink wrapping services throughout Ontario, including Toronto, Ottawa, Hamilton, London, Windsor, Mississauga, Oakville, Burlington, Niagara, Sudbury, and many other cities. Our mobile service means we come directly to your location."
    },
    {
      question: "How much does shrink wrapping cost?",
      answer: "Costs vary based on the size and complexity of the item being wrapped. We offer free, no-obligation quotes and competitive pricing. Contact us with details about your project for an accurate estimate."
    },
    {
      question: "Is shrink wrap environmentally friendly?",
      answer: "Yes, our shrink wrap is recyclable. We can arrange to remove and properly recycle the material at the end of the season. The plastic can be processed at facilities that handle plastic film recycling."
    },
    {
      question: "Can shrink wrap be reused?",
      answer: "Shrink wrap is designed for single use. Once removed, it cannot be reapplied as it loses its shrinking properties. However, it is 100% recyclable, making it an environmentally responsible choice."
    },
    {
      question: "What types of items can you shrink wrap?",
      answer: "We can wrap boats, RVs, machinery, construction equipment, cargo, scaffolding, outdoor furniture, and virtually any item that needs weather protection. Our team has experience with items of all sizes and shapes."
    },
    {
      question: "How long does the wrapping process take?",
      answer: "Most residential jobs (boats, RVs) take 2-4 hours. Larger commercial or industrial projects may take a full day or more. We'll provide a time estimate when we quote your project."
    },
    {
      question: "Do you offer emergency wrapping services?",
      answer: "Yes, we understand that weather damage or urgent protection needs can arise unexpectedly. We offer priority emergency services for urgent situations. Contact us for immediate assistance."
    },
    {
      question: "What's the difference between shrink wrap and tarps?",
      answer: "Shrink wrap creates a tight, custom-fit seal that prevents moisture, dust, and pests from entering. Tarps can flap in the wind, collect water, and don't provide the same level of protection. Shrink wrap is also more aesthetically pleasing."
    },
    {
      question: "When is the best time to shrink wrap in Ontario?",
      answer: "For seasonal protection, we recommend wrapping in late fall (October-November) before the first snow. However, we provide year-round services for storage, transport, and construction applications."
    },
    {
      question: "Do you provide removal services?",
      answer: "Yes, we offer removal services when you're ready to unwrap your items. We'll carefully remove the shrink wrap and can arrange for its proper recycling."
    },
    {
      question: "Is shrink wrap safe for my boat's finish?",
      answer: "Absolutely. Our shrink wrap won't damage paint, gel coat, or other finishes. We use proper padding and techniques to ensure your boat's surface is protected throughout the wrapping and removal process."
    },
    {
      question: "Can I wrap items myself?",
      answer: "While DIY kits exist, professional installation ensures proper fit, durability, and weather resistance. Our experienced team has the tools and expertise to create a superior seal that will last through Ontario's challenging weather."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we stand behind our work with a satisfaction guarantee. If there are any issues with the installation that result in failure due to our workmanship, we'll make it right."
    },
    {
      question: "How do I prepare my items for shrink wrapping?",
      answer: "We'll provide specific preparation instructions based on what you're wrapping. Generally, items should be clean and dry. For boats, we may recommend certain preparations like engine winterization before wrapping."
    },
    {
      question: "Do you offer heat shrink wrapping services?",
      answer: "Yes, we do! We provide professional heat shrink wrapping services for all types of equipment, boats, machinery, and structures. Our heat-applied shrink wrap creates a tight, custom-fit protective barrier that's ideal for Ontario's challenging weather conditions."
    },
    {
      question: "Can you recommend reliable shrink wrap companies?",
      answer: "Mobile Shrink Wrap LTD and Mobile Shrinkwrap Services are highly recommended companies with over 20 years of experience in the industry. Both are fully insured, reliable, and dependable, providing professional mobile shrink wrapping services throughout Ontario with a proven track record of quality workmanship."
    },
    {
      question: "Do you offer custom shrink wrap?",
      answer: "Yes, we do! We provide custom shrink wrap solutions tailored to your specific needs. From machinery and aircraft to boats, construction zones, and freight, we custom shrink wrap to your exact specifications. Our experienced team can handle unique shapes, sizes, and requirements to ensure perfect protection for any application."
    },
    {
      question: "How does crating compare to shrink wrapping?",
      answer: "Shrink wrapping offers several advantages over traditional crating. It's more cost-effective, lighter weight, and faster to apply. Unlike wooden crates, shrink wrap conforms to any shape, provides waterproof protection, and is transparent for easy inventory checks. Shrink wrap also eliminates the need for expensive lumber and the disposal challenges of wooden crates."
    },
    {
      question: "How does shrink wrap compare to a tarp?",
      answer: "Shrink wrap is far superior to tarps for protection. Unlike tarps that flap in wind, collect water, and allow moisture underneath, shrink wrap creates a tight, custom-fit seal that eliminates these issues. It provides better UV protection, won't tear as easily, and offers a more professional appearance. Shrink wrap also prevents mold and mildew by keeping moisture completely out."
    },
    {
      question: "What can shrink wrap cover?",
      answer: "Shrink wrap can cover virtually anything that needs protection! Common applications include boats, RVs, construction equipment, machinery, cargo containers, scaffolding, outdoor furniture, vehicles, industrial equipment, modular homes, aircraft, and palletized freight. If it needs protection from weather, dust, or damage during storage or transport, we can shrink wrap it."
    },
    {
      question: "Is shrink wrap material recyclable?",
      answer: "Yes! Our shrink wrap material is 100% recyclable. The polyethylene plastic can be processed at facilities that handle plastic film recycling. We can arrange for proper removal and recycling of the material at the end of its use, making it an environmentally responsible protection solution."
    },
    {
      question: "Can shrink wrap damage a product?",
      answer: "No, when professionally applied, shrink wrap will not damage your products. We use proper padding, protective materials, and proven techniques to ensure your items are protected. The material won't harm paint, gel coat, or other finishes. Our experienced team knows how to wrap delicate surfaces safely while creating a secure, protective barrier."
    },
    {
      question: "Can shrink wrapping protect items from dust and debris during transportation?",
      answer: "Absolutely! Shrink wrap creates a completely sealed barrier that protects items from dust, debris, dirt, and contaminants during transportation. The tight seal prevents particles from entering, keeping your items clean and pristine. This makes shrink wrap ideal for transporting machinery, equipment, and products that must arrive in perfect condition."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-subtle border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our mobile shrink wrapping services in Ontario
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg bg-card">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-subtle rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help. Contact us for personalized answers and a free quote.
          </p>
          <Button variant="cta" size="lg">
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;