import React from "react";

// ------------- Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";

// ------------- React's Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";
import TitlePage from "../../Components/title-page/title-page.component";

// ------------- Lego --------------- //
const DailyPage = () => {
    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <TitlePage titleName='Daily' />
            </AsideLayoutContainer>
            <MainLayoutContainer>
                <Navigation />
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default DailyPage;