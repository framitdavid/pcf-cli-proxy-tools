import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import PcfProxyLogo from '@site/static/img/pcf-proxy-logo.svg';

function HomepageHeader() {
  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        background: 'linear-gradient(90deg, #f3f2f1 0%, #e6e6fa 100%)',
        color: 'var(--color-fluent-dark-gray)',
        padding: '72px 0 56px 0',
        borderBottom: 'none',
        boxShadow: 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
          flexWrap: 'wrap',
        }}
      >
        <div style={{minWidth: 320, maxWidth: 480, flex: 1, textAlign: 'left'}}>
          <h1
            style={{
              fontSize: '2.8rem',
              fontWeight: 800,
              marginBottom: 18,
              color: 'var(--color-dynamics-blue)',
              lineHeight: 1.1,
              textAlign: 'left',
            }}
          >
            Develop PCF Components <span style={{color: 'var(--color-powerapps-purple)'}}>Locally</span> in Dynamics 365
          </h1>
          <p
            style={{
              fontSize: '1.35rem',
              color: 'var(--color-fluent-dark-gray)',
              maxWidth: 520,
              margin: '0 0 32px 0',
              lineHeight: 1.6,
              textAlign: 'left',
            }}
          >
            <b>PCF Proxy Tools</b> lets you build, test, and debug Power Apps PCF components <b>instantly</b> inside Dynamics 365—no deployments, no Fiddler, and no waiting. Focus on your code, not your tooling.
          </p>
          <div style={{display: 'flex', gap: 18, marginBottom: 8}}>
            <Link className="button button--primary button--lg" to="/docs">Get Started</Link>
            <Link className="button button--secondary button--lg" to="https://github.com/framitdavid/pcf-cli-proxy-tools">GitHub</Link>
          </div>
        </div>
        <div style={{minWidth: 220, maxWidth: 340, flex: 1, display: 'flex', justifyContent: 'center'}}>
          <PcfProxyLogo style={{width: 180, height: 180, margin: '0 auto'}} role="img" />
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section
      className={styles.features}
      style={{
        background: '#fff',
        padding: '56px 0 40px 0',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 48,
          marginTop: 0,
        }}
      >
        <div style={{minWidth: 220, maxWidth: 320, flex: 1, textAlign: 'center'}}>
          <span style={{fontSize: 36, color: 'var(--color-dynamics-blue)'}}>⚡</span>
          <Heading as="h3" style={{margin: '16px 0 8px 0', fontWeight: 700}}>Iterate Instantly</Heading>
          <p style={{fontSize: '1.1rem', color: 'var(--color-fluent-dark-gray)'}}>See your changes in Dynamics 365 as soon as you save—no more packaging, uploading, or waiting for deployment.</p>
        </div>
        <div style={{minWidth: 220, maxWidth: 320, flex: 1, textAlign: 'center'}}>
          <span style={{fontSize: 36, color: 'var(--color-powerapps-purple)'}}>🔗</span>
          <Heading as="h3" style={{margin: '16px 0 8px 0', fontWeight: 700}}>Zero Fiddler, Zero Hassle</Heading>
          <p style={{fontSize: '1.1rem', color: 'var(--color-fluent-dark-gray)'}}>All traffic interception is handled for you. No manual proxy setup, no heavyweight tools.</p>
        </div>
        <div style={{minWidth: 220, maxWidth: 320, flex: 1, textAlign: 'center'}}>
          <span style={{fontSize: 36, color: 'var(--color-success-green)'}}>🚀</span>
          <Heading as="h3" style={{margin: '16px 0 8px 0', fontWeight: 700}}>One Command Setup</Heading>
          <p style={{fontSize: '1.1rem', color: 'var(--color-fluent-dark-gray)'}}>Start your local dev server, proxy, and browser with a single command. Works with your existing PCF setup.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Develop PCF components locally in Dynamics 365 with instant feedback, no deployments, and no Fiddler."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
