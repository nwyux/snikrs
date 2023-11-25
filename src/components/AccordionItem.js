import React, { useState } from 'react';
import { ArrowLeft, ArrowDown } from 'lucide-react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto py-3">
      <div
        className="border-b border-gray-200 p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-alata">{title}</h3>
          {isOpen ? (
            <span className="transform rotate-0 transition-transform">
              <ArrowDown />
            </span>
            ) : (
            <span className="transform rotate-180 transition-transform">
              <ArrowLeft />
            </span>
            )
            }
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border-b border-gray-200">
          <p className="text-sm font-alata">{content}</p>
        </div>
      )}
    </div>
  );
};

const ShoesCareAccordion = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <AccordionItem
        title="How to Clean Your Sneakers"
        content="Mix warm water with a small amount of mild laundry detergent or dish soap. For white and light-colored shoes, you can also make an effective cleaning paste by mixing equal parts baking soda and water. Note: When it comes to using dish soap, it's important to take caution and dilute the soap with plenty of water."
      />
      <AccordionItem
        title="Choosing the Right Sneakers Care Products"
        content="You should try nail polish remover. It is important to use about five times as much water as bleach so you do not fade or discolor your shoes. When it comes to colored sneakers, mixing a teaspoon of laundry detergent with a cup of water will create a solution that is useful on fabric, rubber and mesh."
      />
      <AccordionItem
        title="Storing Your Sneakers Properly"
        content="For an added level of protection, put them in clear plastic shoe storage boxes, just make sure they are clean and completely dry before storing them. If you're storing your sneakers long-term, stuff and wrap them in acid-free paper and take out the laces."
      />
    </div>
  );
};

export default ShoesCareAccordion;
