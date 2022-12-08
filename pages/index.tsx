import TenderHomeInfoCard from "../components/TenderHomeInfoCard";
import ProductHomeInfoCard from "../components/ProductHomeInfoCard";
import CategoryInfoCard from "../components/CategoryInfoCard";
import HomeQuotationSection from "../components/HomeQuotationSection";
import MarketingHomeInfoCard from "../components/MarketingHomeInfoCard";
import AboutNogicJqsBanner from "../components/AboutNogicJqsBanner";
import ServiceHomeInfoCard from "../components/ServiceHomeInfoCard";
import CompanyHomeInfoCard from "../components/CompanyHomeInfoCard";
import HomeNewsletterSection from "../components/HomeNewsletterSection";
import HomeFooterSection from "../components/HomeFooterSection";
import HomeBannerCard from "../components/HomeBannerCard";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-5 bg-[#f1f1f1] py-5 px-28">
                <HomeBannerCard />
                <CategoryInfoCard />
                <TenderHomeInfoCard />
                <ProductHomeInfoCard />
                <AboutNogicJqsBanner />
                <ServiceHomeInfoCard />
                <CompanyHomeInfoCard />
                <MarketingHomeInfoCard />
            </div>
            <HomeQuotationSection />
            <HomeNewsletterSection />
            <HomeFooterSection />
        </>
    );
}
