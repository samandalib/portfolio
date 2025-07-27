export interface ColorSwatch {
  name: string;
  alias: string;
  hex: string;
  rgb: string;
}

export interface TypographySpec {
  name: string;
  font: string;
  size: string;
  weight: string;
}

export interface IconSpec {
  name: string;
  useCase: string;
  source: string;
}

export interface DimensionSpec {
  name: string;
  value: string;
}

export interface DesignSystemSpecsProps {
  title?: string;
  description?: string;
  colors?: {
    grays?: ColorSwatch[];
    greens?: ColorSwatch[];
    purples?: ColorSwatch[];
    blues?: ColorSwatch[];
    yellows?: ColorSwatch[];
    reds?: ColorSwatch[];
  };
  typography?: TypographySpec[];
  icons?: IconSpec[];
  dimensions?: {
    cornerRadius?: DimensionSpec[];
    spacing?: DimensionSpec[];
  };
}

export interface ColorSwatchProps {
  color: ColorSwatch;
  showLetter?: boolean;
}

export interface TypographySpecProps {
  spec: TypographySpec;
}

export interface IconSpecProps {
  icon: IconSpec;
}

export interface DimensionSpecProps {
  dimension: DimensionSpec;
} 