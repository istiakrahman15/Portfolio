import { useEffect, useRef, useState } from 'react'
import { animate } from 'motion/react'
import { sm } from '../sm.jsx'
import { Icon } from './Icon.jsx'
import { LargeTitle } from './Type.jsx'
import { builds, goals, interests, profile } from '../data.js'
import { playThrottled } from '../sfx.js'
import { useLanded } from '../useLanded.js'

const base = import.meta.env.BASE_URL

// Counts up each time it scrolls into view (kept for numeric widgets).
export function CountUp({ to, suffix = '', quiet = false }) {
  const ref = useRef(null)
  const inView = useLanded(ref, { amount: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) {
      const t = setTimeout(() => setN(0), 300)
      return () => clearTimeout(t)
    }
    let lastStep = 0
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setN(Math.round(v))
        const step = Math.floor((v / to) * 18)
        if (!quiet && step > lastStep && step < 18) {
          lastStep = step
          playThrottled('tick', 45, { rate: 0.85 + (v / to) * 0.55 })
        }
      },
    })
    return () => controls.stop()
  }, [inView, to, quiet])

  return (
    <span ref={ref}>
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

const rise = (i = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.94 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: false, amount: 0.2 },
  transition: { type: 'spring', stiffness: 110, damping: 20, mass: 0.9, delay: i * 0.07 },
})

// Profile card: the real portrait on the left; name, role and introduction on the right.
function ProfileWidget() {
  return (
    <sm.div className="card widget profile-widget" {...rise(0)}>
      <span className="profile-photo">
        <img
          src={`${base}${profile.photo}`}
          width="480"
          height="600"
          alt="Portrait of Istiak Rahman"
          loading="lazy"
          decoding="async"
        />
      </span>
      <div className="profile-text">
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-role">{profile.role}</p>
        <p className="profile-bio">{profile.intro}</p>
      </div>
    </sm.div>
  )
}

// "What I build" replaces the original map: it says something real instead of marking a place.
function BuildWidget() {
  return (
    <sm.div className="card widget build-widget" {...rise(1)}>
      <span className="widget-label">
        <Icon name="solar:rocket-2-linear" size={14} /> What I build
      </span>
      <ul>
        {builds.map((b) => (
          <li key={b.label}>
            <i className="app-icon" style={{ '--c': '#0891b2' }}>
              <Icon name={b.icon} size={20} />
            </i>
            {b.label}
          </li>
        ))}
      </ul>
    </sm.div>
  )
}

function InterestsWidget() {
  return (
    <sm.div className="card widget interests-widget" {...rise(2)}>
      <span className="widget-label">
        <Icon name="solar:compass-linear" size={14} /> Interests
      </span>
      <div className="app-grid">
        {interests.map((it, i) => (
          <sm.span
            key={it.label}
            className="app"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.1 + i * 0.05 }}
          >
            <i className="app-icon" style={{ '--c': it.color }}>
              <Icon name={it.icon} size={22} />
            </i>
            <small>{it.label}</small>
          </sm.span>
        ))}
      </div>
    </sm.div>
  )
}

// 2026 goals from the GitHub profile. They are goals, so the markers stay empty circles.
function GoalsWidget() {
  return (
    <sm.div className="card widget reminders-widget" {...rise(3)}>
      <span className="widget-label">
        <Icon name="solar:flashlight-linear" size={14} /> Current focus
        <em>{goals.length}</em>
      </span>
      <ul>
        {goals.map((g) => (
          <li key={g}>
            <span className="tick goal" aria-hidden="true" />
            {g}
          </li>
        ))}
      </ul>
    </sm.div>
  )
}

// The About section as an iPhone home screen full of widgets.
export function HomeScreen() {
  return (
    <section id="about" className="section">
      <div className="container">
        <LargeTitle>About</LargeTitle>
        <div className="home-grid">
          <ProfileWidget />
          <BuildWidget />
          <InterestsWidget />
          <GoalsWidget />
        </div>
      </div>
    </section>
  )
}
