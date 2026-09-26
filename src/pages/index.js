import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap'}}>
          <div style={{textAlign: 'left', flex: '1', minWidth: '280px'}}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/PiRogue-ToolSuite/overview">
                Get Started →
              </Link>
            </div>
          </div>
          <div style={{flexShrink: 0}}>
            <img src="/img/jojo-le-piranha.svg" alt="Jojo le Piranha, the PTS mascot" style={{width: '200px', height: '200px', objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </header>
  );
}

function ToolCard({title, description, href, logo}) {
  return (
    <div className={styles.toolCardWrapper}>
      <div className={clsx('card', styles.toolCard)}>
        <div className="card__header" style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <img src={logo} alt={title + ' logo'} style={{width: '2.5rem', height: '2.5rem', objectFit: 'contain'}} />
          <Heading as="h3" style={{margin: 0}}>
            <Link to={href}>{title}</Link>
          </Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--sm" to={href}>
            View docs →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="PiRogue Tool Suite is an open-source digital forensics and network traffic analysis platform for civil society organizations.">
      <HomepageHeader />
      <main>
        <section className={styles.toolsSection}>
          <div className="container">
            <div className={styles.toolGrid}>
              <ToolCard
                title="PiRogue"
                description="Raspberry Pi-based network router for capturing and analysing mobile device traffic in real-time."
                href="/docs/PiRogue/overview"
                logo="/img/logos/pirogue.svg"
              />
              <ToolCard
                title="Colander"
                description="Case and digital investigation platform to manage evidence, knowledge, and team collaboration."
                href="/docs/Colander/overview"
                logo="/img/logos/colander.svg"
              />
              <ToolCard
                title="Threatr"
                description="Threat intelligence platform powering Colander's external source lookups via VirusTotal, OTX, and more."
                href="/docs/Threatr/overview"
                logo="/img/logos/threatr.svg"
              />
              <ToolCard
                title="Mandolin"
                description="File analysis micro-service to extract content, scan with antivirus and apply Yara rules, offline."
                href="/docs/Mandolin/overview"
                logo="/img/logos/mandolin.png"
              />
              <ToolCard
                title="Octopus"
                description="Dynamic analysis framework for Android apps: instrument apps with Frida, capture traffic and decrypt TLS."
                href="/docs/Octopus/overview"
                logo="/img/logos/octopus.png"
              />
              <ToolCard
                title="Mongoose"
                description="Collect, enrich, store and forward Suricata alerts and network flows from the PiRogue."
                href="/docs/Mongoose/overview"
                logo="/img/logos/mongoose.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
