import { COMPANY_INFO } from "../constants";

type SocialKey = keyof typeof COMPANY_INFO.socialLinks;

const SOCIAL_CONFIG: Record<
  SocialKey,
  {
    bgClass: string;
    label: string;
    icon: React.ReactNode;
  }
> = {
  facebook: {
    bgClass: "bg-[#1877F2] hover:bg-[#166fe5] text-white hover:shadow-[0_4px_14px_rgba(24,119,242,0.45)]",
    label: "Facebook",
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  instagram: {
    bgClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white hover:shadow-[0_4px_14px_rgba(220,39,67,0.5)]",
    label: "Instagram",
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
  linkedin: {
    bgClass: "bg-[#0A66C2] hover:bg-[#095196] text-white hover:shadow-[0_4px_14px_rgba(10,102,194,0.45)]",
    label: "LinkedIn",
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53 1.53 1.53 0 0 0 1.53 1.53m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
};

interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
  colorful?: boolean;
}

export default function SocialLinks({
  className = "flex items-center space-x-2.5",
  linkClassName,
  colorful = true,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {COMPANY_INFO.socialProfiles.map((profile) => {
        const key = profile.key as SocialKey;
        const config = SOCIAL_CONFIG[key];
        const defaultClass = colorful
          ? `w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 ${config.bgClass}`
          : "p-1.5 rounded-full hover:text-brand-blue hover:bg-brand-blue-50 transition-colors";

        return (
          <a
            key={key}
            href={COMPANY_INFO.socialLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName || defaultClass}
            aria-label={config.label}
            title={profile.title || config.label}
          >
            {config.icon}
          </a>
        );
      })}
    </div>
  );
}
