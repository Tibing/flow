import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidebarStateService } from '../state/sidebar-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'f-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  libOpened$: Observable<boolean> = this.sidebarState.libOpened$;

  constructor(private sidebarState: SidebarStateService) {
  }
}
