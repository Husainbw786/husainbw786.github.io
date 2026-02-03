export interface PersonalData {
    name: string;
    roles: string[];
    tagline: string;
    about_short: string;
    company: string;
    company_url: string;
    resume_url: string;
    email: string;
    socials: SocialLink[];
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

export interface StatData {
    label: string;
    value: string;
    sublabel: string;
    icon: string;
    color?: string;
}

export interface AboutData {
    bio_paragraphs: string[];
    highlights: HighlightData[];
    skills: {
        languages: string[];
        frameworks: string[];
        tools: string[];
        ai: string[];
        databases: string[];
    };
}

export interface HighlightData {
    label: string;
    desc: string;
    icon: string;
}

export interface ExperienceData {
    title: string;
    company: string;
    period: string;
    location: string;
    type: 'work' | 'education';
    highlight?: boolean;
    projectLink?: string;
    projectName?: string;
    points: string[];
}

export interface ProjectData {
    title: string;
    description: string;
    tech: string[];
    icon: string;
    github?: string;
    link?: string;
    gradient: string;
    featured: boolean;
    flagship?: boolean;
    stats?: { label: string; value: string }[];
}

export interface MetaData {
    title: string;
    description: string;
    keywords: string;
    og_title: string;
    og_description: string;
    canonical_url: string;
}

export interface ContactData {
    intro: string;
    phone: string;
    location: string;
}

export interface AchievementData {
    icon: string;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    borderColor: string;
}

export interface CodingProfilePlatform {
    name: string;
    username: string;
    url: string;
    stat: string;
    statLabel: string;
    color: string;
    textColor: string;
}

export interface CodingProfilesData {
    platforms: CodingProfilePlatform[];
    github_streak_url: string;
    top_languages_url: string;
}

export interface PortfolioData {
    personal: PersonalData;
    stats: StatData[];
    about: AboutData;
    experience: ExperienceData[];
    projects: ProjectData[];
    meta: MetaData;
    contact: ContactData;
    achievements: AchievementData[];
    coding_profiles: CodingProfilesData;
}
