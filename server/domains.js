domains = [
    {
        id: '1',
        name: 'Domain 1',
        description: 'General Security Concepts',
        overview:'Compare and contrast various types of security controls.',
        percentage: 12,
        section: [{
            id: 11,
            description:'Compare and contrast various types of security controls.',
            docurl: '',
            subsec: [
                {
                    name: "Categories",
                    description: "Control Types",
                    id: 1,
                    explanation: "There are many existing risks to consider. Assets (Data, Property, Computer Systems) must be protected. Security controls prevent events from occurring, minimize the impact, and limit the damage done when events do occur.",
                    terms: [
                        {
                            name: "Technical",
                            id: 1,
                            definition: "Hardware and Software Systems used to manage access to resources and systems.",
                            short: "Hardware and Software Controls",
                            example: "Encryption, Smart cards, Passwords, Biometrics, Access control lists (ACLs), Firewalls, routers, IDS/IPS",
                        },
                        {
                            name: "Operational",
                            id: 2,
                            definition: "Policies and procedures implemented and executed by people.",
                            short: "Policies Created and FOLLOWED by PEOPLE",
                            example: "Awareness training, Configurations, Management, Media protection, Badge Reader",
                        },
                        {
                            name: "Managerial",
                            id: 3,
                            definition: "Hardware and Software Systems used to manage access to resources and systems.",
                            short: "Hardware/Software that MANAGE Access",
                            example: "Policies, Procedures, Hiring practices, Background Checks, Data classification, Security training, Risk assessments, Vulnerability assessments",
                        },
                        {
                            name: "Physical",
                            id: 4,
                            definition: "Real-world objects that limit physical access to facilities.",
                            short: "Physical Barriers",
                            example: "Guards, Fences, Lights, Motion detectors, Guard dogs, Video cameras, Alarms, Laptop locks",
                        },
                    ],
                    helpful: [
                        {
                            name: "Safeguards",
                            id: 1,
                            definition: "Proactive, Preventative Controls that reduce the likelihood of incident",
                            short: "Proactive/Preventative Controls",
                            example: "Firewalls, Background Checks, Alarms, Passwords",
                        },
                        {
                            name: "Countermeasures",
                            id: 2,
                            definition: "Reactive, Responsive controls that minimize the impact of incident",
                            short: "Reactive/Responsive Controls",
                            example: "Insurance, Back-Up Power Systems, Fire Extingishers",
                        },
                    ]
                }
            ]
            
        }]
    }
]