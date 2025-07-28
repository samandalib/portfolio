"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bodoni_moda, manrope } from "../../app/fonts";
import ColorSwatch from "./components/ColorSwatch";
import TypographySpec from "./components/TypographySpec";
import IconSpec from "./components/IconSpec";
import DimensionSpec from "./components/DimensionSpec";
import { defaultColors } from "./data/colors";
import { defaultTypography } from "./data/typography";
import { defaultIcons } from "./data/icons";
import { defaultDimensions } from "./data/dimensions";
import type { DesignSystemSpecsProps } from "./types";

type TabType = 'colors' | 'typography' | 'dimensions';

const DesignSystemSpecs: React.FC<DesignSystemSpecsProps> = ({
  title = "Design System",
  description = "Complete specifications for colors, typography, icons, and dimensions",
  colors = defaultColors,
  typography = defaultTypography,
  icons = defaultIcons,
  dimensions = defaultDimensions,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('colors');

  const tabs = [
    { id: 'colors' as TabType, label: 'Colors', icon: '🎨' },
    { id: 'typography' as TabType, label: 'Typography', icon: '📝' },
    { id: 'dimensions' as TabType, label: 'Dimensions', icon: '📏' },
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-8 relative w-full"
      >
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center text-sm sm:text-base whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                style={{ fontFamily: manrope.style.fontFamily }}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[500px]"
          >
            {/* Colors Tab */}
            {activeTab === 'colors' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="space-y-8"
              >
                {/* Full Color Palette */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200"
                    style={{ fontFamily: bodoni_moda.style.fontFamily }}
                  >
                    Full Color Palette
                  </h3>
                  <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-2 md:gap-3">
                    {Object.values(colors).flat().map((color, index) => (
                      <ColorSwatch key={`${color.hex}-${index}`} color={color} showLetter={false} />
                    ))}
                  </div>
                </div>

                {/* Light Mode */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200"
                    style={{ fontFamily: bodoni_moda.style.fontFamily }}
                  >
                    Light Mode
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                        style={{ fontFamily: manrope.style.fontFamily }}
                      >
                        Surfaces (Containers, Buttons, etc.)
                      </h4>
                      <div className="grid grid-cols-5 gap-1 sm:grid-cols-5 sm:gap-2 md:grid-cols-7 md:gap-3">
                        {colors.grays?.slice(4, 7).concat(colors.grays?.slice(2, 3) || []).concat(colors.greens?.slice(2, 3) || []).concat(colors.grays?.slice(4, 6) || []).map((color, index) => (
                          <ColorSwatch key={`light-surfaces-${color.hex}-${index}`} color={color} showLetter={false} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                        style={{ fontFamily: manrope.style.fontFamily }}
                      >
                        On Surface (Fonts, shapes, icons)
                      </h4>
                      <div className="grid grid-cols-5 gap-1 sm:grid-cols-5 sm:gap-2 md:grid-cols-7 md:gap-3">
                        {colors.grays?.slice(0, 3).concat(colors.grays?.slice(5, 6) || []).concat(colors.grays?.slice(0, 1) || []).concat(colors.greens?.slice(2, 3) || []).concat(colors.grays?.slice(1, 2) || []).map((color, index) => (
                          <ColorSwatch key={`light-onsurface-${color.hex}-${index}`} color={color} showLetter={false} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dark Mode */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200"
                    style={{ fontFamily: bodoni_moda.style.fontFamily }}
                  >
                    Dark Mode
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                        style={{ fontFamily: manrope.style.fontFamily }}
                      >
                        Surfaces (Containers, Buttons, etc.)
                      </h4>
                      <div className="grid grid-cols-5 gap-1 sm:grid-cols-5 sm:gap-2 md:grid-cols-7 md:gap-3">
                        {colors.grays?.slice(0, 3).concat(colors.grays?.slice(5, 6) || []).concat(colors.greens?.slice(3, 4) || []).concat(colors.grays?.slice(0, 2) || []).map((color, index) => (
                          <ColorSwatch key={`dark-surfaces-${color.hex}-${index}`} color={color} showLetter={false} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
                        style={{ fontFamily: manrope.style.fontFamily }}
                      >
                        On Surface (Fonts, shapes, icons)
                      </h4>
                      <div className="grid grid-cols-5 gap-1 sm:grid-cols-5 sm:gap-2 md:grid-cols-7 md:gap-3">
                        {colors.grays?.slice(5, 8).concat(colors.grays?.slice(0, 2) || []).concat(colors.greens?.slice(3, 4) || []).concat(colors.grays?.slice(1, 2) || []).map((color, index) => (
                          <ColorSwatch key={`dark-onsurface-${color.hex}-${index}`} color={color} showLetter={false} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Typography Tab */}
            {activeTab === 'typography' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="space-y-8"
              >
                {typography.map((spec) => (
                  <div key={spec.name} className="space-y-4">
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-medium text-accent">{spec.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {spec.font} &nbsp;&nbsp; {spec.size} &nbsp;&nbsp; {spec.weight}
                      </span>
                    </div>
                    <div 
                      className="text-gray-900 dark:text-gray-100"
                      style={{ 
                        fontFamily: spec.font === 'Bricolage Grotesque' ? manrope.style.fontFamily : manrope.style.fontFamily,
                        fontSize: spec.size.split('/')[0] + 'px',
                        lineHeight: spec.size.split('/')[1] + 'px',
                        fontWeight: spec.weight === 'ExtraBold' ? '800' : spec.weight === 'Bold' ? '700' : '400'
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Dimensions Tab */}
            {activeTab === 'dimensions' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Corner Radius */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200"
                    style={{ fontFamily: bodoni_moda.style.fontFamily }}
                  >
                    Corner Radius
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Border radius values for different components.
                  </p>
                  <div className="space-y-3">
                    {dimensions.cornerRadius?.map((dimension) => (
                      <div key={dimension.name} className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div 
                          className="w-12 h-12 bg-accent rounded"
                          style={{ 
                            borderRadius: dimension.value.includes('px') 
                              ? dimension.value 
                              : dimension.name === 'C_round' 
                                ? '50px' 
                                : dimension.value
                          }}
                        ></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{dimension.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                          {dimension.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacing */}
                <div>
                  <h3 
                    className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200"
                    style={{ fontFamily: bodoni_moda.style.fontFamily }}
                  >
                    Spacing & Padding
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Consistent spacing values for layouts.
                  </p>
                  <div className="space-y-3">
                    {dimensions.spacing?.map((dimension) => (
                      <div key={dimension.name} className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div 
                          className="w-1 bg-accent"
                          style={{ height: dimension.value.includes('px') ? dimension.value : '16px' }}
                        ></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{dimension.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                          {dimension.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DesignSystemSpecs; 