export interface InfoTileProps {
  icon?: React.ReactNode | string;
  heading?: string;
  body?: string;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'indigo' | 'accent';
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  headingSize?: 'sm' | 'md' | 'lg' | 'xl';
  bodySize?: 'sm' | 'md' | 'lg';
  showBorder?: boolean;
  showShadow?: boolean;
  hoverEffect?: boolean;
  href?: string;
  external?: boolean;
  disableIconFilter?: boolean;
  italicBody?: boolean;
  fullHeight?: boolean;
  contentAlign?: 'top' | 'center' | 'bottom';
} 