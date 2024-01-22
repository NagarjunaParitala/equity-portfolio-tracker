interface DataSeries {
    name: string;
    series: any[]
}

interface ChartData {
    categories: any[];
    data1: DataSeries;
    data2: DataSeries;
    data3: DataSeries;
}

interface News {
    key: string;
    companyName: string;
    title: string;
    snippet: string;
    source: string;
}

interface Company {
    id: number;
    key: string;
    name: string;
    price: string;
    currency: string;
    logo: string;
}

interface Values {
    username: string;
    password: string;
    remember: boolean;
}

interface CompanyProfile {
    companyName: string,
    industry: string,
    sector: string,
    employees: string,
    equity: string
}

interface IChildProps {
    selectedCompanies: (filteredCompanies: Company[]) => void
}

export type {
    ChartData, DataSeries, News, Company, Values, CompanyProfile, IChildProps
}