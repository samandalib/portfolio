import React from 'react';
import PointerIcon from "../icons/PointerIcon";
import CanvasLeftIcon from "../icons/CanvasLeftIcon";
import CanvasRightIcon from "../icons/CanvasRightIcon";
import StackedIcon from "../icons/StackedIcon";
import SideBySideIcon from "../icons/SideBySideIcon";
import CanvasWidthIcon from "../icons/CanvasWidthIcon";
import LayoutIcon from "../icons/LayoutIcon";
import TextTopIcon from "../icons/TextTopIcon";
import TextMiddleIcon from "../icons/TextMiddleIcon";
import TextBottomIcon from "../icons/TextBottomIcon";
import Tooltip from "../Tooltip";
import { CANVAS_COL_OPTIONS } from './utils';
import type { InfoSnippetDockerProps } from './types';

const DockerControls: React.FC<InfoSnippetDockerProps> = ({
  snippet,
  showDockerControls,
  pointerMode,
  textAlign,
  canvasLeftState,
  stackedState,
  canvasCols,
  onToggleDockerControls,
  onTogglePointerMode,
  onCycleTextAlign,
  onToggleCanvasLeft,
  onToggleStacked,
  onCycleCanvasCols,
}) => {
  if (!snippet.visuals || snippet.visuals.length === 0) return null;

  return (
    <div className="absolute bottom-4 right-4 z-50">
      <div className="hidden md:flex items-center gap-4 px-3 py-2 modern-border-radius-xl modern-shadow-xl glass-effect flex-wrap transition-all duration-300 ease-in-out overflow-hidden w-fit">
        {showDockerControls && (
          <>
            <Tooltip label={pointerMode ? 'Disable pointer positioner' : 'Enable pointer positioner'}>
              <button
                onClick={onTogglePointerMode}
                className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 ${pointerMode ? 'bg-accent text-white border-accent modern-shadow-md' : 'glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow'}`}
                aria-label={pointerMode ? 'Disable pointer positioner' : 'Enable pointer positioner'}
              >
                <PointerIcon width={20} height={20} />
              </button>
            </Tooltip>
            <Tooltip label="Cycle text vertical alignment">
              <button
                onClick={onCycleTextAlign}
                className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 glass-effect border-gray-300 dark:border-gray-600 ${stackedState ? 'opacity-50 pointer-events-none' : 'hover:scale-105 hover:modern-shadow'}`}
                aria-label="Cycle text vertical alignment"
                disabled={stackedState}
              >
                {textAlign === 'top' && <TextTopIcon width={20} height={20} />}
                {textAlign === 'middle' && <TextMiddleIcon width={20} height={20} />}
                {textAlign === 'bottom' && <TextBottomIcon width={20} height={20} />}
              </button>
            </Tooltip>
            <Tooltip label={canvasLeftState ? 'Canvas on left' : 'Canvas on right'}>
              <button
                onClick={onToggleCanvasLeft}
                className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 ${canvasLeftState ? 'bg-accent text-white border-accent modern-shadow-md' : 'glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow'}`}
                aria-label={canvasLeftState ? 'Canvas on left' : 'Canvas on right'}
              >
                {canvasLeftState ? <CanvasLeftIcon width={20} height={20} /> : <CanvasRightIcon width={20} height={20} />}
              </button>
            </Tooltip>
            <Tooltip label={stackedState ? 'Stacked layout' : 'Side-by-side layout'}>
              <button
                onClick={onToggleStacked}
                className={`w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 ${stackedState ? 'bg-accent text-white border-accent modern-shadow-md' : 'glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow'}`}
                aria-label={stackedState ? 'Stacked layout' : 'Side-by-side layout'}
              >
                {stackedState ? <StackedIcon width={20} height={20} /> : <SideBySideIcon width={20} height={20} />}
              </button>
            </Tooltip>
            <Tooltip label="Cycle canvas columns">
              <button
                onClick={onCycleCanvasCols}
                className={`h-10 px-3 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow`}
                aria-label="Cycle canvas columns"
              >
                <CanvasWidthIcon width={20} height={20} className="mr-2" />
                <span className="text-gray-700 dark:text-gray-200">{canvasCols}</span>
              </button>
            </Tooltip>
          </>
        )}
        <Tooltip label={showDockerControls ? 'Hide controls' : 'Show controls'}>
          <button
            onClick={onToggleDockerControls}
            className="w-10 h-10 p-0 modern-border-radius border text-sm font-bold transition-all duration-300 flex items-center justify-center text-gray-700 dark:text-gray-200 glass-effect border-gray-300 dark:border-gray-600 hover:scale-105 hover:modern-shadow"
            aria-label={showDockerControls ? 'Hide controls' : 'Show controls'}
          >
            <LayoutIcon width={20} height={20} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default DockerControls; 