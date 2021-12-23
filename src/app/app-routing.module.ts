import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';


const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:"full"},

  {path:"welcome",component:WelcomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"python",component:PythonComponent},
  {path:"java",component:JavaComponent},
  {path:"html",component:HtmlComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
