import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Voxel Teleradiology Privacy & Data Policy. Learn how we collect, use, safeguard, and disclose information including Protected Health Information (PHI) in compliance with HIPAA and applicable healthcare regulations.",
  openGraph: {
    title: "Privacy Policy | Voxel Teleradiology",
    description:
      "Our privacy and data protection practices for teleradiology services, HIPAA compliance, and PHI handling.",
    url: "https://voxelteleradiology.com/privacy-policy",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Patient & Clinical Data',
        text: 'We collect medical imaging data (DICOM files, X-rays, CT scans, MRIs, and other radiological studies), patient demographic information, clinical history, and referring physician details as necessary to provide teleradiology interpretation services.',
      },
      {
        subtitle: 'Account & Professional Information',
        text: 'For healthcare providers and partner facilities, we collect organizational details, professional credentials, contact information, and account authentication credentials to manage platform access.',
      },
      {
        subtitle: 'Technical & Usage Data',
        text: 'We automatically collect log data, IP addresses, browser/device information, access timestamps, and platform interaction data to ensure system security, performance, and compliance with audit requirements.',
      },
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Delivering Radiology Services',
        text: 'Patient data and imaging studies are used exclusively to provide diagnostic radiology interpretations, generate reports, and communicate findings to the ordering provider.',
      },
      {
        subtitle: 'Quality Assurance & Safety',
        text: 'We use de-identified or aggregated data to monitor diagnostic quality, conduct peer reviews, and continuously improve the accuracy and reliability of our radiologist network.',
      },
      {
        subtitle: 'Regulatory Compliance',
        text: 'Information is processed as required to comply with HIPAA, applicable state medical practice laws, ACR standards, and other healthcare regulations governing teleradiology services.',
      },
      {
        subtitle: 'Platform Operations',
        text: 'Technical data is used to authenticate users, maintain system integrity, prevent unauthorized access, troubleshoot issues, and fulfill our contractual obligations to partner facilities.',
      },
    ],
  },
  {
    id: 'hipaa-compliance',
    title: 'HIPAA Compliance & PHI',
    content: [
      {
        subtitle: 'Business Associate Agreements',
        text: 'Voxel Teleradiology operates as a Business Associate under HIPAA. We execute Business Associate Agreements (BAAs) with all covered entity partners before any protected health information (PHI) is transmitted or processed.',
      },
      {
        subtitle: 'Minimum Necessary Standard',
        text: 'We adhere strictly to the HIPAA Minimum Necessary Standard, ensuring that only the PHI required for the specific radiology service is accessed, used, or disclosed.',
      },
      {
        subtitle: 'Breach Notification',
        text: 'In the event of a breach involving unsecured PHI, we will notify affected covered entities and individuals in accordance with the HIPAA Breach Notification Rule, within the timeframes mandated by law.',
      },
    ],
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing & Disclosure',
    content: [
      {
        subtitle: 'Authorized Disclosures Only',
        text: 'We do not sell, rent, or trade patient data or PHI. Information is shared only with the referring facility, treating clinicians, and other parties explicitly authorized by the patient or required by law.',
      },
      {
        subtitle: 'Subcontractors & Vendors',
        text: 'Any subcontractors or technology vendors who access PHI on our behalf are bound by HIPAA-compliant BAAs and are required to uphold the same privacy and security standards we maintain.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose information as required by valid legal process, court order, or to respond to lawful requests from public authorities in accordance with applicable law.',
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      {
        subtitle: 'Encryption',
        text: 'All medical imaging data and PHI are encrypted in transit using TLS 1.2 or higher and encrypted at rest using AES-256 encryption. DICOM data is transmitted exclusively over secured, dedicated connections.',
      },
      {
        subtitle: 'Access Controls',
        text: 'Role-based access controls (RBAC) and multi-factor authentication (MFA) are enforced across all platform access points. Access to PHI is logged, monitored, and limited to authorized personnel only.',
      },
      {
        subtitle: 'Infrastructure & Auditing',
        text: 'Our infrastructure is hosted in HIPAA-eligible, SOC 2 Type II certified data centers. We conduct regular vulnerability assessments, penetration testing, and internal/external audits.',
      },
    ],
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: [
      {
        subtitle: 'Retention Periods',
        text: 'Radiology reports and associated imaging studies are retained in accordance with applicable state and federal medical records laws, typically a minimum of seven (7) years from the date of service, or longer as required.',
      },
      {
        subtitle: 'Secure Disposal',
        text: 'Upon expiration of applicable retention periods, PHI and related records are securely destroyed using methods that render the data unrecoverable, consistent with HIPAA requirements.',
      },
    ],
  },
  {
    id: 'patient-rights',
    title: 'Patient Rights',
    content: [
      {
        subtitle: 'Access & Amendment',
        text: 'Patients have the right to access their radiology reports and, where applicable, request amendments to their health information. Requests should be directed to the originating healthcare facility.',
      },
      {
        subtitle: 'Accounting of Disclosures',
        text: 'Patients may request an accounting of disclosures of their PHI made by Voxel Teleradiology, as provided under HIPAA, by contacting our Privacy Officer.',
      },
      {
        subtitle: 'Complaints',
        text: 'Patients who believe their privacy rights have been violated may file a complaint with their healthcare provider, with Voxel Teleradiology directly, or with the U.S. Department of Health and Human Services Office for Civil Rights.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: [
      {
        subtitle: 'Essential Cookies Only',
        text: 'The Voxel platform uses only essential session cookies required for secure authentication and platform operation. We do not use advertising trackers, third-party analytics cookies, or behavioral profiling technologies.',
      },
      {
        subtitle: 'No Third-Party Advertising',
        text: 'We do not share platform usage data with advertisers or third-party marketing platforms. Our data practices are oriented solely around clinical service delivery and regulatory compliance.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact & Privacy Officer',
    content: [
      {
        subtitle: 'Privacy Officer',
        text: 'For privacy-related inquiries, BAA requests, breach reporting, or to exercise your rights under HIPAA, please contact our designated Privacy Officer.',
      },
      {
        subtitle: 'Contact Details',
        text: 'Email: privacy@voxelradiology.com\nPhone: 1-800-VOXEL-RX\nMail: Voxel Teleradiology, Privacy Officer\n1200 Imaging Way, Suite 400\nSan Francisco, CA 94105',
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="privacy-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        :root {
          --bg: #f5f3ef;
          --surface: #ffffff;
          --ink: #0e1117;
          --ink-muted: #5a5f6e;
          --ink-faint: #9298a6;
          --accent: #1a3a5c;
          --accent-light: #e8eff7;
          --accent-rule: #2563a8;
          --tag-bg: #eaf1fb;
          --tag-text: #1a3a5c;
          --border: #e2e0db;
          --shadow: 0 2px 16px 0 rgba(14,17,23,0.07);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .privacy-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          min-height: 100vh;
          color: var(--ink);
        }

        /* ── HEADER ── */
        .priv-header {
          background: var(--accent);
          padding: 0;
          position: relative;
          overflow: hidden;
        }
        .priv-header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 40px 56px;
          position: relative;
          z-index: 1;
        }
        .priv-header-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .priv-wordmark {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 36px;
        }
        .priv-logo-mark {
          width: 36px;
          height: 36px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 3px;
        }
        .priv-logo-mark span {
          background: rgba(255,255,255,0.9);
          border-radius: 2px;
          display: block;
        }
        .priv-logo-mark span:nth-child(1) { opacity: 1; }
        .priv-logo-mark span:nth-child(2) { opacity: 0.6; }
        .priv-logo-mark span:nth-child(3) { opacity: 0.6; }
        .priv-logo-mark span:nth-child(4) { opacity: 0.35; }
        .priv-wordmark-text {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.03em;
        }
        .priv-wordmark-text em {
          font-style: normal;
          opacity: 0.55;
          font-weight: 400;
          font-size: 14px;
          margin-left: 6px;
        }
        .priv-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.8);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .priv-badge svg { opacity: 0.7; }
        .priv-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
        }
        .priv-title span {
          color: rgba(255,255,255,0.45);
        }
        .priv-subtitle {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .priv-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }
        .priv-meta-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .priv-meta-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .priv-meta-value {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
        }

        /* ── COMPLIANCE STRIP ── */
        .priv-compliance {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }
        .priv-compliance-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .priv-compliance-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-faint);
          white-space: nowrap;
        }
        .priv-badge-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .priv-comp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--tag-bg);
          color: var(--tag-text);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 5px 14px;
          border-radius: 6px;
          border: 1px solid #c8daf4;
        }
        .priv-comp-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563a8;
          flex-shrink: 0;
        }

        /* ── LAYOUT ── */
        .priv-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 56px;
          align-items: start;
        }

        /* ── TOC ── */
        .priv-toc {
          position: sticky;
          top: 32px;
        }
        .priv-toc-title {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }
        .priv-toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .priv-toc-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 6px;
          text-decoration: none;
          color: var(--ink-muted);
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.4;
          transition: background 0.15s, color 0.15s;
        }
        .priv-toc-list a::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--border);
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .priv-toc-list a:hover {
          background: var(--accent-light);
          color: var(--accent);
        }
        .priv-toc-list a:hover::before {
          background: var(--accent-rule);
        }

        /* ── CONTENT ── */
        .priv-content {
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        .priv-intro-card {
          background: var(--accent-light);
          border: 1px solid #c8daf4;
          border-left: 4px solid var(--accent-rule);
          border-radius: 10px;
          padding: 24px 28px;
        }
        .priv-intro-card p {
          font-size: 15px;
          line-height: 1.75;
          color: var(--accent);
          font-weight: 400;
        }
        .priv-intro-card strong {
          font-weight: 600;
        }

        .priv-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .priv-section-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--accent-rule);
        }
        .priv-section-num {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-rule);
          background: var(--tag-bg);
          padding: 3px 9px;
          border-radius: 4px;
          margin-top: 4px;
          white-space: nowrap;
        }
        .priv-section-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .priv-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .priv-item {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 22px 24px;
          box-shadow: var(--shadow);
        }
        .priv-item-title {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: 0.01em;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .priv-item-title::before {
          content: '';
          width: 3px;
          height: 14px;
          background: var(--accent-rule);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .priv-item-text {
          font-size: 14.5px;
          line-height: 1.8;
          color: var(--ink-muted);
          white-space: pre-line;
        }

        /* ── FOOTER ── */
        .priv-footer {
          background: var(--ink);
          color: rgba(255,255,255,0.5);
        }
        .priv-footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .priv-footer-brand {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
        }
        .priv-footer-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .priv-footer-links a {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.15s;
        }
        .priv-footer-links a:hover { color: #fff; }
        .priv-footer-copy {
          font-size: 12px;
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 20px;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .priv-body {
            grid-template-columns: 1fr;
            padding: 40px 20px 60px;
            gap: 40px;
          }
          .priv-toc { display: none; }
          .priv-header-inner { padding: 48px 20px 40px; }
          .priv-compliance-inner { padding: 16px 20px; }
          .priv-footer-inner { padding: 32px 20px; }
        }
      `}</style>

      {/* HEADER */}
      <header className="priv-header">
        <div className="priv-header-bg-grid" />
        <div className="priv-header-inner">
          <div className="priv-wordmark">
            <div className="priv-logo-mark">
              <span /><span /><span /><span />
            </div>
            <span className="priv-wordmark-text">Voxel <em>Teleradiology</em></span>
          </div>
          <div className="priv-badge">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 3v2.5L6.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Legal Document
          </div>
          <h1 className="priv-title">Privacy <span>&</span> Data Policy</h1>
          <p className="priv-subtitle">
            How Voxel Teleradiology collects, uses, safeguards, and discloses information in the course of providing diagnostic radiology services to healthcare facilities and their patients.
          </p>
          <div className="priv-meta-row">
            <div className="priv-meta-item">
              <span className="priv-meta-label">Effective Date</span>
              <span className="priv-meta-value">March 15, 2026</span>
            </div>
            <div className="priv-meta-item">
              <span className="priv-meta-label">Last Reviewed</span>
              <span className="priv-meta-value">March 15, 2026</span>
            </div>
            <div className="priv-meta-item">
              <span className="priv-meta-label">Version</span>
              <span className="priv-meta-value">3.2</span>
            </div>
            <div className="priv-meta-item">
              <span className="priv-meta-label">Jurisdiction</span>
              <span className="priv-meta-value">India (HIPAA)</span>
            </div>
          </div>
        </div>
      </header>

      {/* COMPLIANCE STRIP */}
      <div className="priv-compliance">
        <div className="priv-compliance-inner">
          <span className="priv-compliance-label">Compliance</span>
          <div className="priv-badge-row">
            {['HIPAA Compliant', 'SOC 2 Type II', 'ACR Standards', 'HL7 / DICOM', 'BAA Ready', '21 CFR Part 11'].map(b => (
              <span key={b} className="priv-comp-badge">{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="priv-body">
        {/* TOC */}
        <nav className="priv-toc">
          <div className="priv-toc-title">Contents</div>
          <ul className="priv-toc-list">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  {String(i + 1).padStart(2, '0')} &nbsp;{s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SECTIONS */}
        <main className="priv-content">
          <div className="priv-intro-card">
            <p>
              <strong>Your privacy and the security of patient data are foundational to everything we do.</strong> This Privacy Policy applies to all services provided by Voxel Teleradiology, LLC and governs the handling of Protected Health Information (PHI), personal data, and technical information in accordance with the Health Insurance Portability and Accountability Act (HIPAA), the Health Information Technology for Economic and Clinical Health (HITECH) Act, and all applicable state and federal regulations.
            </p>
          </div>

          {sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="priv-section">
              <div className="priv-section-header">
                <span className="priv-section-num">{String(idx + 1).padStart(2, '0')}</span>
                <h2 className="priv-section-title">{section.title}</h2>
              </div>
              <div className="priv-items">
                {section.content.map((item) => (
                  <div key={item.subtitle} className="priv-item">
                    <div className="priv-item-title">{item.subtitle}</div>
                    <p className="priv-item-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* FOOTER */}
      <footer className="priv-footer">
        <div className="priv-footer-inner">
          <span className="priv-footer-brand">Voxel Teleradiology</span>
          <div className="priv-footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">HIPAA Notice</a>
            <a href="#">Contact Us</a>
            <a href="#">Accessibility</a>
          </div>
          <p className="priv-footer-copy">
            © 2026 Voxel Teleradiology, LLC. All rights reserved. This document does not constitute legal advice. For questions about your rights or our practices, contact our Privacy Officer at privacy@voxelradiology.com.
          </p>
        </div>
      </footer>
    </div>
  )
}