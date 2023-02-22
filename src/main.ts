import dom from './script/dom'
import { particleSystem } from './script/particleSystem'
import './style/reset.css'
import './style/style.css'

const ctx = dom.setup('#particleContainer')

if (ctx) {
  particleSystem.passContext(ctx)
  particleSystem.generate(1000)
  particleSystem.animate()
}

// Module voor particleSystem (revealing module pattern - iife - self evoking function)

// DOM?

// Particle contructor pattern nodig
// Particle Interface nodig

