import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { PuzzlepiecesComponent }   from './puzzlepieces/puzzlepieces.component';
import { PuzzlepieceDetailComponent }   from './puzzlepiece-detail/puzzlepiece-detail.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'puzzlepieces',
    component: PuzzlepiecesComponent
  },
  {
  path: 'puzzlepieces/:id',
  component: PuzzlepieceDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
