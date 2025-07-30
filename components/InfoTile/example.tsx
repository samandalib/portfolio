import React from 'react';
import InfoTile from './InfoTile';

const InfoTileExample = () => {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold mb-6">InfoTile Component Examples</h1>
      
      {/* Basic Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoTile
            icon="chart"
            heading="Revenue Growth"
            body="Increased revenue by 25% through improved user experience design."
            color="blue"
          />
          <InfoTile
            icon="users"
            heading="User Satisfaction"
            body="95% of users reported improved satisfaction with the new interface."
            color="green"
          />
          <InfoTile
            icon="clock"
            heading="Training Time"
            body="Reduced training time by 40% through intuitive design."
            color="purple"
          />
        </div>
      </section>

      {/* Different Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Different Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoTile
            icon="star"
            heading="Small Tile"
            body="This is a small info tile with smaller text sizes."
            color="orange"
            iconSize="sm"
            headingSize="sm"
            bodySize="sm"
          />
          <InfoTile
            icon="star"
            heading="Medium Tile"
            body="This is a medium info tile with default text sizes."
            color="indigo"
            iconSize="md"
            headingSize="lg"
            bodySize="md"
          />
          <InfoTile
            icon="star"
            heading="Large Tile"
            body="This is a large info tile with larger text sizes."
            color="accent"
            iconSize="lg"
            headingSize="xl"
            bodySize="lg"
          />
        </div>
      </section>

      {/* Different Styles */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Different Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoTile
            icon="shield"
            heading="No Border"
            body="This tile has no border and no shadow for a cleaner look."
            color="blue"
            showBorder={false}
            showShadow={false}
            hoverEffect={false}
          />
          <InfoTile
            icon="heart"
            heading="Custom Styling"
            body="This tile has custom styling with accent color and enhanced hover effects."
            color="accent"
            className="border-2 border-accent/20"
            hoverEffect={true}
          />
        </div>
      </section>

      {/* Without Icons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Without Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoTile
            heading="Text Only"
            body="This info tile doesn't have an icon, just heading and body text."
            color="purple"
          />
          <InfoTile
            heading="Clean Design"
            body="Sometimes a simple text-only approach works best for certain content."
            color="green"
            headingSize="xl"
            bodySize="lg"
          />
        </div>
      </section>

      {/* Minimal Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Minimal Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoTile icon="star" />
          <InfoTile heading="Just a Heading" />
          <InfoTile body="Just some body text without a heading." />
        </div>
      </section>
    </div>
  );
};

export default InfoTileExample; 