interface PromoItem {
    id: number;
    title: string;
    text: string;
}

// Define an interface for the fetched data structure if necessary
interface PromoData {
    promos: PromoItem[];
}