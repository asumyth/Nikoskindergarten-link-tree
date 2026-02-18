import { LucideIcon } from 'lucide-react';

export enum SocialPlatform {
  SOUNDCLOUD = 'SoundCloud',
  BLUESKY = 'Bluesky',
  MATRIX = 'Matrix',
  YOUTUBE = 'YouTube',
  GENERIC = 'Website'
}

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  platform: SocialPlatform;
  description?: string;
  icon?: LucideIcon;
  color?: string; // Optional custom color for the button border/glow
}

export interface UserProfile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
}