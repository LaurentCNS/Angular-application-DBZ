import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'reader/:id', component: ReaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


