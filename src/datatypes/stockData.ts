import { Company, CompanyProfile, News } from "./CustomDataTypes";

const companyNewsData: News[] = [
    {
        key: '1',
        companyName: 'Google',
        title: 'Google Launches Super Computers',
        snippet: 'Google Launches Worlds Fastest Super Computers',
        source: 'BBC'
    },
    {
        key: '2',
        companyName: 'Microsoft',
        title: 'Microsoft Acquierd Open AI',
        snippet: 'Microsoft Acquierd Open AI for its Chat GPT',
        source: 'Times of USA'
    },
    {
        key: '3',
        companyName: 'Apple',
        title: 'Apples increases Iphone prices',
        snippet: 'Apples increases Iphone prices prices upto 10% in USA & China',
        source: 'BBC'
    },
];

const companyProfileData: CompanyProfile[] = [
    {
        companyName: 'Apple',
        industry: 'Manfacturing',
        sector: 'Technology',
        employees: '82000',
        equity: '63.09 B'
    },
    {
        companyName: 'Microsoft',
        industry: 'Manfacturing & Cloud',
        sector: 'Technology',
        employees: '134000',
        equity: '220.71 B'
    },
    {
        companyName: 'Google',
        industry: 'R&D Technology',
        sector: 'Technology',
        employees: '95000',
        equity: '146.71 B'
    }
];

const companiesList: Company[] = [
    {
        id: 1, name: 'Apple', key: 'apple', price: '180', currency: 'USD',
        logo: 'https://img.icons8.com/color/48/mac-os.png'
    },
    {
        id: 2, name: 'Google', key: 'google', price: '350', currency: 'USD',
        logo: 'https://img.icons8.com/color/48/google-logo.png'
    },
    {
        id: 3, name: 'Microsoft', key: 'microsoft', price: '750', currency: 'USD',
        logo: 'https://img.icons8.com/color/48/microsoft.png'
    }
];


export { companyNewsData, companyProfileData, companiesList }