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
            className="group flex items-center gap-2 rounded-xl bg-white/80 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#190cff] hover:via-[#7200ff] hover:to-[#00b3ff]"
            title={`${social.name} - ${social.followers} seguidores`}
          >
            <IconComponent className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-white" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-foreground transition-colors group-hover:text-white">{social.name}</div>
              <div className="text-xs text-muted-foreground transition-colors group-hover:text-white/80">{social.followers} seguidores</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

