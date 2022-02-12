import { TestBed } from '@angular/core/testing';

import { MenuSideBarService } from './menu-side-bar.service';

describe('MenuSideBarService', () => {
  let service: MenuSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
