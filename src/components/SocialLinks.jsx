import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/mafagrowthdigital/',
      icon: Facebook,
      followers: '250'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mafagrowthdigital/',
      icon: Instagram,
      followers: '1,156'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/MafaGrowth',
      icon: Twitter,
      followers: '554'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mafagrowthdigital',
      icon: Linkedin,
      followers: '46'
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 p-3 bg-card hover:bg-accent rounded-lg transition-all duration-300 hover:scale-105"
            title={`${social.name} - ${social.followers} seguidores`}
          >
            <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-foreground">{social.name}</div>
              <div className="text-xs text-muted-foreground">{social.followers} seguidores</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

