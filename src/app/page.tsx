"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={40}
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" },
        ]}
        buttonText="Buy on Exchange"
        onButtonClick={() => { /* handle click */ }}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to DogMemCoin"
          description="Join the playful and engaging world of DogMemCoin!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="DogMemCoin is a community-driven memecoin built to bring joy and value to its holders. Explore our tokenomics and discover why DogMemCoin is the next big thing in the crypto space."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant='simple'
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Discover the economic model behind DogMemCoin."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000 DMEM" },
            { id: 2, title: "Market Cap", description: "Market-leading memecoin" },
            { id: 3, title: "Liquidity", description: "High liquidity for easy buying and selling" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "Tokenomics", onClick: () => {} },
              { label: "How to Buy", onClick: () => {} },
            ]},
            { title: "Community", items: [
              { label: "Join our Discord", onClick: () => {} },
              { label: "Follow us on Twitter", onClick: () => {} },
            ]},
            { title: "More", items: [
              { label: "Contact Us", onClick: () => {} },
              { label: "Privacy Policy", onClick: () => {} },
            ]},
          ]}
          copyrightText="© 2023 DogMemCoin. All Rights Reserved."
          onPrivacyClick={() => { /* handle click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}
