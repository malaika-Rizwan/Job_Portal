// Data.tsx

// Companies
export const companies: string[] = [
    "Google",
    "Amazon",
    "Figma",
    "Netflix",
    "Meta",
    "Microsoft",
    "Pinterest",
    "Slack",
    "Spotify",
    "Oracle",
    "Walmart",
];

// Job Categories
export interface JobCategory {
    name: string;
    desc: string;
    jobs: string;
}

export const jobCategory: JobCategory[] = [
    { name: "Digital Marketing", desc: "Promote brands online with marketing strategies", jobs: "1k" },
    { name: "Web Developer", desc: "Build and maintain websites for clients", jobs: "2k" },
    { name: "Arts & Design", desc: "Create visual content for branding and media", jobs: "500" },
    { name: "UI-UX Designer", desc: "Design user interfaces and enhance user experience", jobs: "800" },
    { name: "Content Writing", desc: "Write and edit content for various platforms", jobs: "1.5k" },
    { name: "Data Entry", desc: "Input data into systems accurately and efficiently", jobs: "1k" },
    { name: "Customer Support", desc: "Assist customers with inquiries and issues", jobs: "1.2k" },
    { name: "Sales", desc: "Sell products and services to customers", jobs: "900" },
    { name: "Finance", desc: "Manage financial records and transactions", jobs: "700" },
    { name: "Human Resource", desc: "Recruit, manage, and support company employees", jobs: "600" },
];

// Work steps
export interface WorkStep {
    name: string;
    desc: string;
}

export const work: WorkStep[] = [
    { name: "Build your resume", desc: "Create a standout resume with your skills." },
    { name: "Apply for job", desc: "Find and apply for jobs that match your skills." },
    { name: "Get hired", desc: "Connect with employers and start your new job." },
];

// Testimonials
export interface Testimonial {
    name: string;
    testimonial: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        name: "Eman Ali",
        testimonial: "This job portal made job search easy and quick. Recommended to all job seekers!",
        rating: 5,
    },
    {
        name: "Sundas Pari",
        testimonial: "Found my dream job within a week! The application process was smooth.",
        rating: 5,
    },
    {
        name: "Amna Gohar",
        testimonial: "I secured a job offer within days of applying. Exceptional user experience and support.",
        rating: 4,
    },
    {
        name: "Ummal Awan",
        testimonial: "Highly efficient job portal with excellent resources. Helped me land a great position.",
        rating: 4,
    },
];

// Footer Links
export interface FooterLink {
    title: string;
    links: string[];
}

export const footerLinks: FooterLink[] = [
    { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
    { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"] },
    { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] },
];
