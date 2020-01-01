import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { Page404Component } from './components/schoolJagat/page404/page404.component';
import { AboutComponent } from './components/schoolJagat/about/about.component';
import { ArticleclassicComponent } from './components/schoolJagat/articleclassic/articleclassic.component';
import { ArticlegridComponent } from './components/schoolJagat/articlegrid/articlegrid.component';
import { ArticlelistComponent } from './components/schoolJagat/articlelist/articlelist.component';
import { ArticlesingleComponent } from './components/schoolJagat/articlesingle/articlesingle.component';
import { ComingsoonComponent } from './components/schoolJagat/comingsoon/comingsoon.component';
import { CompanygridComponent } from './components/schoolJagat/companygrid/companygrid.component';
import { CompanysigleComponent } from './components/schoolJagat/companysigle/companysigle.component';
import { DashboardAccountsettingsComponent } from './components/schoolJagat/dashboard-accountsettings/dashboard-accountsettings.component';
import { DashboardCanceljobsComponent } from './components/schoolJagat/dashboard-canceljobs/dashboard-canceljobs.component';
import { DashboardCategoryComponent } from './components/schoolJagat/dashboard-category/dashboard-category.component';
import { DashboardCompletejobsComponent } from './components/schoolJagat/dashboard-completejobs/dashboard-completejobs.component';
import { DashboardHelpsupportComponent } from './components/schoolJagat/dashboard-helpsupport/dashboard-helpsupport.component';
import { DashboardInsightsComponent } from './components/schoolJagat/dashboard-insights/dashboard-insights.component';
import { DashboardInsightsuserComponent } from './components/schoolJagat/dashboard-insightsuser/dashboard-insightsuser.component';
import { DashboardInvociesComponent } from './components/schoolJagat/dashboard-invocies/dashboard-invocies.component';
import { DashboardManagejobsComponent } from './components/schoolJagat/dashboard-managejobs/dashboard-managejobs.component';
import { DashboardMessagesComponent } from './components/schoolJagat/dashboard-messages/dashboard-messages.component';
import { DashboardMessages2Component } from './components/schoolJagat/dashboard-messages2/dashboard-messages2.component';
import { DashboardOngoingjobComponent } from './components/schoolJagat/dashboard-ongoingjob/dashboard-ongoingjob.component';
import { DashboardOngoingsingleComponent } from './components/schoolJagat/dashboard-ongoingsingle/dashboard-ongoingsingle.component';
import { DashboardPackagesComponent } from './components/schoolJagat/dashboard-packages/dashboard-packages.component';
import { DashboardPostjobComponent } from './components/schoolJagat/dashboard-postjob/dashboard-postjob.component';
import { DashboardProfileComponent } from './components/schoolJagat/dashboard-profile/dashboard-profile.component';
import { DashboardProposalsComponent } from './components/schoolJagat/dashboard-proposals/dashboard-proposals.component';
import { DashboardSaveitemsComponent } from './components/schoolJagat/dashboard-saveitems/dashboard-saveitems.component';
import { HowitworksComponent } from './components/schoolJagat/howitworks/howitworks.component';
import { IndexComponent } from './components/schoolJagat/index/index.component';
import { IndexvtwoComponent } from './components/schoolJagat/indexvtwo/indexvtwo.component';
import { JavascriptComponent } from './components/schoolJagat/javascript/javascript.component';
import { JoblistingComponent } from './components/schoolJagat/joblisting/joblisting.component';
import { JobproposalComponent } from './components/schoolJagat/jobproposal/jobproposal.component';
import { JobsingleComponent } from './components/schoolJagat/jobsingle/jobsingle.component';
import { PrivacypolicyComponent } from './components/schoolJagat/privacypolicy/privacypolicy.component';
import { RegisterComponent } from './components/schoolJagat/register/register.component';
import { Register2Component } from './components/schoolJagat/register2/register2.component';
import { Register3Component } from './components/schoolJagat/register3/register3.component';
import { Register4Component } from './components/schoolJagat/register4/register4.component';
import { UserlistingComponent } from './components/schoolJagat/userlisting/userlisting.component';
import { UsersingleComponent } from './components/schoolJagat/usersingle/usersingle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    FooterComponent,
    Page404Component,
    AboutComponent,
    ArticleclassicComponent,
    ArticlegridComponent,
    ArticlelistComponent,
    ArticlesingleComponent,
    ComingsoonComponent,
    CompanygridComponent,
    CompanysigleComponent,
    DashboardAccountsettingsComponent,
    DashboardCanceljobsComponent,
    DashboardCategoryComponent,
    DashboardCompletejobsComponent,
    DashboardHelpsupportComponent,
    DashboardInsightsComponent,
    DashboardInsightsuserComponent,
    DashboardInvociesComponent,
    DashboardManagejobsComponent,
    DashboardMessagesComponent,
    DashboardMessages2Component,
    DashboardOngoingjobComponent,
    DashboardOngoingsingleComponent,
    DashboardPackagesComponent,
    DashboardPostjobComponent,
    DashboardProfileComponent,
    DashboardProposalsComponent,
    DashboardSaveitemsComponent,
    HowitworksComponent,
    IndexComponent,
    IndexvtwoComponent,
    JavascriptComponent,
    JoblistingComponent,
    JobproposalComponent,
    JobsingleComponent,
    PrivacypolicyComponent,
    RegisterComponent,
    Register2Component,
    Register3Component,
    Register4Component,
    UserlistingComponent,
    UsersingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
