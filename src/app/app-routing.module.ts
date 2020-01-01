import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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



const routes:Routes=[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'articleclassic',component:ArticleclassicComponent},
  {path:'articlegrid',component:ArticlegridComponent},
  {path:'articlelist',component:ArticlelistComponent},
  {path:'articlesingle',component:ArticlesingleComponent},
  {path:'comingsoon',component:ComingsoonComponent},
  {path:'companygrid',component:CompanygridComponent},
  {path:'companysigle',component:CompanysigleComponent},
  {path:'dashboard-accountsettings',component:DashboardAccountsettingsComponent},
  {path:'dashboard-canceljobs',component:DashboardCanceljobsComponent},
  {path:'dashboard-category',component:DashboardCategoryComponent},
  {path:'dashboard-completejobs',component:DashboardCompletejobsComponent},
  {path:'dashboard-helpsupport',component:DashboardHelpsupportComponent},
  {path:'dashboard-insights',component:DashboardInsightsComponent},
  {path:'dashboard-insightsuser',component:DashboardInsightsuserComponent},
  {path:'dashboard-invocies',component:DashboardInvociesComponent},
  {path:'dashboard-managejobs',component:DashboardManagejobsComponent},
  {path:'dashboard-messages',component:DashboardMessagesComponent},
  {path:'dashboard-messages2',component:DashboardMessages2Component},
  {path:'dashboard-ongoingjob',component:DashboardOngoingjobComponent},
  {path:'dashboard-ongoingsingle',component:DashboardOngoingsingleComponent},
  {path:'dashboard-packages',component:DashboardPackagesComponent},
  {path:'dashboard-postjob',component:DashboardPostjobComponent},
  {path:'dashboard-profile',component:DashboardProfileComponent},
  {path:'dashboard-proposals',component:DashboardProposalsComponent},
  {path:'dashboard-saveitems',component:DashboardSaveitemsComponent},
  {path:'howitworks',component:HowitworksComponent},
  {path:'index',component:IndexComponent},
  {path:'indexvtwo',component:IndexvtwoComponent},
  {path:'javascript',component:JavascriptComponent},
  {path:'joblisting',component:JoblistingComponent},
  {path:'jobproposal',component:JobproposalComponent},
  {path:'jobsingle',component:JobsingleComponent},
  {path:'page404',component:Page404Component},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'register',component:RegisterComponent},
  {path:'register2',component:Register2Component},
  {path:'register3',component:Register3Component},
  {path:'register4',component:Register4Component},
  {path:'userlisting',component:UserlistingComponent},
  {path:'usersingle',component:UsersingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
