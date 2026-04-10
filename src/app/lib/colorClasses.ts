import type { ColorVariant } from '../types/portfolio';

export interface ColorClasses {
  border: string;       // plain border + hover
  text: string;         // text color
  bg: string;           // background tint
  glow: string;         // same as bg, alias used in timeline dots
  badge: string;        // badge chip (bg + text + border)
  skillBorder: string;  // border + hover + group-hover:text for Skills cards
}

export const colorClasses: Record<ColorVariant, ColorClasses> = {
  cyan: {
    border:      'border-cyan-500/30 hover:border-cyan-500/60',
    text:        'text-cyan-400',
    bg:          'bg-cyan-500/10',
    glow:        'bg-cyan-500/10',
    badge:       'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
    skillBorder: 'border-cyan-500/30 hover:border-cyan-500/60 group-hover:text-cyan-400',
  },
  emerald: {
    border:      'border-emerald-500/30 hover:border-emerald-500/60',
    text:        'text-emerald-400',
    bg:          'bg-emerald-500/10',
    glow:        'bg-emerald-500/10',
    badge:       'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    skillBorder: 'border-emerald-500/30 hover:border-emerald-500/60 group-hover:text-emerald-400',
  },
  purple: {
    border:      'border-purple-500/30 hover:border-purple-500/60',
    text:        'text-purple-400',
    bg:          'bg-purple-500/10',
    glow:        'bg-purple-500/10',
    badge:       'bg-purple-500/20 text-purple-300 border-purple-500/50',
    skillBorder: 'border-purple-500/30 hover:border-purple-500/60 group-hover:text-purple-400',
  },
  blue: {
    border:      'border-blue-500/30 hover:border-blue-500/60',
    text:        'text-blue-400',
    bg:          'bg-blue-500/10',
    glow:        'bg-blue-500/10',
    badge:       'bg-blue-500/20 text-blue-300 border-blue-500/50',
    skillBorder: 'border-blue-500/30 hover:border-blue-500/60 group-hover:text-blue-400',
  },
  pink: {
    border:      'border-pink-500/30 hover:border-pink-500/60',
    text:        'text-pink-400',
    bg:          'bg-pink-500/10',
    glow:        'bg-pink-500/10',
    badge:       'bg-pink-500/20 text-pink-300 border-pink-500/50',
    skillBorder: 'border-pink-500/30 hover:border-pink-500/60 group-hover:text-pink-400',
  },
  orange: {
    border:      'border-orange-500/30 hover:border-orange-500/60',
    text:        'text-orange-400',
    bg:          'bg-orange-500/10',
    glow:        'bg-orange-500/10',
    badge:       'bg-orange-500/20 text-orange-300 border-orange-500/50',
    skillBorder: 'border-orange-500/30 hover:border-orange-500/60 group-hover:text-orange-400',
  },
  indigo: {
    border:      'border-indigo-500/30 hover:border-indigo-500/60',
    text:        'text-indigo-400',
    bg:          'bg-indigo-500/10',
    glow:        'bg-indigo-500/10',
    badge:       'bg-indigo-500/20 text-indigo-300 border-indigo-500/50',
    skillBorder: 'border-indigo-500/30 hover:border-indigo-500/60 group-hover:text-indigo-400',
  },
  amber: {
    border:      'border-amber-500/30 hover:border-amber-500/60',
    text:        'text-amber-400',
    bg:          'bg-amber-500/10',
    glow:        'bg-amber-500/10',
    badge:       'bg-amber-500/20 text-amber-300 border-amber-500/50',
    skillBorder: 'border-amber-500/30 hover:border-amber-500/60 group-hover:text-amber-400',
  },
  rose: {
    border:      'border-rose-500/30 hover:border-rose-500/60',
    text:        'text-rose-400',
    bg:          'bg-rose-500/10',
    glow:        'bg-rose-500/10',
    badge:       'bg-rose-500/20 text-rose-300 border-rose-500/50',
    skillBorder: 'border-rose-500/30 hover:border-rose-500/60 group-hover:text-rose-400',
  },
};
