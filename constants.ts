import { SocialLink, SocialPlatform, UserProfile } from './types';
import { Cloud, Hash, Music, Youtube } from 'lucide-react';

export const USER_PROFILE: UserProfile = {
  name: "Asumyth",
  handle: "@Asumyth",
  bio: "vrcdj/producer.",
  avatarUrl: "https://unavatar.io/soundcloud/asumyth", 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: '1',
    title: 'SoundCloud',
    url: 'https://soundcloud.com/asumyth',
    platform: SocialPlatform.SOUNDCLOUD,
    description: 'Tracks I have uploaded.',
    icon: Music,
    color: 'hover:border-orange-500 hover:shadow-orange-500/20',
  },
  {
    id: '2',
    title: 'Bluesky',
    url: 'https://bsky.app/profile/asumyth.bsky.social',
    platform: SocialPlatform.BLUESKY,
    description: 'Socialmedia.',
    icon: Cloud,
    color: 'hover:border-blue-500 hover:shadow-blue-500/20',
  },
  {
    id: '3',
    title: 'Matrix',
    url: 'https://matrix.to/#/@asumyth:nikoskindergarten.online',
    platform: SocialPlatform.MATRIX,
    description: 'Reach out to me.',
    icon: Hash,
    color: 'hover:border-green-500 hover:shadow-green-500/20',
  },
  {
    id: '4',
    title: 'YouTube',
    url: 'https://youtube.com/@Asumyth',
    platform: SocialPlatform.YOUTUBE,
    description: 'Newest dj mixes and more.',
    icon: Youtube,
    color: 'hover:border-red-600 hover:shadow-red-600/20',
  }
];