import React from 'react';
import TypewriterHeading from './TypewriterHeading';
import AnimatedAccentLine from './AnimatedAccentLine';
import AnimatedBulletList from './AnimatedBulletList';
import { normalizeBody } from './utils';
import type { InfoSnippetTextSectionProps } from './types';

const TextSection: React.FC<InfoSnippetTextSectionProps> = ({ 
  snippet, 
  justify, 
  stackedState, 
  textCols, 
  textGridClass 
}) => {
  return (
    <div
      className={`flex flex-col ${justify} h-full ${stackedState ? 'col-span-12 w-full' : `col-span-1 md:col-span-${Math.min(textCols,6)} md:w-full ${textGridClass}`}`}
    >
      {snippet.heading && (
        <div style={{ position: 'relative', width: '100%' }}>
          <TypewriterHeading
            text={snippet.heading}
            className="font-bold mb-1 text-gray-900 dark:text-gray-100"
            style={{ fontSize: 32, fontFamily: 'var(--font-bodoni)' }}
          />
          {/* Animated accent line */}
          <AnimatedAccentLine />
        </div>
      )}
      {snippet.subheading && <h4 className="font-normal mb-2 text-gray-600 dark:text-gray-300" style={{ fontSize: 24, fontFamily: 'var(--font-manrope)' }}>{snippet.subheading}</h4>}
      {(() => { console.log('snippet.body:', snippet.body); return null; })()}
      {Array.isArray(snippet.body) ? (
        (() => {
          const normalizedBody = normalizeBody(snippet.body);
          if (Array.isArray(normalizedBody)) {
            // If every item is a string, render as a single animated <ul>
            if (normalizedBody.every(item => typeof item === 'string')) {
              return (
                <AnimatedBulletList items={normalizedBody} />
              );
            }
            // Otherwise, render mixed content
            return (
              <>
                {normalizedBody.map((item, idx) => {
                  if (typeof item === 'string') {
                    return (
                      <p key={idx} className="mb-2 text-gray-700 dark:text-gray-200" style={{ fontFamily: 'var(--font-manrope)' }}>
                        {item}
                      </p>
                    );
                  } else if (Array.isArray(item)) {
                    return (
                      <AnimatedBulletList key={idx} items={item} />
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            );
          } else if (typeof normalizedBody === 'string') {
            return (
              <p 
                className="mb-2 text-gray-700 dark:text-gray-200"
                style={{ fontFamily: 'var(--font-manrope)' }}
                dangerouslySetInnerHTML={{ __html: normalizedBody }}
              />
            );
          } else {
            return null;
          }
        })()
      ) : snippet.body ? (
        <p 
          className="mb-2 text-gray-700 dark:text-gray-200"
          style={{ fontFamily: 'var(--font-manrope)' }}
          dangerouslySetInnerHTML={{ __html: snippet.body }}
        />
      ) : null}
    </div>
  );
};

export default TextSection; 