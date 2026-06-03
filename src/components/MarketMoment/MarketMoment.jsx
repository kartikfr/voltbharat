import React, { useState } from 'react';
import styles from './MarketMoment.module.css';
import { ShieldCheck, Zap, Coins, TrendingUp, Info } from 'lucide-react';

export default function MarketMoment() {
  const [activeTab, setActiveTab] = useState('capacity'); // 'policy', 'capacity', 'capital'

  const policyData = [
    { name: 'Green Hydrogen PLI', progress: 85, status: 'Active Tender', allocation: '₹19,744 Cr', date: 'FY 2026-27' },
    { name: 'BESS Viability Funding', progress: 68, status: 'Scheme Approved', allocation: '₹9,400 Cr', date: 'FY 2026-27' },
    { name: 'PM-KUSUM Solar Farms', progress: 92, status: 'Deploying phase', allocation: '₹34,422 Cr', date: 'FY 2026-27' },
    { name: 'Offshore Wind Subsidy', progress: 45, status: 'Consultation Open', allocation: '₹8,500 Cr', date: 'FY 2026-27' }
  ];

  const ipoData = [
    { company: 'NTPC Green Energy', size: '₹10,000 Cr', status: 'Launched', return: '+42%', year: '2025' },
    { company: 'Acme Solar Holdings', size: '₹2,900 Cr', status: 'Launched', return: '+18%', year: '2025' },
    { company: 'Waaree Energies', size: '₹4,300 Cr', status: 'Launched', return: '+215%', year: '2024' },
    { company: 'Premier Energies', size: '₹2,800 Cr', status: 'Launched', return: '+124%', year: '2024' }
  ];

  return (
    <section id="dashboard" className={styles.sectionContainer}>
      <div className={styles.sectionContent}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>The Market Moment</span>
          <h2 className={styles.headline}>Renewable energy is becoming Bharat’s next economic engine.</h2>
          <p className={styles.subtitle}>
            India’s clean-energy transition is entering a hyper-growth decade. We track, contextualize, and index the signals that indicate where policies are changing, capacity is scaling, and capital is flowing.
          </p>
        </div>

        {/* Interactive Dashboard Console */}
        <div className={styles.consoleContainer}>
          {/* Sidebar / Tabs */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarTitle}>
              <TrendingUp size={16} />
              <span>Select Indicator</span>
            </div>
            
            <button 
              className={`${styles.tabBtn} ${activeTab === 'capacity' ? styles.activeTabBtn : ''}`}
              onClick={() => setActiveTab('capacity')}
            >
              <div className={styles.tabBtnIcon}><Zap size={18} /></div>
              <div className={styles.tabBtnTexts}>
                <span className={styles.tabLabel}>Capacity Growth</span>
                <span className={styles.tabDesc}>Gigawatts scaling</span>
              </div>
            </button>

            <button 
              className={`${styles.tabBtn} ${activeTab === 'policy' ? styles.activeTabBtn : ''}`}
              onClick={() => setActiveTab('policy')}
            >
              <div className={styles.tabBtnIcon}><ShieldCheck size={18} /></div>
              <div className={styles.tabBtnTexts}>
                <span className={styles.tabLabel}>Policy Index</span>
                <span className={styles.tabDesc}>Decoded regulations</span>
              </div>
            </button>

            <button 
              className={`${styles.tabBtn} ${activeTab === 'capital' ? styles.activeTabBtn : ''}`}
              onClick={() => setActiveTab('capital')}
            >
              <div className={styles.tabBtnIcon}><Coins size={18} /></div>
              <div className={styles.tabBtnTexts}>
                <span className={styles.tabLabel}>Capital & IPO Watch</span>
                <span className={styles.tabDesc}>Valuation trackers</span>
              </div>
            </button>
            
            <div className={styles.sidebarFooter}>
              <Info size={14} />
              <span>Click toggles to update live telemetry</span>
            </div>
          </div>

          {/* Main Visual Board */}
          <div className={styles.visualBoard}>
            {/* CAPACITY CHART */}
            {activeTab === 'capacity' && (
              <div className={styles.panelContent}>
                <div className={styles.panelTitleRow}>
                  <h3 className={styles.panelTitle}>India's Renewable Capacity Target (GW)</h3>
                  <div className={styles.panelTag}>Telemetry Active</div>
                </div>
                
                {/* SVG Area Chart */}
                <div className={styles.chartContainer}>
                  <svg viewBox="0 0 600 240" className={styles.svgChart}>
                    {/* Grid Lines */}
                    <line x1="50" y1="30" x2="550" y2="30" stroke="rgba(75, 91, 120, 0.08)" />
                    <line x1="50" y1="80" x2="550" y2="80" stroke="rgba(75, 91, 120, 0.08)" />
                    <line x1="50" y1="130" x2="550" y2="130" stroke="rgba(75, 91, 120, 0.08)" />
                    <line x1="50" y1="180" x2="550" y2="180" stroke="rgba(75, 91, 120, 0.08)" />

                    {/* Chart Gradient */}
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1FA463" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#1FA463" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>

                    {/* Area path */}
                    <path 
                      d="M 50 180 L 150 162 L 250 140 L 350 115 L 450 82 L 550 40 L 550 180 Z" 
                      fill="url(#chartGlow)"
                      className={styles.chartArea}
                    />

                    {/* Line path */}
                    <path 
                      d="M 50 180 L 150 162 L 250 140 L 350 115 L 450 82 L 550 40" 
                      fill="none" 
                      stroke="#1FA463" 
                      strokeWidth="3"
                      className={styles.chartLine}
                    />

                    {/* Data Points */}
                    <circle cx="50" cy="180" r="5" className={styles.pointDot} />
                    <circle cx="150" cy="162" r="5" className={styles.pointDot} />
                    <circle cx="250" cy="140" r="5" className={styles.pointDot} />
                    <circle cx="350" cy="115" r="5" className={styles.pointDot} />
                    <circle cx="450" cy="82" r="5" className={styles.pointDot} />
                    <circle cx="550" cy="40" r="6" className={`${styles.pointDot} ${styles.targetDot}`} />

                    {/* Data Labels */}
                    <text x="50" y="200" className={styles.chartAxisLabel}>2016</text>
                    <text x="150" y="200" className={styles.chartAxisLabel}>2018</text>
                    <text x="250" y="200" className={styles.chartAxisLabel}>2020</text>
                    <text x="350" y="200" className={styles.chartAxisLabel}>2022</text>
                    <text x="450" y="200" className={styles.chartAxisLabel}>2024</text>
                    <text x="550" y="200" className={styles.chartAxisLabel}>2030 (T)</text>

                    {/* Values */}
                    <text x="50" y="165" className={styles.chartValLabel}>57 GW</text>
                    <text x="150" y="147" className={styles.chartValLabel}>78 GW</text>
                    <text x="250" y="125" className={styles.chartValLabel}>90 GW</text>
                    <text x="350" y="98" className={styles.chartValLabel}>125 GW</text>
                    <text x="450" y="65" className={styles.chartValLabel}>180 GW</text>
                    <text x="525" y="25" className={styles.chartValLabelBold}>500 GW</text>
                  </svg>
                </div>
                
                {/* Visual statistics */}
                <div className={styles.telemetryRow}>
                  <div className={styles.telemetryCard}>
                    <span className={styles.telemetryTitle}>Current Capacity</span>
                    <span className={styles.telemetryVal}>180.8 GW</span>
                    <span className={styles.telemetrySub}>As of Q1 2026</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.telemetryTitle}>CAGR Growth</span>
                    <span className={styles.telemetryVal}>16.4%</span>
                    <span className={styles.telemetrySub}>Past 5 Years</span>
                  </div>
                  <div className={styles.telemetryCard}>
                    <span className={styles.telemetryTitle}>Target Target (2030)</span>
                    <span className={styles.telemetryVal} style={{ color: '#1FA463' }}>500 GW</span>
                    <span className={styles.telemetrySub}>Required Rate: 36 GW/yr</span>
                  </div>
                </div>
              </div>
            )}

            {/* POLICY CHART */}
            {activeTab === 'policy' && (
              <div className={styles.panelContent}>
                <div className={styles.panelTitleRow}>
                  <h3 className={styles.panelTitle}>Policy Progression Telemetry</h3>
                  <div className={styles.panelTag} style={{ backgroundColor: 'rgba(255,193,7,0.1)', color: '#d99c00', borderColor: 'rgba(255,193,7,0.2)' }}>Monitoring</div>
                </div>
                
                {/* List of active policies with custom progress trackers */}
                <div className={styles.policyList}>
                  {policyData.map((item, idx) => (
                    <div key={idx} className={styles.policyItem}>
                      <div className={styles.policyMeta}>
                        <span className={styles.policyName}>{item.name}</span>
                        <div className={styles.policyBadgeRow}>
                          <span className={styles.policyStatus}>{item.status}</span>
                          <span className={styles.policyBudget}>{item.allocation}</span>
                        </div>
                      </div>
                      <div className={styles.policyProgressWrapper}>
                        <div className={styles.policyProgressBarOuter}>
                          <div 
                            className={styles.policyProgressBarInner} 
                            style={{ width: `${item.progress}%` }} 
                          />
                        </div>
                        <span className={styles.policyPercent}>{item.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.policyFooterNote}>
                  <span className={styles.signalDotIndicator} />
                  <span>Latest Update: Ministry updates bids for solar PV manufacturing PLI Round 3.</span>
                </div>
              </div>
            )}

            {/* CAPITAL CHART */}
            {activeTab === 'capital' && (
              <div className={styles.panelContent}>
                <div className={styles.panelTitleRow}>
                  <h3 className={styles.panelTitle}>Clean-Tech Capital IPO Watch</h3>
                  <div className={styles.panelTag}>Signals Locked</div>
                </div>

                {/* Capital/IPO Table */}
                <div className={styles.ipoTable}>
                  <div className={styles.tableHeader}>
                    <span>Company Name</span>
                    <span>Issue Size</span>
                    <span>Release Year</span>
                    <span>Performance</span>
                  </div>
                  <div className={styles.tableBody}>
                    {ipoData.map((item, idx) => (
                      <div key={idx} className={styles.tableRow}>
                        <span className={styles.ipoName}>{item.company}</span>
                        <span className={styles.ipoSize}>{item.size}</span>
                        <span className={styles.ipoYear}>{item.year}</span>
                        <span className={styles.ipoReturn}>{item.return}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.telemetryNote}>
                  VOLT Bharat tracks capital movement indices. Over <strong>₹34,000 Cr</strong> is projected to be raised in primary public issues within the green energy vertical by 2026.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
