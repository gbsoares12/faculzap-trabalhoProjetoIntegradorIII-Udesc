import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';

import { AuthenticationService } from '../../shared/authentication.service';
import { User } from '../../../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    if(this.currentUser != null){
      this.router.navigateByUrl('/dashboard');
    }
  }
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  currentUser: User;
  constructor(public router: Router, public authenticationService: AuthenticationService, @Inject(DOCUMENT) _document?: any) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  async signOut() {
    await this.authenticationService.SignOut();
  }
}
