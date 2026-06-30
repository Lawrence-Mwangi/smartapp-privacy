export const App_config = {
    name: 'Smart App',
    tagline: 'Simplify Your daily flow',
    version: '1.0.0',
    company: 'Lawnet System Solutions',
    email: 'support.smartapp.com',
    currency:' Kshs',


    brand: {
        logo: '/images/logo.svg',
        favicon: '/favicon.ico',
        primaryColor: '#000000',
        secondaryColor: '#ffffff',
        fontFamily: 'Inter, sans-serif',
    },


    contact: {
        email: 'support.smartapp.com',
        phone: '+254 799 509 242',
        address: 'Kiambu town, Kiambu County',
        social: {
            twitter: 'https://x.com/LawnetSolution',
            linkedin: 'https://www.linkedin.com/in/lawrence-mwangi-192b303a1',
            github: 'https://github.com/lawrencemwangi',
            youtube: 'https://www.youtube.com/@Lawnetsolutions',
            facebook: 'https://www.facebook.com/lawnet.solution',
            tiktok: 'https://www.tiktok.com/@lawnet.solutions',
            instagram: 'https://www.instagram.com/lawnet_solution'
        },        
    },

    policies: {
        privacy: {
            version: '2.1.0',
            lastUpdated: '26 July 2026',
            summary: 'Added section on data retention and user rights'
        },

        terms: {
            version: '1.5.0',
            lastUpdated: '2026-05-15',
            summary: 'Updated payment terms'
        },
    }
} as const

export default App_config